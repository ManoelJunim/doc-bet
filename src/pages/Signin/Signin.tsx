import React from "react";
import { Row, Text, Image, Button, Spacer } from "@nextui-org/react";
import { GrGoogle } from "@react-icons/all-files/gr/GrGoogle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { auth, authGoogle } from "../../services";
import * as S from "./styles";

const Signin = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, authGoogle);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(
        `${
          error?.message?.split(":").slice(-1)[0].trim() ??
          "Erro ao realizar login"
        }`
      );
      console.log({ error });
    }
  };

  return (
    <S.Container>
      <Row>
        <Image src="doc.png" alt="Default Image" width={150} height={150} />
      </Row>
      <Row justify="center">
        <Text h1 b>
          Docbet
        </Text>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Button
          icon={<GrGoogle />}
          size="md"
          color="success"
          css={{ minWidth: "400px", bg: "#000" }}
          onPress={signInWithGoogle}
        >
          <Text color="success" b>
            Sign in
          </Text>
        </Button>
      </Row>
      <Spacer y={0.5} />
      <Row justify="center">
        <Text b small>
          Válido somente e-mail corporativo Doc9.
        </Text>
      </Row>
    </S.Container>
  );
};

export { Signin };
