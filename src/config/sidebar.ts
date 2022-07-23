import { MdDashboard, MdAccountBalanceWallet, MdAssignment, MdSettings, MdCategory } from "react-icons/md";

const menuItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: MdDashboard
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: MdAccountBalanceWallet
  },
  {
    title: 'Expenses',
    path: '/expenses',
    icon: MdAssignment
  },
  {
    title: 'Categories',
    path: '/categories',
    icon: MdCategory
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: MdSettings
  },

]



export default menuItems