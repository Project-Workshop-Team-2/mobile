import * as Slot from '@rn-primitives/slot';
import type { SlottableTextProps, TextRef } from '@rn-primitives/types';
import * as React from 'react';
import { Platform, Text as RNText } from 'react-native';
import { cn } from '~/lib/utils';



const Title = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_700Bold',
            fontSize: 26,
          },
          style,
        ]}
        ref={ref}
        {...props}

      />
    );
  }
);
Title.displayName = 'Title';

const MenuTitle = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        ref={ref}
        {...props}
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_700Bold',
            fontSize: 18,
          },
          style,
        ]}
      />
    );
  }
);
MenuTitle.displayName = 'MenuTitle';

const Default = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_400Regular',
            fontSize: 14,
          },
          style,
        ]}
        ref={ref}
        {...props}

      />
    );
  }
);
Default.displayName = 'Default';

const Accent = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_600SemiBold',
            fontSize: 14,
          },
          style,
        ]}
        ref={ref}
        {...props}

      />
    );
  }
);
Accent.displayName = 'Accent';

const Tags = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_400Regular',
            fontSize: 10,
          },
          style,
        ]}
        ref={ref}
        {...props}

      />
    );
  }
);
Tags.displayName = 'Tags';

const Small = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_400Regular',
            fontSize: 12,
          },
          style,
        ]}
        ref={ref}
        {...props}

      />
    );
  }
);
Small.displayName = 'Small';

const SmallBold = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, style, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(className)}
        style={[
          {
            fontFamily: 'Inter_600SemiBold',
            fontSize: 12,
          },
          style,
        ]}
        ref={ref}
        {...props}

      />
    );
  }
);
SmallBold.displayName = 'SmallBold';

export { Title, MenuTitle, Default, Accent, Tags, Small, SmallBold };
