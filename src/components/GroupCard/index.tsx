import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./GroupCard.styles";

type Props = TouchableOpacityProps & {
  title: string
}

export default function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}