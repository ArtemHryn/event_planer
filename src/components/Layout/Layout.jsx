import { useState } from "react";
import Search from "./Search/Search";
import { Box } from "../Common/Box";
import { DropdownLng, HeaderTitle } from "./Layout.styled";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({ name: "UK" });
  const language = [{ name: "UK" }, { name: "UA" }];

  return (
    <>
      <Box as="header" borderBottom="1px solid #7B61FF">
        <Box
          maxWidth={["320px", "768px", "1280px"]}
          m="0 auto"
          p={["24px", "26px 40px 18px"]}
          display="flex"
          alignItems="center"
          justifyContent={["space-between"]}
          flexWrap={["wrap", "nowrap"]}
        >
          <HeaderTitle to="/">Event Planner</HeaderTitle>
          <Box
            boxShadow={["boxShadow"]}
            borderRadius={["8px"]}
            order={[null, "3"]}
          >
            <DropdownLng
              value={selectedLanguage}
              options={language}
              optionLabel="name"
              onChange={(e) => setSelectedLanguage(e.value)}
            />
          </Box>
          <Search />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
