import React from 'react';
import { View } from 'react-native';
import { MenuTitle, Default } from './typography';
import { Button } from './button';

type AppHeaderSlotProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

const Header = ({ children }: { children: React.ReactNode }) => {
  let left: React.ReactElement | null = null;
  let right: React.ReactElement | null = null;
  let title: React.ReactElement | null = null;
  let subtitle: React.ReactElement | null = null;

  React.Children.forEach(children, (child: any) => {
    if (!React.isValidElement(child)) return;

    const displayName = (child.type as any).displayName;

    switch (displayName) {
      case 'HeaderLeft':
        left = child;
        break;
      case 'HeaderRight':
        right = child;
        break;
      case 'HeaderTitle':
        title = child;
        break;
      case 'HeaderSubtitle':
        subtitle = child;
        break;
    }
  });

  return (
    <View>
      <View className="flex-row items-center h-11 justify-between">
        {left}
        <View className="flex-1 items-center justify-center">
          {title}
        </View>
        {right}
      </View>
      {subtitle}
    </View>
  );
};
Header.displayName = 'Header';

const HeaderLeft = ({ children, onPress }: AppHeaderSlotProps) => (
  <Button
    variant="ghost"
    size="icon"
    onPress={onPress}
    className="rounded-[10px]"
  >
    {children}
  </Button>
);
HeaderLeft.displayName = 'HeaderLeft';

const HeaderRight = ({ children, onPress }: AppHeaderSlotProps) => (
  <Button
    variant="ghost"
    size="icon"
    onPress={onPress}
    className="rounded-[10px]"
  >
    {children}
  </Button>
);
HeaderRight.displayName = 'HeaderRight';

const HeaderTitle = ({ children }: AppHeaderSlotProps) => (
  <MenuTitle
    className="text-foreground text-center"
    numberOfLines={1}
    ellipsizeMode="tail"
  >
    {children}
  </MenuTitle>
);
HeaderTitle.displayName = 'HeaderTitle';

const HeaderSubtitle = ({ children }: AppHeaderSlotProps) => (
  <Default className="text-foreground text-center mt-1">
    {children}
  </Default>
);
HeaderSubtitle.displayName = 'HeaderSubtitle';

export { Header, HeaderLeft, HeaderRight, HeaderTitle, HeaderSubtitle };
