import React, {PureComponent} from 'react';
import PhylocanvasGL, {TreeTypes} from '@phylocanvas/phylocanvas.gl';
import {Menu, MenuItem} from '@mui/material';

interface Props {
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
  fillColour?: string;
  strokeColour?: string;
  fontColour?: string;
  highlightColour?: string;
  centre?: any;
  branchZoom?: number;
  zoom?: number;
  treeToCanvasRatio?: number;
}

const ContextMenu = React.memo((props) => {
  return (
    <Menu open onClose={props.onClose} anchorReference="anchorPosition" anchorPosition={props.position}>
      <div onClick={props.onClose}>
        {props.options.map((item, index) => (
          <MenuItem key={index.toString()} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
});

const TreeContextMenu = React.memo((props) => {
  if (props.position && props.node) {
    return (
      <ContextMenu
        onClose={props.onMenuClose}
        position={props.position}
        options={[
          {label: 'View Subtree', onClick: props.onViewSubtree},
          {label: 'Collapse/Expand Subtree', onClick: props.onCollapseNode},
        ]}
      />
    );
  }

  if (props.position) {
    return (
      <ContextMenu
        onClose={props.onMenuClose}
        position={props.position}
        options={[
          {label: 'Midpoint Root', onClick: props.onMidpointRoot},
          {label: 'Redraw Original Tree', onClick: props.onRedrawOriginalTree},
        ]}
      />
    );
  }

  return null;
});

class PhylocanvasTree extends React.Component<Props> {
  static displayName = 'Phylocanvas';

  initialState = {
    contextMenuPosition: undefined,
    contextMenuNode: undefined,
  };

  state = this.initialState;

  canvasRef = React.createRef();

  handleContextMenu = (event) => {
    event.preventDefault();
  };

  handleMenuClose = () => {
    this.setState(this.initialState);
  };

  componentDidMount() {
    this.tree = new PhylocanvasGL(this.canvasRef.current, this.props || {});

    // this.tree = new PhylocanvasGL(this.canvasRef.current, this.props || {}, [
    //   (tree, decorate) => {
    //     decorate('handleClick', (delegate, args) => {
    //       const [info, event] = args;
    //       if (event.rightButton) {
    //         event.preventDefault();
    //         const node = tree.pickNodeFromLayer(info);
    //         this.setState({
    //           contextMenuPosition: {
    //             left: event.center.x,
    //             top: event.center.y,
    //           },
    //           contextMenuNode: node,
    //         });
    //       } else {
    //         delegate(info, event);
    //       }
    //     });
    //   },
    // ]);
  }

  componentDidUpdate() {
    this.tree.setProps(this.props);
  }

  componentWillUnmount() {
    this.tree.destroy();
  }

  render() {
    return (
      <div ref={this.canvasRef} style={{width: '100vw', height: '100vh'}}>
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
    );
  }
}

export default PhylocanvasTree;
