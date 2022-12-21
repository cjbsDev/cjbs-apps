import React from 'react';

import scaleBarPlugin from '@mkoliba/phylogeny-tree-plugin-scalebar';
import PhylogenyTree from 'react-phylogeny-tree';
import {
  createOnSelectPlugin,
  createOnViewSubtreePlugin,
  createOnRedrawReRootTreePlugin,
} from 'react-phylogeny-tree/plugins';
import {useLeafSubtree, useAutoResize} from 'react-phylogeny-tree/hooks';
import 'react-phylogeny-tree/css/zoom.css'; // in next.js css imports might need to go to pages/_app.js
import '@mkoliba/phylogeny-tree-plugin-context-menu/styles.css';
import '@mkoliba/phylogeny-tree-plugin-interactions/styles.css';

const newick = '(((A:0.2, B:0.3):0.3,(C:0.5, D:0.3):0.2):0.3, E:0.7):1.0;';
const hooks = [useAutoResize, useLeafSubtree];

export function PTreeComponent(props): JSX.Element {
  const [highlighted, setHighlighted] = React.useState(['A']);
  const [subtreeID, setSubtreeID] = React.useState<string>();
  const [leafs, setLeafs] = React.useState<string[]>();

  // memoized props, so they are not recreated on every render and pass on ref. equality
  const options = React.useMemo(
    () => ({
      selectedIds: highlighted,
      leafSubtree: {leafID: subtreeID, noLevels: 1, minLeafToRootLength: 0},
      tooltipContent: (node) => {
        return `id: ${node.id}<br>
          branch length: ${node.branchLength}`;
      },
    }),
    [highlighted, subtreeID],
  );
  const plugins = React.useMemo(() => {
    return [
      scaleBarPlugin,
      createOnSelectPlugin((tree, selectedIds) => {
        setHighlighted(selectedIds);
      }),
      createOnViewSubtreePlugin((tree, leafsInTree) => {
        setSubtreeID(null);
        setLeafs(leafsInTree);
      }),
      createOnRedrawReRootTreePlugin((tree, leafsInTree) => {
        setSubtreeID(null);
        setLeafs(leafsInTree);
      }),
    ];
  }, []);

  return (
    <div>
      <div className="containerToBeFilledWithCanvas">
        <PhylogenyTree newick={newick} options={options} hooks={hooks} plugins={plugins} interactive={true} zoom />
      </div>
      <button
        onClick={() => {
          setSubtreeID('B');
        }}
      >
        set subtree around leaf B
      </button>
      <div>leafs in subtree: {leafs}</div>
      <div>selected IDs: {highlighted}</div>
    </div>
  );
}
