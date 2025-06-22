import { Container, Logo, BackButton, BackIcon } from "./Header.styles";

import logoImg from "@/assets/images/logo.png";

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}