import React, {ReactNode, useLayoutEffect} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5flow from '@amcharts/amcharts5/flow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {Box} from '@mui/material';

interface FlowChartProps {
  title?: string;
  data: Array<object>;
  orientation?: 'vertical' | 'horizontal';
  nodeWidth?: number;
  nodePadding?: number;
}

export const FlowChart: React.FunctionComponent<FlowChartProps> = (
  {
    title,
    data,
    orientation,
    nodeWidth,
    nodePadding
  }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new('flowChartDiv');

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let series = root.container.children.push(
      am5flow.Sankey.new(root, {
        sourceIdField: 'from',
        targetIdField: 'to',
        valueField: 'value',
        nodeWidth: nodeWidth,
        nodePadding: nodePadding,
        // nodeAlign: 'left', or 'right' or 'justify' or 'center'
        linkTension: 0, // or 0.5 or 1
        orientation: orientation,
      })
    );

    series.nodes.rectangles.template.setAll({
      stroke: am5.color(0x000000),
      strokeWidth: 1,
      cornerRadiusTL: 4,
      cornerRadiusTR: 4,
      cornerRadiusBL: 4,
      cornerRadiusBR: 4
    });

    // series.nodes.labels.template.set('visible', false);

    series.nodes.labels.template.setAll({
      x: am5.percent(50),
      centerX: am5.percent(50),
      y: am5.percent(0),
      centerY: am5.percent(0),
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: 18,
    });

    // series.nodes.data.setAll([
    //   {id: 'A', name: 'Node A', fill: am5.color(0xFF621F)},
    //   {id: 'B', name: 'Node B', fill: am5.color(0x297373)},
    //   {id: 'C', name: 'Node C', fill: am5.color(0x946B49)}
    // ]);

    series.nodes.get('colors').set('step', 2);

    series.links.template.setAll({
      fillStyle: 'gradient', // 'gradient', 'solid', 'source', 'target'
      fillOpacity: 0.25,
      controlPointDistance: 0.1,
      tooltipText: "From: [bold]{sourceId}[/]\nTo: [bold]{targetId}\nValue: [bold]{value}[/]",
    });

    series.nodes.rectangles.template.setAll({
      tooltipText: "[bold]{name}[/]\nOutgoing: {sumOutgoing}\nIncoming: {sumIncoming}"
    });

    series.bullets.push(function (root, series, dataItem) {
      let bullet = am5.Bullet.new(root, {
        locationX: 0.5,
        autoRotate: true,
        sprite: am5.Graphics.new(root, {
          fill: dataItem.get('source').get('fill'),
          centerY: am5.percent(50),
          centerX: am5.percent(50),
          draw: function (display) {
            display.moveTo(0, -6);
            display.lineTo(16, 0);
            display.lineTo(0, 6);
            display.lineTo(0, -6);
          }
        })
      });

      bullet.animate({
        key: orientation === 'horizontal' ? 'locationX' : 'locationY',
        to: 0.8,
        from: 0.2,
        duration: Math.random() * 1000 + 2000,
        loops: Infinity,
        easing: am5.ease.quad
      });

      return bullet;
    });

    series.data.setAll(data);

    return () => {
      series.dispose();
    };
  }, []);

  return (
    <>
      <Box component="h3" sx={{mb: 3, fontSize: 16}}>{title}</Box>
      <div id="flowChartDiv" style={{width: '100%', height: '45vh', backgroundColor: 'white'}}/>
    </>
  );
};
