import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export interface PageWrapperProps {
    children: React.ReactNode;
}

export function PageWrapper(props: PageWrapperProps) {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, }}
        >
            <Toolbar/>
            { props.children }
        </Box>
    );
}
