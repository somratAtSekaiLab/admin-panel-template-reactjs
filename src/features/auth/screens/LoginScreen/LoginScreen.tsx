import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Input, message, Row } from "antd";

import Button from "@app/components/atoms/Button/Button";
import Form, { Item, useForm } from "@app/components/atoms/Form/Form";
import { LoginRequestDef } from "@app/features/auth/auth";
import { useAppDispatch, useAppSelector } from "@app/redux/store";

import useRedirectAfterLogin from "../../hooks/useRedirectAfterLogin";
import { login } from "../../redux/auth.slice";
import styles from "./LoginScreen.module.scss";

/**
 * TODO: Discard this after demo phase
 */
const DEMO_USER_NAME = "george.bluth@reqres.in";

const LoginScreen = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);
  useRedirectAfterLogin();

  const handleFinish = async (values: LoginRequestDef) => {
    const response = await dispatch(login(values));
    if (login.fulfilled.match(response)) {
      message.success("Login successful");
    } else {
      message.error("Login failed");
    }
  };

  return (
    <Row justify="center" align="middle" className={styles.container}>
      <Col xs={24} sm={12} lg={6}>
        <Card title="Login">
          <Form form={form} onFinish={handleFinish}>
            <Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                  whitespace: true,
                  message: "Please input your email!",
                },
              ]}
              initialValue={DEMO_USER_NAME}
            >
              <Input prefix={<UserOutlined />} type="text" />
            </Item>
            <Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Login
              </Button>
            </Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginScreen;
