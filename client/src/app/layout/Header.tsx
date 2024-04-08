import { DarkMode } from "@mui/icons-material";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    switchChanged: () => void,
    darkMode: boolean
}

export default function Header({switchChanged, darkMode} : Props) {
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={switchChanged} />
            </Toolbar>
        </AppBar>
    );
}