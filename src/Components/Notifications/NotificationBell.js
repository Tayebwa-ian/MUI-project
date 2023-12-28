import { Badge, Tooltip, IconButton } from "@mui/material";
import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import BasicMenu from "../CommonMenu/BasicMenu";

function NotificationBell() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const notifications = [
        {
            id : 1, 
            label : "messages"
        },
        {
            id : 2, 
            label : "pending approvals"
        }
    ]
    return (
        <Tooltip
            title={notifications.length ? `You have ${notifications.length} notifications` : "You do not have any notifications"}
        >
            <div>
                <IconButton 
                aria-label="notifications" 
                color="inherit"
                onClick={notifications.length ? handleClick : null}
                >
                    <Badge
                        badgeContent={notifications.length ? notifications.length : 0}
                        color={notifications.length ? "primary" : "secondary"}
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <BasicMenu 
                    onClick={handleClose}
                    anchorEl={anchorEl}
                    menuItems={notifications}
                />
            </div>
        </Tooltip>
    );
}

export default NotificationBell;