import { HomeScreen, BagScreen, OrderScreen, ProfileScreen } from '../screens/index';
import { Icons } from '../StyleGuide/Icons';


export const TabArr = [
    { route: 'home', label: 'home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: HomeScreen },
    { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: BagScreen },
    { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: OrderScreen },
    { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: ProfileScreen },
];
