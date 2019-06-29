import Home from '../views/Home/Home';
import Example from '../views/Example/Example';
import Async from '../views/Async/Example';

const menu = [
        {
                menuDisplayName: 'Home',
                path: '/',
                viewComponent: Home,
                iconType: 'home' 
        },
        {
                menuDisplayName: 'Example',
                path: '/example',
                viewComponent: Example,
                iconType: 'star' 
        },
        {
                menuDisplayName: 'Async',
                path: '/async',
                viewComponent: Async,
                iconType: 'thunderbolt' 
        }
];

export default menu;