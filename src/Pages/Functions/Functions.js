import { Grid } from "@mui/material";
import React from "react";

const Functions = ()=>{
    return(
        <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item xs={8}>
                <div>
                    This is the Functions Page
                </div>
            </Grid>
        </Grid>
    )
}
export default Functions