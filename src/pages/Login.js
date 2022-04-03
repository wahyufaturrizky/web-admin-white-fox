import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Modal,
  Row,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { auth } from "../services/auth";
import { ColorBaseEnum } from "../styles/Colors";
import "../styles/Dashboard.css";

const { Content } = Layout;
const { Title } = Typography;

const Login = (props) => {
  const [contextHolder] = Modal.useModal();
  const [isLoading] = useState(false);
  useEffect(() => {
    props.history.push(auth() ? "/overview" : "/");
  }, [props.history]);

  const onFinish = async (values) => {
    localStorage.setItem(
      "dataUser",
      JSON.stringify({
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTA5NzU2MDM4ZmU0MjAxMDk1ZGEyYTAxNTkyNmRkNTdmNjk2ODk1NzdmMDc5Y2VkYjgxOTVkMDZlNzAxNjAzOTNkYTNlMmEzMWVmOWY5MTkiLCJpYXQiOjE2NDg5OTcxMjMsIm5iZiI6MTY0ODk5NzEyMywiZXhwIjoxNjgwNTMzMTIzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ISqJ94QfRtOwm6Si2DxYW2esFtXvdRzowooIbWFYyM3KHLj0iPwqqBhal9jYti7QqlXgdoiHp7UP5NNL-2KBtYvler3gJF0w0iB8EFW1QCG7HAYhlawwr8ohLPb6AT1OnTbQ9GruMMKMHRfBTlK8w9_GzpqcaVM6g04q0Bz9fZL49SftZdsqCVc_JCaj8B-L67zkU8kAQA43r2sqZGn16uJJ065XAvFgcEQH1NtVuIkWxa2sbcyLgm1qJ3mcQpgrvmOgOn-0Ghu55P7rE9GaEvy2XEbbBOkwtuJwdNsDADmnzLeevO-IawImNrj8-KkIrhUfrYAHKrgc3ruhZNjxHymXHk0zln6aCl-z2vm3lrY_WbPssYAxmBUwiy-PD0wUELfYHfWAc9sKh7Q125-2oXYHcjCa4PSh2TrxjTpQfBNWKBGPp048wo0irAKgNDGIxvydJGMLOsFXfvlzNmDg1U5fupYDgS0mLuTX9iMULZDfXqykaNjQzbIjfLSXsPVJRXFzAYtfuz_Fwkb7hJNmVAPU2iNW2jSwdprPqFlUwylLfnoDM4Za-iLHftBzMP_NRzv_snDw9Toa0b6dyh07saxIYKXhS-B-ukLH0LVfF-9fdIb13TeowsO1bAmAWw100O7hwWAnPvlQlGirMJeEYe_d_xUIkMu1X4s63zS0qrY",
      })
    );
    props.history.push("/overview");
    // let data = new FormData();
    // data.append("username", values.username);
    // data.append("password", values.password);
    // setIsLoading(true);
    // const res = await postLogin(data).catch((err) => {
    //   modal.error({
    //     title: "Failed Login!",
    //     content: (
    //       <p>{err?.response?.data?.message || "Internal server error"}</p>
    //     ),
    //     onOk: () => {},
    //   });
    //   setIsLoading(false);
    // });
    // if (res && res.status === 200) {
    //   if (res.data === "") {
    //     setIsLoading(false);
    //     modal.error({
    //       title: "Failed login!",
    //       content: <p>Username/password is not correct, please try again</p>,
    //       onOk: () => {},
    //       onCancel: () => {},
    //     });
    //   } else {
    //     localStorage.setItem("dataUser", JSON.stringify(res.data));
    //     props.history.push("/master-specification");
    //     setIsLoading(false);
    //   }
    // }
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Row style={{ justifyContent: "center" }}>
        <Col style={{ maxWidth: 450 }}>
          <Content>
            <div
              style={{
                backgroundColor: ColorBaseEnum.white,
                border: `2px solid ${ColorBaseEnum.black}`,
                borderRadius: 10,
                paddingRight: 12,
                paddingLeft: 12,
                paddingTop: 12,
                paddingBottom: 12,
                marginTop: 24,
              }}
            >
              <div>
                <div className="logo">
                  <Image
                    width={200}
                    height={200}
                    style={{ alignSelf: "center" }}
                    src="https://i.ibb.co/bFyypwf/logo-white-fox.png"
                    fallback="data:image/png;base64,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"
                  />
                </div>
                <Title
                  style={{ textAlign: "center", color: ColorBaseEnum.black }}
                  level={5}
                >
                  Web Admin
                </Title>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    colon={false}
                    label={
                      <label style={{ color: ColorBaseEnum.black }}>
                        Username
                      </label>
                    }
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    colon={false}
                    label={
                      <label style={{ color: ColorBaseEnum.black }}>
                        Password
                      </label>
                    }
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      loading={isLoading}
                      type="primary"
                      style={{
                        backgroundColor: ColorBaseEnum.black,
                        border: `1px solid ${ColorBaseEnum.black}`,
                      }}
                      htmlType="submit"
                    >
                      Log In
                    </Button>
                  </Form.Item>
                </Form>
                <p
                  style={{
                    textAlign: "center",
                    color: ColorBaseEnum.black,
                  }}
                >
                  WHITE FOX ADMIN @2022 Created by
                  <span>
                    <a
                      href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
                      rel="noreferrer"
                      style={{ color: ColorBaseEnum.black, fontWeight: "bold" }}
                      target="_blank"
                    >
                      {" "}
                      Team Dev
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </Content>
        </Col>
      </Row>
      {contextHolder}
    </Layout>
  );
};

export default Login;
