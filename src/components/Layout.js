// import React from "react";
// import { Header } from "./Header";
// import { Footer } from "./Footer";

// const Layout = ({ children }) => {
//   return (
//     <div className="default-layout">
//       <header className="header">
//         <Header />
//       </header>
//       <main className="main">{children}</main>
//     </div>
//   );
// };

// export default Layout;

import { useState } from "react";
import { styled } from "@mui/material/styles";
//
import { Header } from "./Header";
import Nav from "../nav";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 80;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <Main>{children}</Main>
    </StyledRoot>
  );
}
