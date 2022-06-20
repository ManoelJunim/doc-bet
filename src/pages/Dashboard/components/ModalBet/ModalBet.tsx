import React from "react";
import {
  Button,
  Divider,
  Input,
  Modal,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import { IModalBet } from "./types";

const ModalBet = (props: IModalBet) => {
  const { open, onClose } = props;

  return (
    <Modal open={open} onClose={onClose} closeButton>
      <Modal.Header>
        <Text h2>Fazer aposta</Text>
      </Modal.Header>
      <Spacer />
      <Row justify="center">
        <Input
          width="90%"
          placeholder="Informar o valor"
          bordered
          type="number"
        />
      </Row>
      <Modal.Footer>
        <Button auto color="success">
          <Text color="#000" b>
            SALVAR
          </Text>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ModalBet };
