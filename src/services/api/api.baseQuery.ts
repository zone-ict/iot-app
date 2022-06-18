import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { RootState } from '../../app/store/store.app';
import envConfig from '../../configs/env/env.config';
import { sessionAction } from '../../stores/session/session.store';

export type BaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;
export type QD<R, S> = QueryDefinition<R, BaseQuery, string, S, 'api'>;
export type MD<R, S> = MutationDefinition<R, BaseQuery, string, S, 'api'>;
export type Builder = EndpointBuilder<BaseQuery, string, 'api'>;

/**
 * HTTP headers must be adjusted based on the API requirements.
 * @param headers
 * @param api
 * @returns
 */
export const prepareHeaders = (
  headers: Headers,
  api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>,
): Headers => {
  const { token } = (api.getState() as RootState).session;
  if (token) headers.set('authorization', `Bearer ${token}`);
  return headers;
};

/**
 * Adjust API_BASE_URL in environment variable file
 */
export const base = fetchBaseQuery({
  baseUrl: envConfig.apiBaseUrl,
  prepareHeaders,
});

/**
 * Base query of the API service.
 * If response is 401 It will try to get new token and refetch the query.
 * To avoid multiple failed request, it used mutex to lock the process and unlock it after renew token completed.
 * @param args
 * @param api
 * @param extraOptions
 * @returns
 */
const mutex = new Mutex();
const baseQuery: BaseQuery = async (args, api, extraOptions) => {
  let result = await base(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (mutex.isLocked()) {
      await mutex.waitForUnlock();
      result = await base(args, api, extraOptions);
    } else {
      const release = await mutex.acquire();
      try {
        // TODO: Replace with actual async function to get new token
        const req = await fetch(`${envConfig.apiBaseUrl}auth/refresh-token`, { method: 'post' });
        const { token } = (await req.json()) as { token: string };
        if (token) {
          api.dispatch(sessionAction.changeToken({ token }));
          result = await base(args, api, extraOptions);
        } else {
          api.dispatch(sessionAction.logout());
        }
      } finally {
        release();
      }
    }
  }

  console.log(result);

  return result;
};

export default baseQuery;
