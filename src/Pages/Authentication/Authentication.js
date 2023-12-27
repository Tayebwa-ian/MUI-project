import { Grid } from "@mui/material";
import React from "react";
import CommonButton from "../../Components/CommonButton/CommonButton";
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
                <div>
                    This is the Sign-in Page
                    <CommonButton
                    variant="outlined" 
                    size="medium"
                    >
                        Add User
                    </CommonButton>
                </div>   
            </Grid>
        </Grid>
    )
}
export default Authentication