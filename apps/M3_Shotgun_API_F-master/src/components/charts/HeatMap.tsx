import React, {useLayoutEffect, FunctionComponent} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {Box} from "@mui/material";
import {IComponentDataItem} from "@amcharts/amcharts5/.internal/core/render/Component";

interface HeatMapProps {
  title?: string;
  data: Array<object>;
}

export const HeatMap: FunctionComponent<HeatMapProps> = ({title, data}) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("heatMap");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      layout: root.verticalLayout
    }));

    let yRenderer = am5xy.AxisRendererY.new(root, {
      visible: false,
      minGridDistance: 20,
      inversed: true
    });
    yRenderer.grid.template.set("visible", false);

    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      renderer: yRenderer,
      categoryField: "weekday"
    }));

    let xRenderer = am5xy.AxisRendererX.new(root, {
      visible: false,
      minGridDistance: 30,
      opposite: true
    });
    xRenderer.grid.template.set("visible", false);

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      renderer: xRenderer,
      categoryField: "hour"
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      calculateAggregates: true,
      stroke: am5.color(0xff0000),
      clustered: false,
      xAxis: xAxis,
      yAxis: yAxis,
      categoryXField: "hour",
      categoryYField: "weekday",
      valueField: "value"
    }));

    series.columns.template.setAll({
      tooltipText: "{value}",
      strokeOpacity: 1,
      strokeWidth: 1,
      width: am5.percent(100),
      height: am5.percent(100)
    });

    series.columns.template.events.on("pointerover", function (event) {
      let di = event.target.dataItem;
      if (di) {
        // @ts-ignore
        heatLegendBottom.showValue(di.get("value", 0));
        // @ts-ignore
        heatLegendRight.showValue(di.get("value", 0));
      }
    });

    series.events.on("datavalidated", function () {
      heatLegendBottom.set("startValue", series.getPrivate("valueHigh"));
      heatLegendBottom.set("endValue", series.getPrivate("valueLow"));

      heatLegendRight.set("startValue", series.getPrivate("valueHigh"));
      heatLegendRight.set("endValue", series.getPrivate("valueLow"));
    });

    series.set("heatRules", [{
      target: series.columns.template,
      min: am5.color(0xfffb77),
      max: am5.color(0xfe131a),
      dataField: "value",
      key: "fill"
    }]);

    let heatLegendBottom = chart.bottomAxesContainer.children.push(am5.HeatLegend.new(root, {
      orientation: "horizontal",
      endColor: am5.color(0xfffb77),
      startColor: am5.color(0xfe131a),
      startText: "Bad",
      endText: "Good",
      stepCount: 24,
    }));

    let heatLegendRight = chart.rightAxesContainer.children.push(am5.HeatLegend.new(root, {
      orientation: "vertical",
      startColor: am5.color(0xfe131a),
      endColor: am5.color(0xfffb77),
      startText: "Bad",
      endText: "Good",
      stepCount: 24,
    }))

    series.data.setAll(data);

    yAxis.data.setAll([
      {weekday: "Sunday"},
      {weekday: "Monday"},
      {weekday: "Tuesday"},
      {weekday: "Wednesday"},
      {weekday: "Thursday"},
      {weekday: "Friday"},
      {weekday: "Saturday"}
    ]);

    xAxis.data.setAll([
      {hour: "12pm"},
      {hour: "1am"},
      {hour: "2am"},
      {hour: "3am"},
      {hour: "4am"},
      {hour: "5am"},
      {hour: "6am"},
      {hour: "7am"},
      {hour: "8am"},
      {hour: "9am"},
      {hour: "10am"},
      {hour: "11am"},
      {hour: "12am"},
      {hour: "1pm"},
      {hour: "2pm"},
      {hour: "3pm"},
      {hour: "4pm"},
      {hour: "5pm"},
      {hour: "6pm"},
      {hour: "7pm"},
      {hour: "8pm"},
      {hour: "9pm"},
      {hour: "10pm"},
      {hour: "11pm"}
    ]);

    chart.appear(1000, 100);

  }, [])

  return (
    <>
      <Box component="h3" sx={{mb: 3, fontSize: 16}}>{title}</Box>
      <div id="heatMap" style={{width: '100%', height: '55vh', backgroundColor: 'white'}}/>
    </>
  );
};
