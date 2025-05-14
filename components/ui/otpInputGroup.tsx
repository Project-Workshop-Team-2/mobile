import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { Input } from './input';

type OTPInputGroupProps = {
  length?: number;
  onComplete?: (otp: string) => void;
};

const OTPInputGroup: React.FC<OTPInputGroupProps> = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (updatedOtp.every((val) => val !== '') && onComplete) {
      onComplete(updatedOtp.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const updatedOtp = [...otp];

      if (otp[index] === '') {
        if (index > 0) {
          inputsRef.current[index - 1]?.focus();
          updatedOtp[index - 1] = '';
          setOtp(updatedOtp);
        }
      } else {
        updatedOtp[index] = '';
        setOtp(updatedOtp);
      }
    }
  };

  return (
    <View className="flex-row justify-center">
      {otp.map((value, index) => (
        <Input
          key={index}
          ref={(ref) => {
            inputsRef.current[index] = ref;
          }}
          variant="otp"
          maxLength={1}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>
  );
};

OTPInputGroup.displayName = 'OTPInputGroup';

export { OTPInputGroup };
export type { OTPInputGroupProps };
