import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Grow, IconButton, Popper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DashBoardIcon } from "../../../assets/dashboard_24px.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/profile.svg";
import { Box } from "@mui/system";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <Box
      sx={{
        background: "#003367",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        ref={anchorRef}
        onClick={handleToggle}
        sx={{ color: "white" }}
        data-testid="menu-button"
      >
        <MenuIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <MenuList
              onKeyDown={handleListKeyDown}
              sx={{
                width: "100%",
                right: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MenuItem onClick={handleDashboardClick}>
                <IconButton color="inherit">
                  <DashBoardIcon />
                </IconButton>
              </MenuItem>
              <MenuItem
                onClick={handleProfileClick}
                data-testid="profile-menu-item"
              >
                <IconButton color="inherit">
                  <ProfileIcon />
                </IconButton>
              </MenuItem>
            </MenuList>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default Sidebar;
