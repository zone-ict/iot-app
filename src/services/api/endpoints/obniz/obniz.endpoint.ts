import { Builder, MD, QD } from '../../api.baseQuery';

// #region ACTION DEFINITION

type MonitoringStatus = 'enabled' | 'disabled';

type BaseResponse = { ok: boolean };

/* Obniz Status */
type GetStatusParams = undefined;
type GetStatusResponse = { status: string };

/* Start Service */
type StartServiceParams = undefined;
type StartServiceResponse = { ok: boolean };

/* Stop Service */
type StopServiceParams = undefined;
type StopServiceResponse = { ok: boolean };

/* Get Temperature */
type GetTemperatureParams = undefined;
type GetTemperatureResponse = { ok: boolean; temperature: number };

/* Start Temp Monitoring */
type StartTempMonitoringParams = undefined;
type StartTempMonitoringResponse = { ok: boolean };

/* Stop Temperature Monitoring */
type StopTempMonitoringParams = undefined;
type StopTempMonitoringResponse = { ok: boolean };

/* Get Temp Monitoring Status */
type GetTempMonitoringStatusParams = undefined;
type GetTempMonitoringStatusResponse = { ok: boolean; status: MonitoringStatus };

/* Start PIR Monitoring */
type StartPIRMonitoringParams = undefined;
type StartPIRMonitoringResponse = BaseResponse;

/* Stop PIR Monitoring */
type StopPIRMonitoringParams = undefined;
type StopPIRMonitoringResponse = BaseResponse;

/* Get PIR Monitoring Status */
type GetPIRMonitoringStatusParams = undefined;
type GetPIRMonitoringStatusResponse = BaseResponse & { status: MonitoringStatus };

// #endregion

// #region ENDPOINT DEFINITION

export type ObnizEndpoint = {
  getStatus: QD<GetStatusParams, GetStatusResponse>;
  startService: MD<StartServiceParams, StartServiceResponse>;
  stopService: MD<StopServiceParams, StopServiceResponse>;
  getTemperature: QD<GetTemperatureParams, GetTemperatureResponse>;
  startTempMonitoring: MD<StartTempMonitoringParams, StartTempMonitoringResponse>;
  stopTempMonitoring: MD<StopTempMonitoringParams, StopTempMonitoringResponse>;
  getTempMonitoringStatus: QD<GetTempMonitoringStatusParams, GetTempMonitoringStatusResponse>;
  startPIRMonitoring: MD<StartPIRMonitoringParams, StartPIRMonitoringResponse>;
  stopPIRMonitoring: MD<StopPIRMonitoringParams, StopPIRMonitoringResponse>;
  getPIRMonitoringStatus: QD<GetPIRMonitoringStatusParams, GetPIRMonitoringStatusResponse>;
};

// #endregion

const obnizEndpoints = (builder: Builder): ObnizEndpoint => ({
  getStatus: builder.query({
    query: () => 'obniz/status',
    providesTags: ['obniz.status'],
  }),
  startService: builder.mutation({
    query: () => ({
      url: 'obniz/start',
      method: 'post',
    }),
    invalidatesTags: ['obniz.status'],
  }),
  stopService: builder.mutation({
    query: () => ({
      url: 'obniz/stop',
      method: 'post',
    }),
    invalidatesTags: ['obniz.status'],
  }),
  getTemperature: builder.query({
    query: () => 'obniz/temperature',
  }),
  startTempMonitoring: builder.mutation({
    query: () => ({
      url: 'obniz/temperature/monitor.start',
      method: 'post',
    }),
    invalidatesTags: ['obniz.temperature'],
  }),
  stopTempMonitoring: builder.mutation({
    query: () => ({
      url: 'obniz/temperature/monitor.stop',
      method: 'post',
    }),
    invalidatesTags: ['obniz.temperature'],
  }),
  getTempMonitoringStatus: builder.query({
    query: () => 'obniz/temperature/monitor.status',
    providesTags: ['obniz.temperature'],
  }),
  startPIRMonitoring: builder.mutation({
    query: () => ({
      url: 'obniz/pir/monitor.start',
      method: 'post',
    }),
    invalidatesTags: ['obniz.pir'],
  }),
  stopPIRMonitoring: builder.mutation({
    query: () => ({
      url: 'obniz/pir/monitor.stop',
      method: 'post',
    }),
    invalidatesTags: ['obniz.pir'],
  }),
  getPIRMonitoringStatus: builder.query({
    query: () => 'obniz/pir/monitor.status',
    providesTags: ['obniz.pir'],
  }),
});

export default obnizEndpoints;
