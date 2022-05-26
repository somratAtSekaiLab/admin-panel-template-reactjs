import { lazy, Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { useMount } from "react-use";

import LoadingSpinner from "@app/components/atoms/LoadingSpinner/LoadingSpinner";

import { getMe, getTokens } from "./features/auth/auth";
import { useAppDispatch, useAppSelector } from "./redux/store";

// Routes are lazy loaded so they will access to correct permissions
const Routes = lazy(() => import("./routes/Routes"));

const App = () => {
  const { accessToken } = getTokens();
  const dispatch = useAppDispatch();
  const { loadingUser } = useAppSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loadingUser: state.auth.loading,
  }));

  useMount(() => {
    if (accessToken) {
      dispatch(getMe());
    }
  });

  const loading = <LoadingSpinner isFullscreen text="Loading Admin Panel" />;

  if (loadingUser) return loading;

  return (
    <Suspense fallback={loading}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App;
