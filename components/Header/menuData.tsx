import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
 
  {
    id: 3,
    title: "Business",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Wireless",
        path: "/",
        newTab: false,
      },
      {
        id: 32,
        title: "Cabling",
        path: "/",
        newTab: false,
      },
      {
        id: 33,
        title: "Networking",
        path: "/",
        newTab: false,
      },
      {
        id: 34,
        title: "Security",
        path: "/",
        newTab: false,
      },
      {
        id: 35,
        title: "Audio-Visual",
        path: "/",
        newTab: false,
      },
      {
        id: 36,
        title: "Staffing",
        path: "/",
        newTab: false,
      },
      {
        id: 37,
        title: "Web Development",
        path: "/signup",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
