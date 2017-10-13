import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {ScanQR} from './components/pages/ScanQR';
import {Tabs} from 'framework7';

export const routes = [
    {
        path: '/tabs/',
        component: Tabs,
        tabs: [
            {
                path: '/program',
                tabId: 'program',
                component: About
            },
            {
                path: '/bodovi',
                tabId: 'bodovi',
                component: Form
            },
            {
                path: '/scan',
                tabId: 'scan',
                component: ScanQR
            }
        ]
    }
];