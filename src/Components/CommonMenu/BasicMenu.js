import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({anchorEl, onClick, menuItems}) {
    const open = Boolean(anchorEl);
  
    return (
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={onClick}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {menuItems?.map((item)=>{
            return(
            <MenuItem onClick={onClick} key={item.id}>{item.label}</MenuItem>
            )})}
        </Menu>
      </div>
    );
  }