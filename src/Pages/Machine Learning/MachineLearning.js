import { Grid } from "@mui/material";
import React from "react";

const MachineLearning = ()=>{
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
                    This is the MachineLearning Page
                </div>
            </Grid>
        </Grid>
    )
}
export default MachineLearning