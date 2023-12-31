import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import BasicCard from "../../Components/BasicCard/BasicCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { cardHeaderStyles } from "./styles";

const getSearchBar = ()=>{
    const handleChange = (value) => {
        console.log(value);
    };

    const addUser = () => {
        console.log('click')
    };

    return (
        <Box sx={cardHeaderStyles.wrapper}>
            <SearchBar 
                placeholder="Search by email address, phone number, or user UID"
                onChange={(event) => handleChange(event.target.value)}
                searchBarWidth='720px'
                onClick={addUser}
                submit_btn_msg="Add User"
                button_sx={cardHeaderStyles.addUserButton}
            />
        </Box>
    )
};

const getContent = ()=>{
    return(
        <Typography 
        align="center"
        sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users for this project yet
        </Typography>
    );
};

const Authentication = ()=>{
    return(
        <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item xs={8} lg={12}>
                <BasicCard 
                header={getSearchBar()}
                content={getContent()}
                /> 
            </Grid>
        </Grid>
    )
}
export default Authentication