import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const menuItems = [
  {
    _id: 1,
    name: "",
    information: [
      {
        _id: 1,
        title: "Dashboard",
        label: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },
  {
    _id: 2,
    name: "Data",
    information: [
      {
        _id: 2,
        title: "Team",
        label: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        _id: 3,
        title: "Contacts",
        label: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        _id: 4,
        title: "Invoices",
        label: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    _id: 3,
    name: "Pages",
    information: [
      {
        _id: 5,
        title: "Form",
        label: "Profile Form",
        to: "/form",
        icon: <PersonOutlinedIcon />,
      },
      {
        _id: 6,
        title: "Calendar",
        label: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        _id: 7,
        title: "Faq",
        label: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlinedIcon />,
      },
    ],
  },
  {
    _id: 4,
    name: "charts",
    information: [
      {
        _id: 8,
        title: "Bar",
        label: "Bar Chart",
        to: "/bar-chart",
        icon: <BarChartOutlinedIcon />,
      },
      {
        _id: 9,
        title: "Pie",
        label: "Pie Chart",
        to: "/pie-chart",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        _id: 10,
        title: "Line",
        label: "Line Chart",
        to: "/line-chart",
        icon: <TimelineOutlinedIcon />,
      },
      {
        _id: 11,
        title: "Geography",
        label: "Geography Chart",
        to: "/geography-chart",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];
