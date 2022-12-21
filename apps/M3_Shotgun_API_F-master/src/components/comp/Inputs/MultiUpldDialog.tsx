import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {Box, Dialog, IconButton, Toolbar, Grid, Typography} from '@mui/material';
import {Close} from '@mui/icons-material';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import {ReactSortable} from 'react-sortablejs';

const todosData = [
  {id: '1', title: '공부'},
  {id: '2', title: '헬스'},
  {id: '3', title: '독서'},
  {id: '4', title: '산책'},
  {id: '5', title: '요리'},
];
const fileList = [
  [{name: 'a1.fq'}, {name: 'a2.fq'}],
  [{name: 'b1.fq'}],
  [{name: 'c3.fq'}],
  [{name: 'c1.fq'}],
];

const MultiUpldDialog = ({open, Transition, multiUploadDialogClose}) => {
  const [multiFileState, setMultiFileState] = useState([]);
  const [state, setState] = useState([
    {id: 1, name: 'shrek'},
    {id: 2, name: 'fiona'},
    {id: 3, name: 'mason'},
    {id: 4, name: 'bell'},
    {id: 5, name: 'pawndemon'},
  ]);
  const [todos, setTodos] = useState([
    {id: '1', title: '공부'},
    {id: '2', title: '헬스'},
    {id: '3', title: '독서'},
    {id: '4', title: '산책'},
    {id: '5', title: '요리'},
  ]);

  // useEffect(() => {
  //   console.log('>>>>', todos);
  // }, [todos]);

  const handleDndChange = (result) => {
    if (!result.destination) return;
    console.log('dndResult', result);
    const items = [...todos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  // specify upload params and url for your files
  const getUploadParams = ({file, meta}) => {
    // const body = new FormData();
    // body.append('brbrbr', file);
    setMultiFileState([...multiFileState, file]);
    return {url: 'https://httpbin.org/post'};
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({meta, file}, status) => {
    console.log(status, meta, file);
    // setMultiFileState([...multiFileState, file]);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  const Preview = ({meta}) => {
    const {name, percent, status} = meta;
    // setMultiFileState([...multiFileState, name]);
    return (
      // <Draggable draggableId={id} index={index}>
      //   {(provided) => <li
      //     ref={provided.innerRef}
      //     {...provided.dragHandleProps}
      //     {...provided.draggableProps}
      //   >
      //     {name}, {Math.round(percent)}%, {status}
      //   </li>}
      // </Draggable>

      <span style={{alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica'}}>
        {name}, {Math.round(percent)}%, {status}
      </span>
    );
  };

  const Layout = ({input, previews, submitButton, dropzoneProps, files, extra: {maxFiles}}) => {

    // console.log('previews', files[0].meta.percent);

    return (
      <div>
        {previews}
        {/*<Preview />*/}

        <div {...dropzoneProps}>
          {files.length < maxFiles && input}
        </div>

        {files.length > 0 && submitButton}
      </div>
    );
  };

  const findPairedFile = function(file) {
    for (let i = 0, files; files = fileList[i]; i++) {
      if (files.length === 1) {
        const pairedFile = files[0];
        if (pairedFile.name.length === file.name.length) {
          let diff = 0;
          let index = -1;
          for (let j = 0; j < Math.min(pairedFile.name.length, file.name.length); j++) {
            if (pairedFile.name[j] !== file.name[j]) {
              diff++;
              index = j;
            }
          }

          if (diff === 1 && ((pairedFile.name[index] === '1' && file.name[index] === '2') || (pairedFile.name[index] === '2' && file.name[index] === '1'))) {
            return {index: i, isFirst: file.name[index] === '1'};
          }
        }
      }
    }

    return null;
  };

  // console.log('Paired ==>', findPairedFile({name: 'c2.fq'}));

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          onClick={multiUploadDialogClose}
          aria-label='close'
        >
          <Close />
        </IconButton>
      </Toolbar>

      <Box>
        <DragDropContext onDragEnd={handleDndChange}>
          <Droppable droppableId='todos'>
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map(({id, title}, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => <li
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >{title}</li>}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        {/*<Box>*/}
        {/*  <ReactSortable list={multiFileState} setList={setMultiFileState} group={'Group1'}>*/}
        {/*    {*/}
        {/*      multiFileState.map((item, index) => (*/}
        {/*        <Typography key={index.toString()}>{item.name}</Typography>*/}
        {/*      ))*/}
        {/*    }*/}
        {/*  </ReactSortable>*/}
        {/*</Box>*/}

        <Box>
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            // LayoutComponent={Layout}
            PreviewComponent={Preview}
            disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
            accept='.fasta, .fa, .fna, .faa, .ffn, .fastq, .fq, .gz, .gzip, .gunzip'
          />
        </Box>
      </Box>
    </Dialog>
  );
};

export default MultiUpldDialog;
