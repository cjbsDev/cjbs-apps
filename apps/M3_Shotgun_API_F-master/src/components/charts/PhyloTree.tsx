import React, {useLayoutEffect, FunctionComponent} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {Box} from "@mui/material";

// interface PhyloTreeProps {
//   title?: string;
//   nwkData: object;
// }

export const PhyloTree = ({title, nwkData}) => {
  useLayoutEffect(() => {
    console.log('324342342', nwkData);

    let root = am5.Root.new("phyloTree");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const data = nwkData;

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );

    let series = container.children.push(
      am5hierarchy.Tree.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 5,
        topDepth: 0,
        valueField: "length",
        categoryField: "name",
        childDataField: "branchset",
        orientation: "horizontal"
      })
    );

    series.data.setAll(nwkData);
    series.set("selectedDataItem", series.dataItems[0]);

  }, [])

  return (
    <>
      <Box component="h3" sx={{mb: 3, fontSize: 16}}>{title}</Box>
      {/*{nwkData !== {} ? <div id="phyloTree" style={{width: '100%', height: '70vh', backgroundColor: 'white'}}/> : null}*/}
      <div id="phyloTree" style={{width: '100%', height: '70vh', backgroundColor: 'white'}}/>
    </>
  );
};
