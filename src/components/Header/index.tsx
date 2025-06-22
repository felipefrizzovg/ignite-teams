import { Container, Logo } from "./Header.styles";

import logoImg from "@/assets/images/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  )
}