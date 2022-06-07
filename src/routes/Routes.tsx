import { memo, useCallback, useEffect, useState } from "react";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import BlankLayout from "@app/components/layouts/BlankLayout/BlankLayout";
import SidebarLayout from "@app/components/layouts/SidebarLayout/SidebarLayout";
import { LayoutTypeEnum } from "@app/constants/layout.constants";
import { useAppSelector } from "@app/redux/store";
import {
  RouteComponentDef,
  RouteItemDef,
  RouteWrapperConfigDef,
} from "@app/types/route.types";

import LoginRedirect from "./components/LoginRedirect/LoginRedirect";
import NotFound from "./components/NotFound/NotFound";
import { PRIVATE_LIST, PUBLIC_LIST } from "./routes.config";

/**
 * Change the default layout type to:
 * - LayoutTypeEnum.SIDEBAR
 * - LayoutTypeEnum.BLANK
 */
const defaultLayoutType = LayoutTypeEnum.SIDEBAR;

const ROUTE_LIST = [...PRIVATE_LIST, ...PUBLIC_LIST];

const Routes = () => {
  const { isAuthenticated } = useAppSelector(state => ({
    isAuthenticated: state.auth?.isAuthenticated,
  }));
  const location = useLocation();
  const [currentLayoutType, setCurrentLayoutType] = useState<
    LayoutTypeEnum | undefined
  >(defaultLayoutType);

  const parseLayoutFromRoute = useCallback(() => {
    ROUTE_LIST.some(route => {
      if (route.path === location.pathname) {
        setCurrentLayoutType(route.layoutType);

        return true;
      }

      setCurrentLayoutType(defaultLayoutType); // Set layout type if no route matched

      return false;
    });
  }, [location.pathname]);

  useEffect(() => {
    parseLayoutFromRoute();
  }, [parseLayoutFromRoute]);

  const routeWrapper = (
    { id, path, component }: RouteItemDef,
    { isProtectedRoute }: RouteWrapperConfigDef | undefined = {}
  ) => {
    return (
      <Route
        key={id}
        path={path}
        render={routeProps => {
          if (isProtectedRoute && !isAuthenticated) {
            return <LoginRedirect />;
          }

          const Component = component as RouteComponentDef;

          return <Component {...routeProps} />;
        }}
      />
    );
  };

  const CurrentLayout =
    currentLayoutType === LayoutTypeEnum.BLANK ? BlankLayout : SidebarLayout;

  return (
    <CurrentLayout>
      <Switch>
        <Redirect exact from="/" to="/home" />

        {PRIVATE_LIST.map(route =>
          routeWrapper(route, { isProtectedRoute: true })
        )}
        {PUBLIC_LIST.map(route => routeWrapper(route))}
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </CurrentLayout>
  );
};

export default memo(Routes);
