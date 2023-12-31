import { Box, IconButton, Input } from "@mui/material";
import React from "react";
import CommonButton from "../CommonButton/CommonButton";
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({placeholder, submit_btn_msg, onChange, onClick, searchBarWidth, search_bar_sx, button_sx})=>{
    return(
        <Box sx={search_bar_sx}>
            <SearchIcon sx={{ marginRight: '10px' }}/>
            <Input
            placeholder={placeholder}
            onChange={onChange}
            sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
            disableUnderline
            />
            <CommonButton
            children={submit_btn_msg}
            onClick={onClick}
            sx={button_sx}
            color='primary'
            />
            <IconButton>
                <RefreshIcon />
            </IconButton>
        </Box>
    );
}

export default SearchBar;