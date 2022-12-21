import React, {useMemo, useState, useCallback, useEffect, useRef, Suspense} from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import IcnCSV from '@public/img/icons/icn_csv.png';
import IcnJSON from '@public/img/icons/icn_json.png';
import IcnHTML from '@public/img/icons/icn_html.png';
import IcnPDF from '@public/img/icons/icn_pdf.png';
import IconKrona from '@public/img/icons/icn_krona.png';
import CustomLoader from '@components/comp/CustomLoader';
import {
  Box,
  Button,
  Snackbar,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
  MenuItem,
  SelectChangeEvent,
  Menu,
  Alert,
  Tooltip,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {amber, blue, cyan, green, red} from '@mui/material/colors';
import {
  PlayCircleFilledWhiteOutlined,
  KeyboardArrowDown,
  ModeCommentOutlined,
  PictureAsPdf,
  Html,
} from '@mui/icons-material';
import RawDownloadBtn from '@components/molecules/RawDownloadBtn';
import EngnDialog from '@components/comp/Inputs/EngnDialog';
import SdmDetailModal from '@components/molecules/SdmDetailModal';
import ShotgunDataGrid from '@components/organisms/dataTable/DataTableBase';
import StatusInfo from '@components/molecules/StatusInfo';
import {CSVLink, CSVDownload} from 'react-csv';
import PageTitle from '@components/atoms/PageTitle';
import CountNumberBesideTitle from '@components/atoms/CountNumberBesideTitle';
import uuid from 'react-uuid';
import Rqst from '@public/svg/icon/Request.svg';
import Wt from '@public/svg/icon/Waiting.svg';
import Link from 'next/link';
import Er from '@public/svg/icon/error_circle.svg';
import Dn from '@public/svg/icon/download.svg';
import {fetcher, fetcherHUB} from '@components/fnc/fetcher';
import useSWR from 'swr';
import {AccBox} from '@styles/styledComp';
import {useDebounce} from 'use-debounce';
import {GET, POST} from '@src/hooks/api/useAPI';
import {themeJeju} from '@components/variables/themeJeju';
import DataTableSearchBar from '@components/molecules/DataTableSearchBar';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import htmlParse from 'html-react-parser';
import axios from 'axios';
import {pdfValue} from '@public/testPdf';
import {useForm, Controller, useWatch, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import ProfileDetail from '@components/organisms/ProfileDetail';
// import RunModal from '@components/organisms/RunModal';
import MultiClamp from 'react-multi-clamp';
import HTMLRenderer from 'react-html-renderer';
import {useRouter} from 'next/router';
import {snackAlertAtom} from '@src/recoil/atoms/modalAtom';
import {useRecoilState} from 'recoil';
import FileSaver from 'file-saver';
import {multiTypeDownload} from '@components/fnc/mutilTypeDownload';

const RunModal = dynamic(() => import('@components/organisms/RunModal'), {ssr: false});
const ProfileDetail = dynamic(() => import('@components/organisms/ProfileDetail'), {ssr: false});

const DnSVGIcon = React.forwardRef(({}, ref) => {
  return <Dn width={24} height={24} fill={blue[500]} />;
});

const RunButton = styled(Button)({
  backgroundColor: blue[700],
  color: 'white',
  boxShadow: 'none',
  '&:hover, &:active': {
    boxShadow: 'none',
  },
});

const schema = yup
  .object({
    // inputType: yup.string().required('InputType을 선택해주세요!').nullable(),
    // inputName: yup.string().required('InputName을 입력해주세요!').nullable(),
  })
  .required();

const ShotgunDataTable = () => {
  // const {data} = props;
  const [snackbarOpen, setSnackbarOpen] = useRecoilState(snackAlertAtom);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editState, setEditState] = useState({
    profileId: '',
    profileName: '',
    engineVersion: '',
    date: '',
    dbVersion: '',
    type: '',
    projectName: '',
    status: '',
    comment: '',
  });
  const [sampleCode, setSampleCode] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const [value, setValue] = useState(0);
  const [engineValue, setEngineValue] = useState('');
  const [csvInfo, setCsvInfo] = useState({
    csvData: '',
    downloadFileName: '',
    loading: false,
  });
  const [interval, setInterval] = useState<number>(0);
  const [stateSWR, setStateSWR] = useState({
    refreshInterval: 0,
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });
  const {data, error, mutate} = useSWR('/shotgun/profile/list', fetcher, {
    refreshInterval: stateSWR.refreshInterval,
    suspense: true,
  });
  const router = useRouter();
  const csvLink = useRef(undefined);
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [debounceValue] = useDebounce(filterText, 1000);
  const [htmlView, setHtmlView] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    control,
    resetField,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const popupState = usePopupState({variant: 'popover', popupId: 'demoMenu'});

  const SubHeaderComponentMemo = useMemo(() => {
    const handleRunClickOpen = (row) => {
      console.log('inner-click!');
      setOpen(true);
      setInterval(0);
    };

    const exportCSVData = async () => {
      await GET('/shotgun/file/download/tsv').then((res) => {
        const resData = res.data;
        console.log(resData);
        const resultData = `data:text/tsv,${encodeURIComponent(resData)}`;
        FileSaver.saveAs(resultData, res.headers.filename);
      });

      // setCsvInfo({
      //   ...csvInfo,
      //   loading: true,
      // });
      // data:text/tsv
      //  + encodeURIComponent(resData)
      //application/octet-stream
      // await GET('/shotgun/file/download/tsv').then((res) => {
      //   console.log('.tsvFileName ==> ', res.headers.filename);
      //   setCsvInfo({
      //     ...csvInfo,
      //     csvData: res.data,
      //     downloadFileName: res.headers.filename,
      //   });
      // });
      // setTimeout(() => {
      //   setCsvInfo({
      //     ...csvInfo,
      //     loading: false,
      //   });
      //   csvLink.current.link.click();
      // });
    };

    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <Grid container>
        <Grid item xs={6}>
          <Grid container sx={{alignItems: 'flex-end'}} spacing={1}>
            <Grid item>
              <Button
                variant={'contained'}
                onClick={handleRunClickOpen}
                size={'medium'}
                startIcon={<PlayCircleFilledWhiteOutlined />}
                // disabled={true}
              >
                <Typography variant={'button'} sx={{fontWeight: '400'}}>
                  Request a job
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container sx={{justifyContent: 'flex-end', alignItems: 'flex-end'}} spacing={1}>
            <Grid item>
              <Button
                size={'medium'}
                variant={'outlined2'}
                startIcon={<Image src={IcnCSV} width={16} height={16} alt={'TSV'} />}
                onClick={exportCSVData}
              >
                Export your Data
              </Button>
            </Grid>

            <DataTableSearchBar
              onFilter={(e) => setFilterText(e.target.value)}
              onClear={handleClear}
              filterText={debounceValue}
              // filterText={filterText}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }, [filterText, resetPaginationToggle, setCsvInfo, csvInfo]);

  const handleEditModalOpen = useCallback(
    (row) => {
      // console.log('row data', row);
      const {project, profileName, profileId, engineVersion, date, dbVersion, type, status, comment} = row;
      // setInterval(0);
      setStateSWR({
        ...stateSWR,
        refreshInterval: 0,
        // revalidateIfStale: false,
        // revalidateOnReconnect: false,
        // revalidateOnFocus: false,
      });
      setEditModalOpen(true);
      setEditState({
        ...editState,
        projectName: project,
        profileId: profileId,
        profileName: profileName,
        engineVersion: engineVersion,
        date: date,
        dbVersion: dbVersion,
        type: type,
        status: 'Complete',
        comment: comment,
      });
    },
    [editState],
  );

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    // mutate({optimisticData: [...data, data]}, false);
    // setInterval(1000);
    setStateSWR({
      ...stateSWR,
      refreshInterval: 1000,
      // revalidateIfStale: true,
      // revalidateOnReconnect: true,
      // revalidateOnFocus: true,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setInterval(1000);
  };

  // const handleSelectedRowsChangeUseCallback = useCallback(({selectedRows}) => {
  //   console.log('%%%%%%%');
  //   setSelectedData(selectedRows);
  // }, []);
  //
  // const runSelectHandleChange = (event: SelectChangeEvent) => {
  //   setEngineValue(event.target.value);
  // };
  //
  // const quickEngineRunKrona = (profileId) => {
  //   console.log('Quick Run profileId', profileId);
  //   const body = {
  //     profileId: profileId,
  //   };
  //   POST('/shotgun/job/run/single/krona', body).then((res) => {
  //     console.log('Krona =>>', res.data.success);
  //     if (res.data.success) router.push('/shotgun/jobsStatus');
  //   });
  // };

  const columns = useMemo(
    () => [
      {
        name: 'Study_id',
        // width: '200px',
        selector: (row, index) => {
          return row.project === null ? '-' : row.project;
        },
        sortable: true,
        // allowOverflow: true,
        // wrap: true,
      },
      {
        name: 'Sample_name',
        // width: '300px',
        selector: (row, index) => {
          return row.profileName;
        },
        sortable: true,
        // allowOverflow: true,
        // wrap: true,
      },
      {
        name: 'Comment',
        // width: '300px',
        selector: (row, index) => {
          return row.comment;
        },
        sortable: true,
        cell: (row) => {
          return (
            <MultiClamp ellipsis={'...'} clamp={1}>
              {row.comment}
            </MultiClamp>
          );
        },
        allowOverflow: false,
        wrap: true,
      },
      {
        name: 'Profile_id',
        width: '180px',
        selector: (row) => row.profileId,
        sortable: true,
        // allowOverflow: true,
        // wrap: true,
      },
      // {
      //   name: 'Run',
      //   width: '160px',
      //   cell: (row, index, column, id) => {
      //     return (
      //       <Grid container spacing={1} sx={{alignItems: 'center'}}>
      //         <Grid item>
      //           <PopupState variant='popover' popupId='demoMenu'>
      //             {(popupState) => (
      //               <React.Fragment>
      //                 <Button
      //                   size={'small'}
      //                   endIcon={<KeyboardArrowDown />}
      //                   variant={'outlined2'}
      //                   {...bindTrigger(popupState)}
      //                 >
      //                   Engine
      //                 </Button>
      //                 <Menu {...bindMenu(popupState)}>
      //                   <MenuItem
      //                     onClick={() => {
      //                       popupState.close();
      //                       quickEngineRunKrona(row.profileId);
      //                       // setAge(item.key);
      //                     }}
      //                     // divider={row.action.length === index + 1 ? false : true}
      //                   >
      //                     <Grid container spacing={1}>
      //                       <Grid item sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      //                         <PlayCircleFilledWhiteOutlined color={'primary'} sx={{fontSize: 18}} />
      //                       </Grid>
      //                       <Grid item sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      //                         Krona
      //                       </Grid>
      //                     </Grid>
      //                   </MenuItem>
      //                 </Menu>
      //               </React.Fragment>
      //             )}
      //           </PopupState>
      //         </Grid>
      //       </Grid>
      //     );
      //   },
      // },
      {
        name: 'Action',
        width: '200px',
        ignoreRowClick: true,
        allowOverflow: true,
        cell: (row, index) => {
          console.log('Action', row.action);
          const prfId = row.profileId;
          const prfName = row.profileName;
          return (
            <Grid container spacing={0.5}>
              {row.action
                .filter((item) => item.key !== 'STANDARD')
                .map((item) => {
                  const {key, value} = item;
                  return (
                    <Grid item key={uuid()}>
                      <Tooltip
                        title={
                          key === 'STANDARD'
                            ? ''
                            : key === 'VIEWER'
                            ? 'Ez-Viz visualization'
                            : key === 'REPORT'
                            ? 'Overall report'
                            : 'KRONA visualization'
                        }
                        arrow
                      >
                        <IconButton
                          disabled={!value}
                          onClick={() => {
                            multiTypeDownload(prfId, prfName, key);
                          }}
                        >
                          <Image
                            src={
                              key === 'STANDARD'
                                ? IcnJSON
                                : key === 'VIEWER'
                                ? IcnHTML
                                : key === 'REPORT'
                                ? IcnPDF
                                : IconKrona
                            }
                            width={24}
                            height={24}
                            alt={
                              key === 'STANDARD'
                                ? '.json'
                                : key === 'VIEWER'
                                ? '.html'
                                : key === 'REPORT'
                                ? '.pdf'
                                : 'krona'
                            }
                          />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  );
                })}

              {/*{row.action.map((item) => {*/}
              {/*  const {key, value} = item;*/}
              {/*  return (*/}
              {/*    <Grid item>*/}
              {/*      <IconButton*/}
              {/*        disabled={!value}*/}
              {/*        onClick={() => {*/}
              {/*          // exportHTMLData(prfId, prfName);*/}
              {/*          multiTypeDownload(prfId, prfName, key);*/}
              {/*        }}*/}
              {/*      >*/}
              {/*        <Image*/}
              {/*          src={key === 'STANDARD' ? IcnJSON : key === 'VIEWER' ? IcnHTML : IcnPDF}*/}
              {/*          width={24}*/}
              {/*          height={24}*/}
              {/*          alt={key === 'STANDARD' ? '.json' : key === 'VIEWER' ? '.html' : '.pdf'}*/}
              {/*        />*/}
              {/*      </IconButton>*/}
              {/*    </Grid>*/}
              {/*  );*/}
              {/*})}*/}
            </Grid>
          );
        },
      },
      {
        name: 'Created',
        width: '120px',
        selector: (row) => row.date,
        sortable: true,
      },
    ],
    [],
  );

  const handleAlertClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    // setAlertOpen(false);
    setSnackbarOpen(false);
  };

  const handleClickOpen = (row) => {
    console.log('inner-click!');
    setOpen(true);
  };

  // const Actions = (
  //   <Grid container sx={{justifyContent: 'flex-end'}} spacing={1}>
  //     <Grid item>
  //       <Button
  //         variant={'contained'}
  //         onClick={handleClickOpen}
  //         size={'small'}
  //         startIcon={<PlayCircleFilledWhiteOutlined />}
  //         // disabled={true}
  //       >
  //         <Typography variant={'button'} sx={{fontWeight: '600'}}>
  //           Run
  //         </Typography>
  //       </Button>
  //     </Grid>
  //   </Grid>
  // );

  // if (error)
  //   return (
  //     <AccBox>
  //       <Typography variant={'subtitle1'}>An error has occurred.</Typography>
  //     </AccBox>
  //   );
  //
  // if (!data)
  //   return (
  //     <AccBox>
  //       <CustomLoader />
  //     </AccBox>
  //   );

  const filteredData = data.profileList.filter((item) => {
    const filterData =
      (item.project && item.project.toLowerCase().includes(debounceValue.toLowerCase())) ||
      (item.profileName && item.profileName.toLowerCase().includes(debounceValue.toLowerCase())) ||
      (item.profileId && item.profileId.toLowerCase().includes(debounceValue.toLowerCase()));

    return filterData;
  });

  const TitleCountNumberHeader = () => {
    return (
      <Grid container sx={{alignItems: 'center'}} spacing={1}>
        <Grid item>
          <PageTitle titleName={'YOUR SHOTGUN PROFILES'} />
        </Grid>
        <Grid item>
          <CountNumberBesideTitle totalCount={data.total} />
        </Grid>
      </Grid>
    );
  };

  const NoDataComponent = () => {
    return (
      <Box sx={{py: 5}}>
        <Typography>No Data.</Typography>
      </Box>
    );
  };

  return (
    <>
      <ShotgunDataGrid
        title={<TitleCountNumberHeader />}
        columns={columns}
        data={filteredData}
        progressPending={!filteredData ? true : false}
        progressComponent={<CustomLoader />}
        onRowClicked={handleEditModalOpen}
        // selectableRows
        // selectableRowsComponent={Checkbox}
        // selectableRowsComponentProps={selectProps}
        // onSelectedRowsChange={handleSelectedRowsChangeUseCallback}
        // actions={Actions}
        noContextMenu={true}
        subHeader
        subHeaderComponent={SubHeaderComponentMemo}
        persistTableHead
        noDataComponent={<NoDataComponent />}
        paginationResetDefaultPage={true}
        highlightOnHover
        pointerOnHover
      />

      {/*<HTMLRenderer html={htmlView} />*/}

      <RunModal runOpen={open} onClose={handleClose} selectedData={selectedData} />

      <ProfileDetail open={editModalOpen} onClose={handleEditModalClose} editState={editState} />

      {/*<Snackbar*/}
      {/*  anchorOrigin={{vertical: 'top', horizontal: 'center'}}*/}
      {/*  open={snackbarOpen}*/}
      {/*  autoHideDuration={1500}*/}
      {/*  onClose={handleAlertClose}*/}
      {/*  message='Coming soon!'*/}
      {/*>*/}
      {/*  <Alert icon={false} onClose={handleAlertClose} severity='warning'>*/}
      {/*    Coming soon!*/}
      {/*  </Alert>*/}
      {/*</Snackbar>*/}
    </>
  );
};

export default ShotgunDataTable;
