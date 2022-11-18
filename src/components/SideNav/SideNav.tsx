import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { DRAWER_WIDTH } from "../../consts";

export function SideNav() {
    return (
        <Drawer variant="permanent" color="default"
            sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, boxSizing: 'border-box', },
            }}
        >
            <Toolbar/>
            <Box>
                <Typography>sidenav</Typography>
                <Divider/>
            </Box>
        </Drawer>
    );
}
