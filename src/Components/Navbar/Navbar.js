import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from "../Consts/NavbarItems";
import { navbarStyles } from "./Styles";
import ReorderIcon from '@mui/icons-material/Reorder';
import { Tooltip } from "@mui/material";


function Navbar(){
    const [state, setState] = React.useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
        >
          <List>
            {mainNavbarItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon
                  sx={navbarStyles.icons}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                  sx={navbarStyles.text}
                  primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
      return (
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Tooltip title="Click to show Navigation Drawer">
                <Button onClick={toggleDrawer(anchor, true)}>
                  <ReorderIcon />
                </Button>
              </Tooltip>
              <Drawer
                sx={navbarStyles.drawer}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      );
}

export default Navbar;