import api from '../../services/api/api.service';

const {
  useGetStatusQuery,
  useStartServiceMutation,
  useStopServiceMutation,
  useGetTemperatureQuery,
  useStartTempMonitoringMutation,
  useStopTempMonitoringMutation,
  useGetTempMonitoringStatusQuery,
  useStartPIRMonitoringMutation,
  useStopPIRMonitoringMutation,
  useGetPIRMonitoringStatusQuery,
} = api;

function useData() {
  const {
    data: statusData,
    error: statusError,
    isLoading: statusIsLoading,
  } = useGetStatusQuery(undefined);

  const [
    startService,
    { data: startServiceData, error: startServiceError, isLoading: startServiceIsLoading },
  ] = useStartServiceMutation();

  const [
    stopService,
    { data: stopServiceData, error: stopServiceError, isLoading: stopServiceIsLoading },
  ] = useStopServiceMutation();

  const {
    data: tempData,
    error: tempError,
    isLoading: tempIsLoading,
  } = useGetTemperatureQuery(undefined);

  const [
    startTempMonitoring,
    {
      data: startTempMonitoringData,
      error: startTempMonitoringError,
      isLoading: startTempMonitoringIsLoading,
    },
  ] = useStartTempMonitoringMutation();

  const [
    stopTempMonitoring,
    {
      data: stopTempMonitoringData,
      error: stopTempMonitoringError,
      isLoading: stopTempMonitoringIsLoading,
    },
  ] = useStopTempMonitoringMutation();

  const {
    data: tempMonitoringStatusData,
    error: tempMonitoringStatusError,
    isLoading: tempMonitoringStatusIsLoading,
  } = useGetTempMonitoringStatusQuery(undefined);

  const [
    startPIRMonitoring,
    {
      data: startPIRMonitoringData,
      error: startPIRMonitoringError,
      isLoading: startPIRMonitoringIsLoading,
    },
  ] = useStartPIRMonitoringMutation();

  const [
    stopPIRMonitoring,
    {
      data: stopPIRMonitoringData,
      error: stopPIRMonitoringError,
      isLoading: stopPIRMonitoringIsLoading,
    },
  ] = useStopPIRMonitoringMutation();

  const {
    data: pirMonitoringStatusData,
    error: pirMonitoringStatusError,
    isLoading: pirMonitoringStatusIsLoading,
  } = useGetPIRMonitoringStatusQuery(undefined);

  return {
    statusData,
    statusError,
    statusIsLoading,
    startService,
    startServiceData,
    startServiceError,
    startServiceIsLoading,
    stopService,
    stopServiceData,
    stopServiceError,
    stopServiceIsLoading,
    tempData,
    tempError,
    tempIsLoading,
    startTempMonitoring,
    startTempMonitoringData,
    startTempMonitoringError,
    startTempMonitoringIsLoading,
    stopTempMonitoring,
    stopTempMonitoringData,
    stopTempMonitoringError,
    stopTempMonitoringIsLoading,
    tempMonitoringStatusData,
    tempMonitoringStatusError,
    tempMonitoringStatusIsLoading,
    startPIRMonitoring,
    startPIRMonitoringData,
    startPIRMonitoringError,
    startPIRMonitoringIsLoading,
    stopPIRMonitoring,
    stopPIRMonitoringData,
    stopPIRMonitoringError,
    stopPIRMonitoringIsLoading,
    pirMonitoringStatusData,
    pirMonitoringStatusError,
    pirMonitoringStatusIsLoading,
  };
}

export default function useHomeViewModel() {
  const data = useData();

  return {
    ...data,
  };
}
