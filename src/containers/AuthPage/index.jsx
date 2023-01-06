import { Row, Col } from "antd";

import Login from "../Login";
import RegistrationForm from "../Registration";

const AuthPage = () => {
  return (
    <Row>
      <Col span={12}>{<Login />}</Col>
      <Col span={12}>{<RegistrationForm />}</Col>
    </Row>
  );
};

export default AuthPage;
