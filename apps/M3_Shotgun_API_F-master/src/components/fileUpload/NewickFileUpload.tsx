import React, {useEffect, useState, useCallback, useRef, useLayoutEffect} from 'react';
import axios from 'axios';
import Head from 'next/head';
import {getCookie} from 'cookies-next';
import {NewickTools} from 'newick-tree-parser';
import dynamic from 'next/dynamic';
import {usePhyloCanvasStyles} from '@styles/phyloCanvas/phyloCanvasStyle';
import PhylocanvasGL, {TreeTypes} from '@phylocanvas/phylocanvas.gl';
import PhylocanvasTree from '@components/charts/PhylocanvasClass';

// const DynamicPhyloTreeChartComponent = dynamic(() => import('@components/charts/PhyloTree').then(mod => mod.PhyloTree), {
//   ssr: false,
//   loading: () => <p>Loading...</p>
// })
import {Button, TextField, Container, Box, Typography, Alert, CircularProgress} from '@mui/material';
import {Btn} from '@src/components/atoms/button';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';

const accessJwt = getCookie('emHYMSSW');

export const NwkFileUpload = (props) => {
  const [nwkText, setNwkText] = useState<string>('');
  const slctRef = useRef('');
  const hh = useRef('');
  const pcCss = usePhyloCanvasStyles();

  useEffect(() => {
    // console.log('chchchchch');
    // makeTree(nwkText);
    // tree();
    // console.log(ref.current.value);
  }, []);

  // const tree = new PhylocanvasGL(hh.current, {
  //   size: {width: 400, height: 300},
  //   source: `(Bovine:0.69395,(Gibbon:0.36079,(Orangutan:0.33636,(Gorilla:0.17147,(Chimp:1.19268,Human:0.11927):0.08386):0.06124):0.15057):0.54939,Mouse:1.21460);`,
  //   type: TreeTypes.Rectangular,
  // });

  let nwkFile = '';
  const onChangeFile = (event) => {
    nwkFile = event.target.files[0];
    console.log('nwkFile ->', nwkFile);

    const fileReader = new FileReader();
    fileReader.onload = (data) => {
      console.log('state', fileReader.readyState);
      console.log(typeof fileReader.result);
      console.log('newick file read =>', fileReader.result);
      const nwkResult = fileReader.result;

      console.log(typeof nwkResult);
      const parseNwkData = NewickTools.parse(nwkResult); // const normalizedTree = NewickTools.dfs(tree);
      setNwkText(nwkResult);

      // makeTree(parseNwkData);
    };
    fileReader.readAsText(nwkFile);
  };

  const makeTree = (nwkResult) => {
    console.log('make tree!!!!', nwkResult);

    let root = am5.Root.new('phyloTree');

    root.setThemes([am5themes_Animated.new(root)]);

    let indicator = root.container.children.push(
      am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layer: 1000,
        background: am5.Rectangle.new(root, {
          fill: am5.color(0xffffff),
          fillOpacity: 0.7,
        }),
      }),
    );

    indicator.children.push(
      am5.Label.new(root, {
        text: 'Loading...',
        fontSize: 25,
        x: am5.p50,
        y: am5.p50,
        centerX: am5.p50,
        centerY: am5.p50,
      }),
    );

    const data = [nwkResult];

    indicator.show();

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      }),
    );

    let series = container.children.push(
      am5hierarchy.Tree.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 5,
        topDepth: 0,
        valueField: 'length',
        categoryField: 'name',
        childDataField: 'branchset',
        orientation: 'vertical',
        forceInactive: true,
      }),
    );

    let btn = series.children.push(
      am5.Button.new(root, {
        dx: 0,
        dy: 0,
        label: am5.Label.new(root, {
          text: 'Clear',
          fontSize: 15,
          paddingTop: 1,
          paddingRight: 1,
          paddingBottom: 1,
          paddingLeft: 1,
        }),
      }),
    );

    btn.events.on('click', (ev) => {
      // console.log('ev', ev);
      root.dispose();
      slctRef.current.value = '';
      setNwkText('');
    });

    indicator.hide();
    series.data.setAll(data);
    series.set('selectedDataItem', series.dataItems[0]);
  };

  return (
    <Box sx={{backgroundColor: '#eeeeee'}}>
      <TextField
        type="file"
        onChange={onChangeFile}
        sx={{backgroundColor: 'white'}}
        inputProps={{
          ref: slctRef,
          accept: '.nwk',
        }}
      />
      {/*<p>{JSON.stringify(nwkText)}</p>*/}
      {/*<CircularProgress />*/}
      {/*{nwkText !== '' ? (*/}
      {/*  <Box id="phyloTree" style={{width: '100wh', height: '100vh', backgroundColor: 'white'}} />*/}
      {/*) : (*/}
      {/*  <Box className={pcCss.slctFileWrap} onClick={() => slctRef.current.click()}>*/}
      {/*    파일 선택*/}
      {/*  </Box>*/}
      {/*)}*/}

      {/*<Box ref={hh} sx={{width: 500, height: 500}} />*/}

      {nwkText !== '' && (
        <PhylocanvasTree
          source={nwkText}
          size={{width: window.innerWidth || document.body.clientWidth, height: 800}}
          alignLabels
          showLabels
          showLeafLabels
          interactive
          nodeSize={20}
          fillColour="#F900BF"
        />
      )}

      {/*<DynamicPhyloTreeChartComponent title="PhyloTree" nwkData={nwkText}/>*/}
    </Box>
  );
};
