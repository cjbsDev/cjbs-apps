import React from 'react';
import Lists from '@components/molecules/Lists';
import useSWR from 'swr';
import {fetcher} from '@components/fnc/fetcher';

const StatusLists = () => {
  const {data} = useSWR('/shotgun/job/run/status', fetcher, {
    refreshInterval: 0,
    suspense: true,
  });
  return (
    <Lists.List>
      <Lists.Item labelName={'Analyzing'} valueCount={data.jobRunningCnt} />
      <Lists.Item labelName={'Complete'} valueCount={data.jobDoneCnt} />
      <Lists.Item labelName={'Error'} valueCount={data.jobErrorCnt} />
    </Lists.List>
  );
};

export default StatusLists;
