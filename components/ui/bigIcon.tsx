import * as React from 'react';
import { View } from 'react-native';
import { cn } from '~/lib/utils';

type BigIconProps = React.ComponentPropsWithoutRef<typeof View>;

const BigIcon = React.forwardRef<React.ElementRef<typeof View>, BigIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          'h-[120px] w-[120px] bg-background border border-input shadow-sm shadow-black/15 items-center justify-center rounded-full ',
          className
        )}
        {...props}
      />
    );
  }
);

BigIcon.displayName = 'BigIcon';

export { BigIcon };
export type { BigIconProps };
