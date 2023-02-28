import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Typewriter from 'typewriter-effect'
import "./Navbar.scss"
import { Stack } from '@mui/material';

let bannerstyles = {
    backGroundImage: `url("https://media.istockphoto.com/id/895454734/photo/beautiful-lotus-flower-on-the-water-in-a-park-close-up.jpg?b=1&s=170667a&w=0&k=20&c=Sji5ikDkPgmwqZkYHfAUpmtxUytmhdc9L9jIjEgQgDs=")`
}

    

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     **/
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Service', 'Resume', 'Portfolio', 'Blog', 'Contact'];

function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
               Syed Imran
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="nav-bg">
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'transparent' }}>
                <Toolbar>
                   
                    <Typography
                        variant="h4"
                        
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        Syed Imran
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                      
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Stack direction={"row"} sx={{ p: 3,border:"2px solid green" ,width:"100%"}} 
            display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box component="main" sx={{ p: 3,border:"2px solid green" ,width:"50%",textAlign:"center"}}>
                <Toolbar />
              <Typography variant='h6' mt={-8}>
             
                WELCOME TO MY WEBSITE
                </Typography>
                <Typography variant='h2' className='typewriter' mt={4}>
                <Typewriter
                 options={{
                    strings: ["I'm Syed Imran", "I'm Web Developer"],
                    autoStart: true,
                    loop: true,
                    delay:150,
                    deleteSpeed:150
                  }}

/>
                </Typography>
            </Box>
            <Box sx={{ p: 3,border:"2px solid green" ,width:"50%",textAlign:"center"}}>
                <Button variant='contained' sx={{m:2,borderRadius:"25px",padding:"10px 20px"}} color="warning">View Work</Button>
                <Button variant='contained' sx={{m:2,borderRadius:"25px",padding:"10px 20px"}} color="warning">Hire Me</Button>
            </Box>
            </Stack>
            
        </Box>
    );
}
export default DrawerAppBar