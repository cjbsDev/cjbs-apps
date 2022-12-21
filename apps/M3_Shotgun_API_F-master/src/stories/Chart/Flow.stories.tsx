import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {flowData} from '@components/charts/data/flowData';
import {FlowChart} from '@components/charts/FlowChart';

// import dynamic from 'next/dynamic';
// const DynamicFlowChartComponent = dynamic(() => import('@src/components/charts/flowChart'), {
//   ssr: false
// });

export default {
  title: 'Chart/Flow',
  component: FlowChart,
  parameters: {
    docs: {
      description: {
        component: 'Flow Chart Sample.',
      },
    },
  },
  argTypes: {
    title: {
      description: '플로우차트 타이틀 입니다.',
      // table: {
      //   defaultValue: {
      //     summary: ''
      //   }
      // },
    },
    data: {
      description: '플로우차트 데이타를 입력하세요.',
      table: {
        defaultValue: {
          summary: '필수입니다.'
        }
      },
    },
    nodePadding: {
      description: 'nodes 사이 간격 값.',
    },
  },
} as ComponentMeta<typeof FlowChart>;

const Temp: ComponentStory<typeof FlowChart> = (args) => <FlowChart {...args} />;
export const FlowChartTemp = Temp.bind({});
FlowChartTemp.args = {
  title: 'Sample FlowChart Title',
  data: flowData,
  orientation: 'horizontal',
  nodeWidth: 22,
  nodePadding: 35,
};
