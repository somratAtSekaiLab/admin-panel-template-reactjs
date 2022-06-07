import { HomeOutlined } from "@ant-design/icons";

import { RouteItemDef } from "@app/types/route.types";

import { HomePathsEnum } from "../constants/home.paths";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const HOME_SCREEN: RouteItemDef = {
  id: "home",
  path: HomePathsEnum.HOME,
  navigationTitle: "Home",
  component: HomeScreen,
  sidebarIcon: HomeOutlined,
};

export const HOME_ROUTES = [HOME_SCREEN];
