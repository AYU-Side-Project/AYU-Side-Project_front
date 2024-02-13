import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const SidebarContainer = styled.div`
  display: flex;
  width: 220px;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 80px;
  left: 0;
  background: rgba(0, 0, 0, 0.05);
  padding: 20px 0;
  z-index: 99;
`;

const MenuItem = styled.div`
  font-family: Roboto;
  padding: 10px 20px 15px;
  gap: 12px;
  line-height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.isBold ? "900" : "normal")};
  font-size: ${(props) => (props.fontSize ? "20px" : "15px")};
  color: black;
  text-decoration: none;
`;

const ArrowIcon = styled.span`
  margin-left: auto;
  font-size: 20px;
`;

const SubMenu = styled.div`
  margin-left: 20px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const SidebarItem = ({ index, text, subItems, to }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = () => {
    setOpenMenu((prev) => (prev === index ? null : index));
  };

  const handleSubItemClick = (subItemTo) => {
    if (index === 1 && subItemTo === "/findergram") {
      window.location.href = subItemTo;
    }
  };

  return (
    <>
      <Link to={to} style={{ textDecoration: "none" }}>
        <MenuItem
          onClick={toggleSubMenu}
          isBold={index === 0 || 1 || openMenu === index}
          fontSize={index === 0 || 1 || "20px" === null}
        >
          {text}
          <ArrowIcon>
            {openMenu === index ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </ArrowIcon>
        </MenuItem>
      </Link>
      <SubMenu open={openMenu === index}>
        {subItems.map((item, subIndex) => (
          <Link
            key={subIndex}
            to={item.to}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem onClick={() => handleSubItemClick(item.to)}>
              {item.label}
            </MenuItem>
          </Link>
        ))}
      </SubMenu>
    </>
  );
};

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem
        index={0}
        text="푸드 파인딩"
        subItems={[{ label: "👁️‍🗨️ 내 근처 스트릿푸드", to: "/main" }]}
      />
      <SidebarItem
        index={1}
        text="커뮤니티"
        subItems={[
          { label: "📝 파인더그램", to: "/findergram" },
          { label: "💁 오늘 뭐 먹지?", to: "/findergram" },
        ]}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
