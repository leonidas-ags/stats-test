<template>
    <div style="width: 100%; height: 500px" :ref=chartRef></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themesAnimated);

export default {
  name: 'LineChart',
  props: {
    chartRef: String,
    dataUrl: String,
    nameDateField: String,
    namesValueFields: Array,
  },

  mounted() {
    // Chart creation here
    const chart = am4core.create(this.$refs[this.chartRef], am4charts.XYChart);
    chart.paddingRight = 20;

    chart.cursor = new am4charts.XYCursor();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = 'right';
    chart.exporting.menu.verticalAlign = 'bottom';
    chart.dateFormatter.inputDateFormat = 'dd.MM.yyyy';
    chart.logo.disabled = true;
    chart.legend = new am4charts.Legend();
    chart.dataSource.url = this.dataUrl;
    chart.numberFormatter.numberFormat = '#.#a';
    chart.numberFormatter.bigNumberPrefixes = [
      {
        number: 1000000,
        suffix: ' Mio.',
      },
      {
        number: 1000000000,
        suffix: ' Mrd.',
      },
      {
        number: 1000000000000,
        suffix: ' Bill.',
      },
    ];

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    // Create value axis
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    // Create Series
    this.namesValueFields.forEach((graph) => {
      const line = chart.series.push(new am4charts.LineSeries());
      line.dataFields.valueY = graph.valueName;
      line.dataFields.dateX = this.nameDateField;
      line.name = graph.label;
      line.tooltipText = `${graph.label}: [bold] {valueY}[/]`;
      line.tooltip.getFillFromObject = false;
      line.stroke = am4core.color(graph.color);
      line.strokeWidth = 2;
      line.tensionX = 0.7;
      line.tooltip.background.fill = am4core.color(graph.color);
      line.tooltip.label.fill = am4core.color(graph.colorToolTipLabel);
    });
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
