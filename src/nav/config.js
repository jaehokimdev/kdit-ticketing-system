// component
import SvgColor from "../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "Dashboard",
    path: "/main",
    icon: icon("ic_analytics"),
  },
  {
    title: "Tickets",
    path: "/tickets",
    icon: icon("ic_user"),
  },
  {
    title: "Logout",
    path: "/",
    icon: icon("ic_cart"),
  },
];

export default navConfig;
