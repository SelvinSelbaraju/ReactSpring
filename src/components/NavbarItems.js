import SimpleSpring from '../components/basic/SimpleSpring';
import FlipPage from '../components/basic/FlipPage';
import SpringGroup from '../components/basic/SpringGroup';
import ComingSoon from '../components/advanced/ComingSoon';

export const navbarItems = [
    {
        name: 'Basic',
        path: '/basic',
        branch: [
            {
                name: 'Simple Spring',
                path: '/basic/simple-spring',
                component: SimpleSpring
            },
            {
                name: 'Flip Page',
                path: '/basic/flip-page',
                component: FlipPage
            },
            {
                name: 'Spring Group',
                path: '/basic/spring-group',
                component: SpringGroup
            },
        ]
    },
    {
        name: 'Advanced',
        path: '/advanced',
        branch: [
            {
                name: 'Coming Soon',
                path: '/advanced/comingsoon',
                component: ComingSoon
            },
        ]
    },
]