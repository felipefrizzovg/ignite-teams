import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStyleProps } from "./Filter.styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export default function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container 
      isActive={isActive} 
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  );
}