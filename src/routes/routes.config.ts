import { AUTH_ROUTES } from "@app/features/auth/auth";
import { HOME_ROUTES } from "@app/features/home/home";

export const ROOT_ROUTE = "/";

export const PUBLIC_LIST = [...AUTH_ROUTES];
export const PRIVATE_LIST = [...HOME_ROUTES];
