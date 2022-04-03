import React from "react";
import { Route, Redirect } from "react-router-dom";
import WrapperContent from "./layouts/WrapperContent";
import { auth } from "./services/auth";
import { Grid, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;
const { Title } = Typography;

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const screens = useBreakpoint();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth()) {
          if (screens.xs) {
            return (
              <div
                style={{
                  marginTop: 50,
                  borderRadius: 10,
                  border: "2px solid #d9d9d9",
                  padding: 18,
                  marginLeft: 18,
                  marginRight: 18,
                }}
              >
                <div style={{ justifyContent: "center", display: "flex" }}>
                  <WarningOutlined
                    style={{
                      color: "#cf1322",
                      fontSize: 42,
                    }}
                  />
                </div>
                <Title
                  style={{
                    color: "#595959",
                    textAlign: "center",
                    marginTop: 24,
                  }}
                  level={5}
                >
                  Sorry, the resolution mode is not yet available, please return
                  to Desktop or Tablet resolution mode, Thank you
                </Title>
              </div>
            );
          } else {
            return (
              <WrapperContent {...props}>
                <Component {...props} />
              </WrapperContent>
            );
          }
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
