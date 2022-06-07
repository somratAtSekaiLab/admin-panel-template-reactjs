import {
  // DownOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useHistory, useLocation } from "react-router-dom";

import { PRIVATE_LIST } from "@app/routes/routes.config";

interface NavMenuProps {
  isSidebar?: boolean;
  mode?: MenuProps["mode"];
}

const NavMenu = ({ isSidebar, mode }: NavMenuProps) => {
  const location = useLocation();
  const history = useHistory();

  const items: ItemType[] = [
    ...PRIVATE_LIST.map(item => {
      const Icon = item.sidebarIcon;
      const path = Array.isArray(item.path) ? item.path[0] : item.path;

      return {
        key: path,
        icon: Icon && <Icon />,
        label: item.navigationTitle,
        onClick: () => {
          history.push(path);
        },
      };
    }),

    /* For scrolling demo */
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Group 1",
      children: [
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: "nav 2",
        },
        {
          key: "3",
          icon: <UploadOutlined />,
          label: "nav 3",
        },
      ],
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Group 2",
      children: [
        {
          key: "5",
          icon: <VideoCameraOutlined />,
          label: "nav 2",
        },
        {
          key: "6",
          icon: <UploadOutlined />,
          label: "nav 3",
        },
      ],
    },
    {
      key: "8",
      icon: <VideoCameraOutlined />,
      label: "Group 3",
      children: [
        {
          key: "9",
          icon: <UploadOutlined />,
          label: "nav 3",
        },
        {
          key: "10",
          icon: <UserOutlined />,
          label: "nav 1",
        },
      ],
    },
  ];

  const rootPathname = isSidebar
    ? [...location.pathname.split(/(?=\/)/g, 1)]
    : undefined;

  const highlightMenu = [
    ...location.pathname.split(/(?=\/)/g, 1), // Highlight root url
    location.pathname.substring(0, location.pathname.lastIndexOf("/")), // Highlight parent url
    location.pathname, // Highlight entire url
  ];

  /**
   * Ant Design has a bug, where it is NOT possible
   * to create custom wrapper components around the Menu's sub components.
   * So all AntD Menu components need to be in the same render for now
   */
  return (
    <Menu
      mode={mode}
      defaultOpenKeys={rootPathname}
      selectedKeys={highlightMenu}
      theme="dark"
      items={items}
    />
  );
};

export default NavMenu;
