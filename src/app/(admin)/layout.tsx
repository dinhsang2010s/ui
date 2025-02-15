"use client";
import React, { ReactNode, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import ImageSVG from "@/components/image-svg";
const { Header, Content, Sider } = Layout;
import styles from "./admin.module.css";
import BackgroundContainer from "@/components/background";

interface IProps {
  children: ReactNode;
}

const LayoutAdmin = (props: IProps) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { borderRadiusLG, colorBgLayout },
  } = theme.useToken();

  const menu = [
    {
      key: "dashboard",
      icon: "/assets/navbar/ic-dashboard.svg",
      label: "Dashboard",
    },
    {
      key: "category",
      icon: "/assets/navbar/ic-banking.svg",
      label: "Category",
    },
    {
      key: "blog",
      icon: "/assets/navbar/ic-blog.svg",
      label: "Blog",
    },
  ];

  const [isAuth, setIsAuth] = useState(true);

  return (
    <Layout className={styles.layout}>
      {isAuth ? (
        <>
          <Sider
            className={styles.sider}
            width={300}
            collapsed={collapsed}
            style={{ background: colorBgLayout }}
          >
            <div
              style={{
                height: 68,
                background: colorBgLayout,
                position: "relative",
              }}
              className="demo-logo-vertical flex-center"
            >
              <Button
                onClick={() => setCollapsed(!collapsed)}
                icon={
                  <div
                    style={{
                      transform: `rotate(${collapsed ? 180 : 0}deg)`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LeftOutlined style={{ width: 10, height: 10 }} />
                  </div>
                }
                style={{
                  display: "inline-block",
                  borderRadius: "50%",
                  width: 26,
                  height: 26,
                  position: "absolute",
                  right: -14,
                }}
              />
            </div>
            <Menu
              style={{ borderRight: "none" }}
              className="menu"
              mode="inline"
              defaultSelectedKeys={["Dashboard"]}
              // selectedKeys={[location.pathname.split("/")?.[1] || "Dashboard"]}
            >
              {menu.map((m) => (
                <Menu.Item
                  style={{ paddingLeft: 16 }}
                  className="menu-item"
                  key={m.key}
                  icon={<ImageSVG url={m.icon} />}
                >
                  <Link className="link-item" href={m.key}>
                    <span style={{ fontWeight: 600 }}>{m.label}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{ height: 68, padding: 0, background: colorBgLayout }}
            />
            <Content className={styles.layout_content}>{children}</Content>
          </Layout>
        </>
      ) : (
        <div className="flex-center h-screen">
          <Button type="primary" onClick={() => setIsAuth(true)}>
            Login
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default LayoutAdmin;
