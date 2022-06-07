import { DashboardOutlined } from "@ant-design/icons";

import { RouteItemDef } from "@app/types/route.types";

import { DashboardPathsEnum } from "../constants/dashboard.paths";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";

const DASHBOARD_SCREEN: RouteItemDef = {
  id: "dashboard",
  path: DashboardPathsEnum.DASHBOARD,
  navigationTitle: "Dashboard",
  component: DashboardScreen,
  sidebarIcon: DashboardOutlined,
};

export const DASHBOARD_ROUTES = [DASHBOARD_SCREEN];
