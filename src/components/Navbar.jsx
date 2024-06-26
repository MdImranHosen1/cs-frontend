import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/userHandleSlice";

let pages = ["Users", "Vehicles", "STS", "Landfill", "Roles", "Permissions"];

let pagesLink = [
  "/users",
  "/vehicles",
  "/sts",
  "/landfills",
  "/rbac/roles",
  "/rbac/permissions",
];
const settings = ["Profile", "Dashboard", "Logout"];

export const Navbar = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userValid, setUserValid] = React.useState(false);
  const [userType, setUserType] = React.useState(false);
  const navigate = useNavigate();

  const userValidity = useSelector(
    (state) => state.userType?.userData?.userType
  );

  const userId = useSelector((state) => state.userType?.userData?.id);

  console.log("userId  ", userId);

  useEffect(() => {
    if (userValidity) {
      setUserType(userValidity);
      setUserValid(true);
    }
  }, [userValidity]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    console.log(setting);
    if (setting === "Logout") {
      dispatch(logout());
      navigate(`/`);
      window.location.reload(true);
    } else if (setting === "Dashboard") {
      navigate(`/dashboard`);
      window.location.reload(true);
    } else if (setting === "Profile") {
      navigate(`/users/${userId}`);
      window.location.reload(true);
    }

    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ zIndex: 10 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              EcoSync
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((value, index) => (
                <Link
                  to={pagesLink[index]}
                  className={`${userType === "admin" ? "" : "hidden"}`}
                >
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{value}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            href="/"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">EcoSync</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((value, index) => (
              <Link
                to={pagesLink[index]}
                className={`${userType === "admin" ? "" : "hidden"}`}
              >
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {value}
                </Button>
              </Link>
            ))}
          </Box>
          {userValid ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleCloseUserMenu(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <Button variant="text" sx={{ color: "white" }}>
                  Login
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
