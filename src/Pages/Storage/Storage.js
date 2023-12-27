import { Grid } from "@mui/material";
import React from "react";

const Storage = ()=>{
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
                    This is the Storage Page
                </div>
            </Grid>
        </Grid>
    )
}
export default Storage