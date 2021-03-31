import axios, { AxiosRequestConfig } from "axios";

import { ENV } from "@app/constants/env";
import { AuthEndpointsEnum, getTokens } from "@app/features/auth/auth";

/**
 * All the endpoint that do not require an access token
 */
const anonymousEndpoints: any[] = [AuthEndpointsEnum.LOGIN.toString()];

/**
 * Adds authorization headers to API calls
 * @param {AxiosRequestConfig} request
 */
const authInterceptor = async (request: AxiosRequestConfig) => {
  const { accessToken, tokenType } = getTokens();

  const isAnonymous = anonymousEndpoints.some(endpoint =>
    request.url?.startsWith(endpoint)
  );

  if (accessToken) {
    request.headers.Authorization = `${tokenType} ${accessToken}`;
    return request;
  }

  if (!accessToken && !isAnonymous) {
    console.error("UNAUTHORIZED");
    return request;
    // return Promise.reject(ApiStatusCodes.UNAUTHORIZED);
  }

  return request;
};

/** Setup an API instance */
export const api = axios.create({
  baseURL: ENV.API_HOST,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(authInterceptor);