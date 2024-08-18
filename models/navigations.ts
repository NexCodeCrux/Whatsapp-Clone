import {
  ChannelIconOutline,
  ChannelIconRounded,
  ChatsIconOutlined,
  ChatsIconRounded,
  CommunityIconOutlined,
  CommunityIconRouned,
  SettingIconOutlined,
  SettingIconRounded,
  StatusIconOutlined,
  StatusIconRounded,
} from "@/app/components/CustomIcons";
import { Person2Outlined, Person2Rounded } from "@mui/icons-material";

interface Navigation {
  href: string;
  name: string;
  icon: JSX.ElementType;
  iconFilled: JSX.ElementType;
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
      icon: ChatsIconOutlined,
      iconFilled: ChatsIconRounded,
    },
    {
      href: "/Status",
      name: "Status",
      icon: StatusIconOutlined,
      iconFilled: StatusIconRounded,
    },
    {
      href: "/Channels",
      name: "Channels",
      icon: ChannelIconOutline,
      iconFilled: ChannelIconRounded,
    },
    {
      href: "/Community",
      name: "Community",
      icon: CommunityIconOutlined,
      iconFilled: CommunityIconRouned,
    },
  ],
  lowerNav: [
    {
      href: "/Settings",
      name: "Settings",
      icon: SettingIconOutlined,
      iconFilled: SettingIconRounded,
    },
    {
      href: "/ProfileProfile",
      name: "Profile",
      icon: Person2Outlined,
      iconFilled: Person2Rounded,
    },
  ],
};
