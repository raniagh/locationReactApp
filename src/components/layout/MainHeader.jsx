import React from "react";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./MainHeader.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ReactComponent as Transdevlogo } from "../../assets/svg/transdev.svg";
import { ReactComponent as Dblogo } from "../../assets/svg/db.svg";
import { ReactComponent as Vrrlogo } from "../../assets/svg/logo1.svg";

const MainHeader = () => {
  const items = [
    {
      icon: <ShoppingCartOutlined />,
    },
    {
      label: "Login",
    },
    {
      label: "Register",
    },
  ];
  return (
    <Header className="main-header">
      <div className="main-header_logo">
        <div className="main-header_logo logo1">
          <Transdevlogo
            style={{
              width: "10rem",
            }}
          />
          <Dblogo
            style={{
              width: "4rem",
              height: "3rem",
            }}
          />
        </div>

        <div>
          <Vrrlogo
            style={{
              width: "5rem",
              height: "4rem",
            }}
          />
        </div>
      </div>

      <Menu mode="horizontal" items={items} className="right-menu" />
    </Header>
  );
};

export default MainHeader;
