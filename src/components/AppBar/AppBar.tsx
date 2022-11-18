import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function AppBar() {
    return (
        <MuiAppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6">React Example</Typography>
            </Toolbar>
        </MuiAppBar>
    );
}
