import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import Lists from '@components/molecules/Lists';
// import StatusLists from '@components/organisms/Status/JobsStatus/StatusLists';

const DynamicStatusLists = dynamic(() => import('@components/organisms/Status/JobsStatus/StatusLists'), {
  // ssr: false,
  suspense: true,
});

const JobsStatus = () => {
  return (
    <Lists sx={{position: 'relative', width: '100%'}}>
      {/*<Lists.Title titleName={'Jobs Status'} path={'/shotgun/jobsStatus'} />*/}
      <Suspense fallback={<Lists.Loading />}>
        <DynamicStatusLists />
      </Suspense>
    </Lists>
  );
};

export default JobsStatus;
