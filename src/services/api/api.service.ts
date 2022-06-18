import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './api.baseQuery';
import obnizEndpoints from './endpoints/obniz/obniz.endpoint';

/**
 * If TAGS are utilized, make sure to put array of tags string in tagTypes property.
 */
const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    ...obnizEndpoints(builder),
  }),
});

export default api;
