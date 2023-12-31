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
import { Divider, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";


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

      const navigate = useNavigate();
    
      const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
        >
          <List>
            {mainNavbarItems.map((item) => (
              <ListItem 
              key={item.id} 
              disablePadding
              onClick={()=>navigate(item.route)}
              >
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
        <Box>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Tooltip title="Click to show Navigation Drawer">
                <Button onClick={toggleDrawer(anchor, true)}>
                  <ReorderIcon fontSize="large" />
                </Button>
              </Tooltip>
              <Drawer
                sx={navbarStyles.drawer}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <Box sx={{marginTop: 5}}/>
                {list(anchor)}
                <Divider sx={{bgcolor: "white", marginTop: 5}}/>
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
      );
}

export default Navbar;