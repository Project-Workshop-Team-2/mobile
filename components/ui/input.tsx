import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { View, TextInput, Pressable, type TextInputProps } from 'react-native';
import { cn } from '~/lib/utils';


import { Eye } from '~/lib/icons/eye'; 
import { EyeClosed } from '~/lib/icons/eyeClosed';

const inputVariants = cva(
  'h-[40px] rounded-[10px] border border-input shadow-sm shadow-black/15 bg-background px-[10px] text-sm text-foreground placeholder:text-muted-foreground text-justify focus:outline-none focus:border-primary ',
  {
    variants: {
      variant: {
        default: '',
        password: 'pr-[36px]',
        otp: 'h-[60px] w-[60px] mx-[10px] px-0 text-center text-2xl ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type InputProps = TextInputProps &
  VariantProps<typeof inputVariants> & {
    placeholderClassName?: string;
  };

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
({ className, placeholderClassName, variant, placeholder, ...props }, ref) => {
    const isPassword = variant === 'password';
    const isOtp = variant === 'otp';
    const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(isPassword);

    return (
    <View>
        <TextInput
        ref={ref}
        className={cn(
            inputVariants({ variant }),
            props.editable === false && 'opacity-50 web:cursor-not-allowed',
            className
        )}
        placeholderClassName={cn( placeholderClassName)}
        secureTextEntry={isSecureTextEntry}
        placeholder={placeholder ?? (isOtp ? '-' : undefined)}
        keyboardType={isOtp ? 'number-pad' : props.keyboardType}
        textContentType={isOtp ? 'oneTimeCode' : props.textContentType}
        caretHidden={isOtp ? true : props.caretHidden}
        {...props}
        />
        
        {isPassword && (
        <Pressable
            onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
            className="absolute right-[10px] top-1/2 transform -translate-y-1/2"
        >
            {isSecureTextEntry ? (
            <EyeClosed className="text-foreground" size={16} strokeWidth={1.25} />
            ) : (
            <Eye className="text-foreground" size={16} strokeWidth={1.25} />
            )}
        </Pressable>
        )}
    </View>
    );
}
);
  

Input.displayName = 'Input';

export { Input, inputVariants };
export type { InputProps };