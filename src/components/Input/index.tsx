import { TextInputProps } from "react-native";
import { Container } from "./Input.styles";

export function Input({...rest}: TextInputProps) {
  return (
    <Container 
      {...rest}
    />
  );
}