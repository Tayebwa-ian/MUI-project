import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: 'Authentication',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Database',
        route: 'Database',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Storage',
        route: 'Storage',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Hosting',
        route: 'Hosting',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Functions',
        route: 'Functions',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Machine learning',
        route: 'MachineLearning',
    },
]