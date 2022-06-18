import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from '../../components/atoms';
import { CenteredContent } from '../../components/templates';
import useHomeViewModel from './Home.viewModel';

const SectionHeader = styled.h1(() => [tw`text-lg font-bold`]);
const SectionContent = styled.div(() => [tw`flex flex-col space-y-4`]);
const Text = styled.div(() => [tw`text-sm`]);

export default function HomeView() {
  const {
    tempMonitoringStatusData,
    pirMonitoringStatusData,
    statusData,
    startService,
    stopService,
    startTempMonitoring,
    stopTempMonitoring,
    startPIRMonitoring,
    stopPIRMonitoring,
  } = useHomeViewModel();

  const isServiceRunning = useMemo(() => statusData?.status === 'connected', [statusData?.status]);
  const isTempMonitoringRunning = useMemo(
    () => tempMonitoringStatusData?.status === 'enabled',
    [tempMonitoringStatusData?.status],
  );
  const isPIRMonitoringRunning = useMemo(
    () => pirMonitoringStatusData?.status === 'enabled',
    [pirMonitoringStatusData?.status],
  );

  return (
    <CenteredContent>
      <div tw="flex space-y-8 flex-col p-4">
        <div>
          <SectionHeader>Obniz Service</SectionHeader>
          <SectionContent>
            <Text>{`Service Status: ${statusData?.status ?? 'Loading...'}`}</Text>
            <Button
              onClick={() => {
                if (isServiceRunning) {
                  void stopService(undefined);
                } else {
                  void startService(undefined);
                }
              }}
            >
              {isServiceRunning ? 'Stop Service' : 'Start Service'}
            </Button>
          </SectionContent>
        </div>
        <div>
          <SectionHeader>Temperature</SectionHeader>
          <SectionContent>
            <Text>{`Monitoring Status: ${tempMonitoringStatusData?.status ?? 'Loading...'}`}</Text>
            <Button
              disabled={!isServiceRunning}
              onClick={() => {
                if (isTempMonitoringRunning) {
                  void stopTempMonitoring(undefined);
                } else {
                  void startTempMonitoring(undefined);
                }
              }}
            >
              {isTempMonitoringRunning ? 'Stop Monitoring' : 'Start Monitoring'}
            </Button>
          </SectionContent>
        </div>
        <div>
          <SectionHeader>Security Sensor</SectionHeader>
          <SectionContent>
            <Button
              disabled={!isServiceRunning}
              onClick={() => {
                void startPIRMonitoring(undefined);
              }}
            >
              {isPIRMonitoringRunning ? 'Stop Monitoring' : 'Start Monitoring'}
            </Button>
            <Button
              css={tw`pl-4`}
              disabled={!isServiceRunning}
              onClick={() => {
                void stopPIRMonitoring(undefined);
              }}
            >
              Stop Monitoring
            </Button>
          </SectionContent>
        </div>
      </div>
    </CenteredContent>
  );
}
