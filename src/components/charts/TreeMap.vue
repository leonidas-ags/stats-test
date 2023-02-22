<template>
  <div id="treemapChart">
    <b-form-select v-model="selected" :options="indizesConfig.possibleValues">
    </b-form-select>
    <div id="treeMapAmChart" style="width: 100%; height: 700px; background-color: #FFFFFF;"></div>

  </div>

</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export default {
  name: 'treemap',
  props: {
    indizes: Boolean,
    ags: Boolean,
  },
  data: function dataLoader() {
    return {
      selected: '',
      chart: '',
      agUrl: `${process.env.VUE_APP_STATS_URL}/api/ag/,`,
      indizesConfig: {
        url: `${process.env.VUE_APP_STATS_URL}/api/index/`,
        value: 'buchwert',
        name: 'name',
        possibleValues: [
          {
            text: 'Buchwert',
            value: 'buchwert',
          },
          {
            text: 'Marktkapitalisierung',
            value: 'boersenwert',
          },
          {
            text: 'Aktien',
            value: 'aktien',
          },
          {
            text: 'Anleihen',
            value: 'anleihen',
          },
          {
            text: 'Kredite',
            value: 'kredite',
          },
          {
            text: 'Bargeld',
            value: 'bargeld',
          },
        ],
      },
      agConfig: {
        url: `${process.env.VUE_APP_STATS_URL}/api/ag/treemap/last`,
        value: 'boersenwert',
        name: 'ag',
        possibleValues: [
          {
            text: 'Börsenwert',
            value: 'boersenwert',
          },
          {
            text: 'Buchwert',
            value: 'buchwert',
          },
          {
            text: 'Bargeld',
            value: 'bargeld',
          },
          {
            text: 'Aktien',
            value: 'aktien',
          },
          {
            text: 'Kredite',
            value: 'kredite',
          },
          {
            text: 'Anleihen',
            value: 'anleihen',
          },
          {
            text: 'Zertis',
            value: 'zertis',
          },
          {
            text: 'Buy-Orders',
            value: 'buys',
          },
          {
            text: 'Sell-Orders',
            value: 'sells',
          },

        ],
      },
    };
  },
  watch: {
    selected: function changeChartValue(val, oldVal) {
      if (oldVal !== '') {
        this.chart.dataFields.value = val;
        this.chart.dataSource.load();
      }
    },
  },
  mounted() {
    // Chart creation
    this.chart = am4core.create(document.getElementById('treeMapAmChart'), am4charts.TreeMap);
    this.chart.exporting.menu = new am4core.ExportMenu();
    this.chart.exporting.menu.align = 'right';
    this.chart.exporting.menu.verticalAlign = 'bottom';
    this.chart.logo.disabled = true;

    // Value config
    if (this.indizes) {
      this.selected = this.indizesConfig.value;
      this.chart.dataSource.url = this.indizesConfig.url;
      this.chart.dataFields.value = this.indizesConfig.value;
      this.chart.dataFields.name = this.indizesConfig.name;
    }
    if (this.ags) {
      this.selected = this.agConfig.value;
      this.chart.dataSource.url = this.agConfig.url;
      this.chart.dataFields.value = this.agConfig.value;
      this.chart.dataFields.name = this.agConfig.name;
    }

    this.chart.numberFormatter.numberFormat = '#.#a';
    this.chart.numberFormatter.bigNumberPrefixes = [
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

    /* Configure top-level series */
    const level1 = this.chart.seriesTemplates.create('0');
    const level1Column = level1.columns.template;
    level1Column.column.cornerRadius(10, 10, 10, 10);
    level1Column.fillOpacity = 0.8;
    level1Column.stroke = am4core.color('#fff');
    level1Column.strokeWidth = 5;
    level1Column.strokeOpacity = 1;

    /* Add bullet labels */
    const level1Bullet = level1.bullets.push(new am4charts.LabelBullet());
    level1Bullet.locationY = 0.5;
    level1Bullet.locationX = 0.5;
    level1Bullet.label.text = '{name}';
  },
};
</script>
