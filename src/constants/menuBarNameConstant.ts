export interface IMenuItem {
    name: string;
    icon?: string;
    path?: string;
    children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
    {
        name: 'Dashboard',
        icon: 'ti ti-home me-2',
        path: '/dashboard'
    },

    {
        name: 'User',
        icon: 'ti ti-user me-2',
        children: [
            {
                name: 'User Profile',
                icon: 'ti ti-home me-2',
                path: '/user'
            },

            {
                name: 'Add User',
                icon: 'ti ti-home me-2',
                path: '/add-user'
            }
        ]
    }
];