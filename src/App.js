import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import MainHeader from "./components/layout/MainHeader";
import SideMenu from "./components/layout/SideMenu";
import Footer from "./components/layout/Footer";
import Location from "./pages/Location";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2b7b00",
        },
      }}
    >
      <Router>
        <Layout>
          <MainHeader />
          <Layout>
            <SideMenu />
            <Layout className="main-content">
              <Routes>
                <Route path="/" element={<Location />} />
              </Routes>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
