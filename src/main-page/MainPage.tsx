import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Navigator from './Navigator';
import Header from './Header';
import { THEME } from '../assets/theme';
import Copyright from '../common/Copyright';
import PeopleTab from '../tabs/PeopleTab';
import RulesTab from '../tabs/RulesTab';
import MissionsTab from '../tabs/MissionsTab';

const drawerWidth = 256;

const tabToContent: Record<string, JSX.Element> = {
  shifts: <MissionsTab />,
  people: <PeopleTab />,
  rules: <RulesTab />,
};

export default function MainPage() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('shifts');
  const isSmUp = useMediaQuery(THEME.breakpoints.up('sm'));

  console.log(currentTab);

  const handleDrawerToggle = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          {isSmUp ? null : (
            <Navigator
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={isMobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            {tabToContent[currentTab]}
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
