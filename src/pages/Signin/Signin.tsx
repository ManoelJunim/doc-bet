import React, { useContext } from "react";
import { Row, Text, Image, Spacer } from "@nextui-org/react";
import { GrGoogle } from "@react-icons/all-files/gr/GrGoogle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { signInWithPopup } from "firebase/auth";
import { auth, authGoogle } from "../../services";
import * as S from "./styles";
import { SessionContext } from "../../contexts";

const Signin = () => {
  const navigate = useNavigate();
  const { refreshSession } = useContext(SessionContext);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, authGoogle);
      refreshSession();
      navigate("/");
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
        <Text color="#313131" h1 b>
          Docbet
        </Text>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <S.ButtonSignIn
          icon={<GrGoogle />}
          size="md"
          css={{ minWidth: "370px", bg: "#313131" }}
          onPress={signInWithGoogle}
        >
          <Text color="#fff" b>
            Sign in
          </Text>
        </S.ButtonSignIn>
      </Row>
      <Spacer y={0.5} />
      <Row justify="center">
        <Text color="#313131" b small>
          Válido somente e-mail corporativo Doc9.
        </Text>
      </Row>
    </S.Container>
  );
};

export { Signin };
