/**
 * @name config/menu.js
 * @fileoverview This file exports the menu and 
 * view component associated to each menu item.
 * The menu Array exported is used by the Routes Component (views/routes.js)
 */

import Home from '../views/Home/Home';
import Example from '../views/Example/Example';
import Async from '../views/Async/Async';

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