import * as React from 'react';
import { Text, Pressable, Linking, View } from 'react-native';
import { router } from 'expo-router';
import { TextClassContext } from '~/components/ui/text';
import { cn } from '~/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const linkTextVariants = cva('text-[14px]', {
  variants: {
    variant: {
      default: 'underline text-muted-foreground',
      semibold: 'font-semibold text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof linkTextVariants>;

const Link = React.forwardRef<React.ElementRef<typeof Pressable>, LinkProps>(
  ({ href, children, className, icon, variant, ...props }, ref) => {
    
    const handlePress = async () => {
      if (href.startsWith('http')) {
        const supported = await Linking.canOpenURL(href);
        if (supported) {
          await Linking.openURL(href);
        }
      } else {
        router.push(href as any); 
      }
    };

    const textStyle = cn(linkTextVariants({ variant }), className);

    return (
      <TextClassContext.Provider value={textStyle}>
        <Pressable onPress={handlePress} ref={ref} {...props}>
          <View className="flex-row items-center gap-x-2">
            {icon}
            <Text className={textStyle}>{children}</Text>
          </View>
        </Pressable>
      </TextClassContext.Provider>
    );
  }
);

Link.displayName = 'Link';

export { Link, linkTextVariants };
export type { LinkProps };

Link.displayName = 'Link';
