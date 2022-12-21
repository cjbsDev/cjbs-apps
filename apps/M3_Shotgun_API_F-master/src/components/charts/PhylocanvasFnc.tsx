import React, {useEffect, useState, useRef, PureComponent} from 'react';
import PhylocanvasGL, {TreeTypes} from '@phylocanvas/phylocanvas.gl';
import {Menu, MenuItem} from '@mui/material';

interface PhyloTreeProps {
  source: string | ArrayBuffer;
  size: {
    width: number;
    height: number;
  };
  alignLabels?: boolean;
  showLabels?: boolean;
  showLeafLabels?: boolean;
  interactive?: boolean;
  nodeSize?: number;
  fontSize?: number;
  fillColour?: string;
  strokeColour?: string;
  fontColour?: string;
  highlightColour?: string;
  centre?: any;
  branchZoom?: number;
  zoom?: number;
  treeToCanvasRatio?: number;
  treeTypeName?: string;
  haloRadius?: number;
  haloWidth?: number;
}

// const ContextMenu = React.memo((props) => {
//   return (
//     <Menu open onClose={props.onClose} anchorReference="anchorPosition" anchorPosition={props.position}>
//       <div onClick={props.onClose}>
//         {props.options.map((item, index) => (
//           <MenuItem key={index.toString()} onClick={item.onClick}>
//             {item.label}
//           </MenuItem>
//         ))}
//       </div>
//     </Menu>
//   );
// });
//
// const TreeContextMenu = React.memo((props) => {
//   if (props.position && props.node) {
//     return (
//       <ContextMenu
//         onClose={props.onMenuClose}
//         position={props.position}
//         options={[
//           {label: 'View Subtree', onClick: props.onViewSubtree},
//           {label: 'Collapse/Expand Subtree', onClick: props.onCollapseNode},
//         ]}
//       />
//     );
//   }
//
//   if (props.position) {
//     return (
//       <ContextMenu
//         onClose={props.onMenuClose}
//         position={props.position}
//         options={[
//           {label: 'Midpoint Root', onClick: props.onMidpointRoot},
//           {label: 'Redraw Original Tree', onClick: props.onRedrawOriginalTree},
//         ]}
//       />
//     );
//   }
//
//   return null;
// });

let tree;

const PhyloCanvasTreeFnc = (props: PhyloTreeProps) => {
  const canvasRef = useRef();
  const downloadJSONRef = useRef();

  useEffect(() => {
    tree = new PhylocanvasGL(canvasRef.current, props || {}, []);

    // console.log('Number of leaf nodes: %s', tree.getNodes().leaves.length);
    // tree.collapseNode('GCF_000188915.1');
    // tree.exportJSON();
    switch (props.treeTypeName) {
      case 'rd':
        tree.setTreeType(TreeTypes.Radial);
        break;
      case 'rc':
        tree.setTreeType(TreeTypes.Rectangular);
        break;
      case 'cr':
        tree.setTreeType(TreeTypes.Circular);
        break;
      case 'dg':
        tree.setTreeType(TreeTypes.Diagonal);
        break;
      case 'hr':
        tree.setTreeType(TreeTypes.Hierarchical);
        break;
    }

    // console.log('GetNodeSize ->', tree.getLeafLabels().length);

    return () => {
      tree.destroy();
    };
  }, [props]);

  // const treeFile = new File([tree.exportJSON()], 'tree.json', {type: 'application/json'});

  const exportData = () => {
    // const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(treeFile))}`;
    // const link = document.createElement('a');
    // link.href = jsonString;
    // link.download = 'data.json';
    //
    // link.click();
  };

  const exportJSON = () => {
    console.log('eeeee');
    // tree.setProps({
    //   zoom: 1,
    // });
    // tree.setRoot('1');
  };

  return (
    <>
      <button ref={downloadJSONRef} style={{}} onClick={exportData}>
        Download JSON
      </button>
      <div ref={canvasRef} style={{width: '100vw', height: '100vh'}}>
        {/* <div ref={this.canvasRef} onContextMenu={this.handleContextMenu}>*/}
        {/*<TreeContextMenu*/}
        {/*  position={this.state.contextMenuPosition}*/}
        {/*  onMenuClose={this.handleMenuClose}*/}
        {/*  onViewSubtree={() => this.tree.setRoot(this.state.contextMenuNode)}*/}
        {/*  onCollapseNode={() => this.tree.collapseNode(this.state.contextMenuNode)}*/}
        {/*  onRedrawOriginalTree={() => this.tree.setSource(this.tree.getGraphWithoutLayout().originalSource)}*/}
        {/*  onMidpointRoot={() => this.tree.midpointRoot()}*/}
        {/*  node={this.state.contextMenuNode}*/}
        {/*/>*/}
      </div>
    </>
  );
};

export default PhyloCanvasTreeFnc;
