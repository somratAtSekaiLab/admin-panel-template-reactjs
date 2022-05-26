import { combineReducers } from "@reduxjs/toolkit";

import { authReducer, AUTH_FEATURE_KEY } from "@app/features/auth/auth";

const rootReducer = combineReducers({
  [AUTH_FEATURE_KEY]: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
