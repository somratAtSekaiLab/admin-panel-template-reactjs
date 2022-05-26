import { memo } from "react";

import { LogoutOutlined } from "@ant-design/icons";
import { Menu, Avatar } from "antd";

import { clearUser } from "@app/features/auth/auth";
import { getInitials } from "@app/helpers/util.helper";
import { useAppDispatch, useAppSelector } from "@app/redux/store";

const NavRightContent = memo(() => {
  const dispatch = useAppDispatch();

  // Using the current user
  const { user } = useAppSelector(state => ({
    user: state.auth.user,
  }));
  // TODO: update this when AUTH method/api changes
  const name = user?.name ?? "John Doe";
  const userInitials = getInitials(name, 3);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.SubMenu
        key="user"
        popupOffset={[-16, 7]}
        title={<Avatar size={40}>{userInitials}</Avatar>}
      >
        <Menu.Item
          key="logout"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
});

export default NavRightContent;
