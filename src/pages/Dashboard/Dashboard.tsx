import React, { useState } from "react";
import {
  Avatar,
  Col,
  Row,
  Image,
  Button,
  Text,
  Card,
  User,
  Spacer,
} from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import * as S from "./styles";
import { Header } from "../../components";
import { ModalBet } from "./components";

const Dashboard = () => {
  const [openModalAposta, setOpenModalAposta] = useState<boolean>(false);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "whom - doc9",
      },
    },
  };

  const labels = [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Número de acessos",
        data: labels.map(() => Math.floor(Math.random() * 4000)),
        backgroundColor: "rgba(47, 41, 41, 0.9)",
      },
    ],
  };

  return (
    <>
      <ModalBet
        open={openModalAposta}
        onClose={() => setOpenModalAposta(false)}
      />
      <Header />
      <S.Container>
        <Col>
          {/* <Row>
          <Button onPress={() => setOpenModalAposta(true)} color="success">
            <Text color="#000" b>
              APOSTAR
            </Text>
          </Button>
        </Row> */}
          <Spacer />
          <Row justify="center">
            <Card css={{ mw: "250px" }}>
              <Card.Footer css={{ bg: "#ffffffAA" }}>
                <Text b>ATUAL CAMPEÃO</Text>
              </Card.Footer>
              <Card.Divider />
              <Card.Body>
                <User
                  size="xl"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  name="Henrique Martinelli"
                  description="@Time Digital"
                  color="success"
                  bordered
                  squared
                />
              </Card.Body>

              <Card.Divider />
              <Card.Body>
                <Text b small>
                  Chutou: 2900 acessos
                </Text>
              </Card.Body>
            </Card>
          </Row>
          <Spacer />

          <Row>
            <Text h2>Participantes</Text>
          </Row>
          <Spacer />
          <Row>
            <User
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              name="Marina Perreira"
              description="@Time Digital"
              color="error"
              bordered
              squared
            />
          </Row>
          <Spacer />
          <Row>
            <User
              src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
              name="Renato Silva"
              description="@Time Digital"
              color="error"
              bordered
              squared
            />
          </Row>
          <Spacer />
          <Row>
            <User
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              name="Beatriz Costa"
              description="@Time Digital"
              color="error"
              bordered
              squared
            />
          </Row>
          <Spacer />
          <Row>
            <User
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              name="Henrique Martinelli"
              description="@Time Digital"
              color="success"
              bordered
              squared
            />
          </Row>
        </Col>
        <Col>
          <Row css={{ maxH: 200, maxW: 600 }}>
            <Bar width="100%" height="100%" options={options} data={data} />
          </Row>
        </Col>
      </S.Container>
    </>
  );
};

export { Dashboard };
