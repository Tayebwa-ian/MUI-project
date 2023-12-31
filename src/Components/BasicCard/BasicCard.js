import { Card, CardContent, Divider } from "@mui/material";
import React from "react";
import { cardStyles } from "./styles";

const BasicCard = ({header, content})=>{
    return(
        <Card sx={cardStyles}>
            {header}
            <Divider />
            <CardContent>
                {content}
            </CardContent>
        </Card>
    );
}

export default BasicCard;