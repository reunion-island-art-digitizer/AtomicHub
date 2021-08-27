import { Link } from './link'
import { Sale } from './sale'
import { Drops } from './drop'
import { Page404 } from './404'

export const RouterLink = [
    {
        path: '/trading/link/:id',
        component: Link
    },
    {
        path: '/market/sale/:id',
        component: Sale
    },
    {
        path: '/drops/:id',
        component: Drops
    },
        {
        path: '/404',
        component: Page404
    },
]