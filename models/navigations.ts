import {
  MessageOutlined,
  MessageRounded,
  DataSaverOffOutlined,
  DataSaverOffRounded,
  Groups2Outlined,
  Groups2Rounded,
  SettingsOutlined,
  SettingsRounded,
  SmsOutlined,
  SmsRounded,
  Person2Outlined,
  Person2Rounded,
} from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";
type SvgIconComponent = typeof SvgIcon;

interface Navigation {
  href: string;
  name: string;
  icon: SvgIconComponent;
  iconFilled: SvgIconComponent;
}

export interface Navigations {
  upperNav: Navigation[];
  lowerNav: Navigation[];
}

export const navigations: Navigations = {
  upperNav: [
    {
      href: "/Chats",
      name: "Chats",
      icon: MessageOutlined,
      iconFilled: MessageRounded,
    },
    {
      href: "/Status",
      name: "Status",
      icon: DataSaverOffOutlined,
      iconFilled: DataSaverOffRounded,
    },
    {
      href: "/Channels",
      name: "Channels",
      icon: SmsOutlined,
      iconFilled: SmsRounded,
    },
    {
      href: "/Community",
      name: "Community",
      icon: Groups2Outlined,
      iconFilled: Groups2Rounded,
    },
  ],
  lowerNav: [
    {
      href: "/Settings",
      name: "Settings",
      icon: SettingsOutlined,
      iconFilled: SettingsRounded,
    },
    {
      href: "/ProfileProfile",
      name: "Profile",
      icon: Person2Outlined,
      iconFilled: Person2Rounded,
    },
  ],
};
