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
import { STYLES } from './assets/styles';

const categories = [
  {
    id: 'View',
    children: [
      { id: 'Shifts', icon: <PeopleIcon />, active: true },
      { id: 'People', icon: <DnsRoundedIcon /> },
    ],
  },
  {
    id: 'Settings',
    children: [
      { id: 'Rules', icon: <SettingsIcon /> },
      //   { id: 'Performance', icon: <TimerIcon /> },
      //   { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

export default function Navigator(props: DrawerProps) {
  return (
    <Drawer variant="permanent" {...props}>
      <List disablePadding>
        <ListItem sx={{ ...STYLES.NAVIGATOR_ITEM, ...STYLES.NAVIGATOR_CATEGORY, fontSize: 22, color: '#fff' }}>Shifts Manager</ListItem>
        {/* <ListItem sx={{ ...STYLES.NAVIGATOR_ITEM, ...STYLES.NAVIGATOR_CATEGORY }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem> */}
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={STYLES.NAVIGATOR_ITEM}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
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
