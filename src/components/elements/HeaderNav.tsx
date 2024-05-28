"use client";

import React, { useState } from "react";
import WebsiteIcon from "./WebsiteIcon";
import Container from "./Container";
import HeaderNavList from "./HeaderNavList";
import HeaderRightList from "./HeaderRightList";
import { DATA_HEADER } from "../../constants/index";
import Sidebar from "./Sidebar";
import SidebarController from "./SidebarController";

const HeaderNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="bg-white px-2 md:px-4 mx-auto w-full">
      <Container>
        <div className="flex items-center h-[100px] justify-between">
          <WebsiteIcon />
          <Sidebar DATA_HEADER={DATA_HEADER} sidebarOpen={sidebarOpen} />
          <div className="flex items-center gap-2">
            <HeaderNavList
              DATA_HEADER={DATA_HEADER}
              className={"hidden lg:block"}
            />
            <div className="bg-gray-300 h-8 w-[2px]" />
            <HeaderRightList />
            <SidebarController
              sidebarOpen={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderNav;
