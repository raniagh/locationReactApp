import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";
import {
  HomeOutlined,
  BranchesOutlined,
  FieldTimeOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  let navigate = useNavigate();
  const getItem = (label, key, icon, keyPath, children, type) => {
    return {
      key,
      onClick: () => {
        navigate(keyPath);
      },
      icon,
      children,
      label,
      type,
    };
  };
  const items = [
    getItem("home", "1", <HomeOutlined />),
    getItem(
      "Ticketing with journey planner",
      "2",
      <BranchesOutlined />,
      "/tickets/jp"
    ),
    getItem("Departures", "3", <FieldTimeOutlined />),
    getItem("Direct ticket purchase", "sub1", <BookOutlined />, null, [
      getItem("DEUTSCHLANDTICKET Tickets", "sub2", null, null, [
        getItem("DEUTSCHLANDTICKET ABO", "4"),
      ]),
      getItem("VRR Tickets", "sub3", null, null, [
        getItem("Single and Return", "5"),
        getItem("For 24 or 48 hours", "6"),
        getItem("Season tickets", "7"),
        getItem("Monthly tickets", "8"),
        getItem("Expansion tickets", "9"),
        getItem("Subscriptions", "10"),
      ]),
      getItem("NRW Tickets", "sub4", null, null, [
        getItem("One trip in NRW", "11"),
        getItem("EinfachWeiterTickets", "12"),
      ]),
      getItem("WestfalenTarif Tickets", "sub5", null, null, [
        getItem("Häufig gekaufte Tickets", "13"),
        getItem("Für eine Fahrt im Westfalentarif", "14"),
        getItem("Tages- und Mehrtagestickets", "15"),
        getItem("Zeitkarten", "16"),
        getItem("Fahrweiter Ticket Westfalen", "17"),
      ]),
    ]),
  ];

  return (
    <Sider theme="light" className="side-menu" collapsed={collapsed}>
      <Menu
        defaultSelectedKeys={["2"]}
        mode="inline"
        style={{
          width: 256,
        }}
        items={items}
        defaultOpenKeys={["sub1"]}
      />
    </Sider>
  );
};
export default SideMenu;
