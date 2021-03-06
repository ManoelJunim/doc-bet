import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Dropdown, Avatar } from "@nextui-org/react";
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";

import * as S from "./styles";
import { auth } from "../../services";
import { SessionContext } from "../../contexts";

const Header = () => {
  const { user } = useContext(SessionContext);
  const navigate = useNavigate();
  function logOut() {
    auth
      .signOut()
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <S.Container>
      <Col>
        <Row justify="flex-start">
          <img src="logoDoc.png" alt="logo" width={40} height={40} />
        </Row>
      </Col>
      <Col>
        <Row justify="flex-end" align="center">
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <Avatar
                size="md"
                src={`${user?.photoURL}`}
                alt={`${user?.displayName}`}
                color="success"
                bordered
              />
            </Dropdown.Trigger>
            <Dropdown.Menu
              aria-label="User Actions"
              css={{ $$dropdownMenuWidth: "50px" }}
              selectionMode="single"
              onSelectionChange={logOut}
            >
              <Dropdown.Item key="profile">
                <AiOutlineLogout size={20} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
      </Col>
    </S.Container>
  );
};

export { Header };
