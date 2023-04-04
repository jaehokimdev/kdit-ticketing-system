import React from "react";
import { useNavigate } from "react-router-dom";
import { userActions } from "../redux/store";
import { ticketActions } from "../redux/store";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar } from "@mui/material";
import { bgBlur } from "../utils/cssStyles";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

export const Header = ({ onOpenNav }) => {
  const navigate = useNavigate();

  const { user, account, account_type } = useSelector((state) => state.users);

  let username;
  if (user[0].first_name !== "") {
    username = user[0].first_name + " " + user[0].last_name;
  } else {
    username = account[0].first_name + " " + account[0].last_name;
  }

  const logMeOut = () => {
    userActions.setLogoutUser();
    ticketActions.setLogoutTicket();
    navigate("/");
  };

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

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

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
            avatar={
              <Avatar
                {...stringAvatar("Jaeho Kim")}
                style={{ fontSize: "15px" }}
              />
            }
            color="primary"
            label="Regular User"
            style={{ fontSize: "15px" }}
          />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};
