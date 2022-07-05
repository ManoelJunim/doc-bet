import React, { useState } from "react";
import {
  Col,
  Row,
  Image,
  Button,
  Text,
  Card,
  User,
  Spacer,
  Grid,
} from "@nextui-org/react";

import * as S from "./styles";
import { Header } from "../../components";
import { ModalBet } from "./components";
import { withAuth } from "../../hocs";

const DashboardComponet = () => {
  const [openModalBet, setOpenModalBet] = useState<boolean>(false);

  return (
    <>
      <ModalBet open={openModalBet} onClose={() => setOpenModalBet(false)} />
      <Header />
      <S.Container>
        <Col>
          <Row>
            <Grid.Container alignItems="center" gap={1}>
              <Grid xs={12} md={6} justify="center">
                <Grid xs={12} md={2}>
                  <Button
                    onPress={() => setOpenModalBet(true)}
                    color="success"
                    css={{ width: "100%" }}
                  >
                    <Text b>APOSTAR</Text>
                  </Button>
                </Grid>
              </Grid>
              <Grid xs={12} md={6} justify="center">
                <Text b>Valor médio de acessos Whom : 2902</Text>
              </Grid>
            </Grid.Container>
          </Row>
          <Spacer />
          <Row justify="center">
            <Card css={{ mw: "400px" }}>
              <Card.Footer css={{ bg: "#313131" }}>
                <Row justify="center">
                  <Text b color="success">
                    RANKING
                  </Text>
                </Row>
              </Card.Footer>
              <Card.Divider />
              <Card.Body>
                <Row align="center">
                  <Text b h2>
                    1º
                  </Text>
                  <User
                    size="xl"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    name="Henrique Martinelli"
                    description="@Time Digital"
                    color="success"
                    bordered
                    squared
                  />
                  <Image
                    height={100}
                    width={100}
                    src="trophy.png"
                    alt="tropy"
                  />
                </Row>
              </Card.Body>

              <Card.Divider />
              <Card.Body>
                <Row justify="center">
                  <Text b small>
                    2900 acessos
                  </Text>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Spacer />
          <Row justify="center">
            <Card css={{ mw: "400px" }}>
              <Card.Body>
                <Row align="center" justify="space-around">
                  <Text b h2>
                    2º
                  </Text>
                  <User
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name="Marina Perreira"
                    description="@Time Digital"
                    color="error"
                    bordered
                    squared
                  />

                  <Text> 3500 </Text>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Spacer />
          <Row justify="center">
            <Card css={{ mw: "400px" }}>
              <Card.Body>
                <Row align="center" justify="space-around">
                  <Text b h2>
                    3º
                  </Text>
                  <User
                    src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
                    name="Renato Silva"
                    description="@Time Digital"
                    color="error"
                    bordered
                    squared
                  />

                  <Text> 3500 </Text>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Spacer />
          <Row justify="center">
            <Card css={{ mw: "400px" }}>
              <Card.Body>
                <Row align="center" justify="space-around">
                  <Text b h2>
                    4º
                  </Text>
                  <User
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    name="Beatriz Costa"
                    description="@Time Digital"
                    color="error"
                    bordered
                    squared
                  />

                  <Text> 3500 </Text>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Spacer />
          <Row justify="center">
            <Card css={{ mw: "400px" }}>
              <Card.Body>
                <Row align="center" justify="space-around">
                  <Text b h2>
                    5º
                  </Text>
                  <User
                    src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
                    name="William Howard"
                    description="@Time Digital"
                    color="error"
                    bordered
                    squared
                  />

                  <Text> 3500 </Text>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </S.Container>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#313131"
            fill-opacity="1"
            d="M0,320L26.7,314.7C53.3,309,107,299,160,282.7C213.3,267,267,245,320,197.3C373.3,149,427,75,480,90.7C533.3,107,587,213,640,224C693.3,235,747,149,800,138.7C853.3,128,907,192,960,234.7C1013.3,277,1067,299,1120,288C1173.3,277,1227,235,1280,192C1333.3,149,1387,107,1413,85.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg> */}
    </>
  );
};

const Dashboard = withAuth(DashboardComponet);

export { Dashboard };
