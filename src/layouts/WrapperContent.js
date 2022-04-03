/* eslint-disable react-hooks/rules-of-hooks */
import {
  CaretDownOutlined,
  DatabaseOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Dropdown,
  Image,
  Layout,
  Menu,
  Space,
  Typography,
  Modal,
} from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { ColorBaseEnum } from "../styles/Colors";
import "../styles/Dashboard.css";

const { Title } = Typography;
const { Header, Footer, Sider } = Layout;
const { SubMenu, ItemGroup, Item } = Menu;

const ItemGroupBase = styled(ItemGroup)`
  .ant-menu-item-group-title {
    color: black;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #000;

    .ant-menu-title-content > a {
      color: white;
    }
  }
`;
const ItemBase = styled(Item)``;

const rootSubmenuVendorKeys = ["suboverview1"];

const menuProfile = (props, modal) => {
  return (
    <Menu>
      <ItemBase
        onClick={() => {
          modal.confirm({
            title: "Message system!",
            content: <p>Apakah anda ingin keluar dari halaman web ini?</p>,
            onOk: () => {
              localStorage.removeItem("dataUser");
              props.history.push("/");
            },
            onCancel: () => {},
          });
        }}
      >
        Log out
      </ItemBase>
    </Menu>
  );
};

const WrapperContent = (props) => {
  const user = JSON.parse(localStorage.getItem("dataUser")).user;
  const [modal, contextHolder] = Modal.useModal();
  const [openKeys, setOpenKeys] = useState(
    props?.match?.url === "/overview"
      ? ["suboverview1"]
      : props?.match?.url === "/plan"
      ? ["suboverview1"]
      : null
  );
  const [collapsed, setCollapsed] = useState(false);
  console.log(props.location);
  const listMenu = [
    {
      title: "Projects",
      nameIcon: "DatabaseOutlined",
      subMenu: [
        {
          title: "Dashboard",
          nameIcon: "DatabaseOutlined",
          path: "/overview",
          onClick: () => props.history.push("/overview"),
        },
        {
          title: "Plan",
          nameIcon: "DatabaseOutlined",
          path: "/plan",
          onClick: () => props.history.push("/plan"),
        },
      ],
    },
  ];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuVendorKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout>
      <Sider
        width={250}
        style={{
          backgroundColor: ColorBaseEnum.white,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <Image
            width={200 * (collapsed ? 0.2 : 0.4)}
            height={200 * (collapsed ? 0.2 : 0.4)}
            style={{ alignSelf: "center" }}
            src="https://i.ibb.co/bFyypwf/logo-white-fox.png"
            fallback="data:image/png;base64,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"
          />
        </div>
        <Menu
          onOpenChange={onOpenChange}
          style={{ backgroundColor: ColorBaseEnum.white }}
          mode="inline"
          openKeys={openKeys}
          selectedKeys={
            props?.match?.url === "/overview"
              ? ["subproject1"]
              : props?.match?.url === "/plan"
              ? ["subproject2"]
              : null
          }
        >
          <ItemGroupBase key="g1" title="Overview">
            {listMenu?.map((subDataVendor, subIndexVendor) => {
              const { title, nameIcon, subMenu } = subDataVendor;
              return (
                <SubMenu
                  style={{ color: ColorBaseEnum.black }}
                  className="submenu"
                  key={`suboverview${subIndexVendor + 1}`}
                  icon={
                    nameIcon === "DatabaseOutlined" ? (
                      <DatabaseOutlined />
                    ) : null
                  }
                  title={title}
                >
                  {subMenu &&
                    subMenu?.map((subData, subIndex) => {
                      const { title, nameIcon, path } = subData;
                      return (
                        <ItemBase
                          key={
                            title === "Dashboard"
                              ? `subproject${subIndex + 1}`
                              : title === "Plan"
                              ? `subproject${subIndex + 1}`
                              : null
                          }
                          icon={
                            nameIcon === "DatabaseOutlined" ? (
                              <DatabaseOutlined />
                            ) : null
                          }
                        >
                          <a
                            href={path}
                            target="_self"
                            rel="noopener noreferrer"
                          >
                            {title}
                          </a>
                        </ItemBase>
                      );
                    })}
                </SubMenu>
              );
            })}
          </ItemGroupBase>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: "0px 16px" }}
        >
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MenuOutlined
              onClick={() => setCollapsed(!collapsed)}
              className="trigger"
            />
            <Title level={5}></Title>
            <div>
              <Space>
                <Avatar size="default" icon={<UserOutlined />} />
                <Dropdown overlay={menuProfile(props, modal)}>
                  <span>
                    {user?.fullname || "Wahyu Fatur Rizki"}
                    <CaretDownOutlined />
                  </span>
                </Dropdown>
              </Space>
            </div>
          </div>
        </Header>
        {props.children}
        <Footer style={{ textAlign: "center" }}>
          <p>
            Web Admin White Fox @2022 Created by{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
                target="_blank"
                rel="noreferrer"
              >
                Team Dev
              </a>
            </span>
          </p>
        </Footer>
      </Layout>
      {contextHolder}
    </Layout>
  );
};

export default WrapperContent;
