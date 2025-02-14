import { Boxes, LayoutDashboard, Tags, Truck, UserRound } from "lucide-react";

// back-office nav
export const dashboardNavs = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Collections",
    path: "/dashboard/collections",
    icon: <Boxes />,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: <Tags />,
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    icon: <Truck />,
  },
  {
    name: "Customers",
    path: "/dashboard/users/customers",
    icon: <UserRound />,
  },
];

//main site links
export const navData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Collections",
    path: "/collections",
  },
];
