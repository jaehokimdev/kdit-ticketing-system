import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar } from "@mui/material";
import { bgBlur } from "../utils/cssStyles";
import Chip from "@mui/material/Chip";

export const Header = ({ onOpenNav }) => {
  const { account_type } = useSelector((state) => state.users);

  const NAV_WIDTH = 280;

  const HEADER_MOBILE = 64;

  const HEADER_DESKTOP = 92;

  const StyledRoot = styled(AppBar)(({ theme }) => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${NAV_WIDTH + 1}px)`,
    },
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up("lg")]: {
      minHeight: HEADER_DESKTOP,
      padding: theme.spacing(0, 5),
    },
  }));

  Header.propTypes = {
    onOpenNav: PropTypes.func,
  };

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Chip
            color="primary"
            label={account_type}
            style={{ fontSize: "15px" }}
          />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};
