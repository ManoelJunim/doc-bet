import { Col, styled, Button } from "@nextui-org/react";

const Container = styled(Col, {
  alignItems: "center",
  padding: 50,
});

const ButtonSignIn = styled(Button, {
  "&:hover": {
    bg: "#000",
  },
});

export { Container, ButtonSignIn };
