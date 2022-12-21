import React from 'react';
import {useRouter} from 'next/router';
import ListHeader from '@components/organisms/listHeader/DataTableHeader';

interface GridHeaderProps {
  titleName: string;
  totalCount?: number;
  path?: string;
}

const GridHeader = ({titleName, totalCount, path}: GridHeaderProps) => {
  console.log('path', path);
  const router = useRouter();
  const prevPath = () => {
    router.push(path);
  };
  return (
    <ListHeader sx={{alignItems: 'center'}} spacing={1}>
      {path !== undefined && <ListHeader.PrevBtn prevPath={prevPath} />}
      <ListHeader.Title titleName={titleName} />
      {totalCount !== undefined && <ListHeader.TotalCount totalCount={totalCount} />}
    </ListHeader>
  );
};

export default GridHeader;
