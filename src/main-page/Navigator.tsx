import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import { STYLES } from '../assets/styles';
import { Helpers } from '../common/helpers';

const categories = [
  {
    id: 'view',
    children: [
      { id: 'shifts', icon: <DnsRoundedIcon /> },
      { id: 'people', icon: <PeopleIcon /> },
    ],
  },
  {
    id: 'settings',
    children: [
      { id: 'rules', icon: <SettingsIcon /> },
      //   { id: 'Performance', icon: <TimerIcon /> },
      //   { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

export default function Navigator({ currentTab, setCurrentTab, ...paperProps }) {
  return (
    <Drawer variant="permanent" {...paperProps}>
      <List disablePadding>
        <ListItem sx={{ ...STYLES.NAVIGATOR_ITEM, ...STYLES.NAVIGATOR_CATEGORY, fontSize: 22, color: '#fff' }}>Shifts Manager</ListItem>
        <ListItem sx={{ ...STYLES.NAVIGATOR_ITEM, ...STYLES.NAVIGATOR_CATEGORY }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{Helpers.capitalize(id)}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => (
              <ListItem disablePadding key={childId} onClick={() => setCurrentTab(childId)}>
                <ListItemButton selected={currentTab === childId} sx={STYLES.NAVIGATOR_ITEM}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{Helpers.capitalize(childId)}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
