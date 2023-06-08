const data = `
Here's an example of how you can create a reusable react native button component in TypeScript with separate style and test files.

Button.tsx:
```tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  titleStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, titleStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Button;
```

Button.styles.ts:

```tsx
import { StyleSheet, ViewStyle } from 'react-native';

interface ButtonStyleProps {
  button: ViewStyle;
  title: ViewStyle;
}

const ButtonStyles = StyleSheet.create<ButtonStyleProps>({
  button: {
    backgroundColor: '#FF9500',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ButtonStyles;
```

Button.test.tsx:

```tsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('should render correctly with default props', () => {
    const { getByText } = render(<Button title="Button" onPress={() => {}} />);
    expect(getByText('Button')).toBeDefined();
  });

  it('should call onPress function when button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="Button" onPress={onPress} />);
    fireEvent.press(getByText('Button'));
    expect(onPress).toBeCalled();
  });
});
```

In the `Button.styles.ts` file, we define a separate `ButtonStyles` object that contains the custom styling for the button and title components. We can use this object by passing it as a prop to the `Button` component.

In the `Button.test.tsx` file, we write unit tests to ensure that the component renders correctly and the `onPress` function gets called when the button is pressed.`