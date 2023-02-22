<template>
<div id="market">
    <b-jumbotron header="Marktweite Statistiken"></b-jumbotron>
    <ChartContainer title="Markt" containerID="markt">
        <LineChart
          chartRef="marketChart"
          :dataUrl="urls.marktUrl"
          nameDateField="date"
          :namesValueFields=marketValueFields></LineChart>
    </ChartContainer>
    <ChartContainer title="Depots" containerID="depots">
      <LineChart
        chartRef="depotChart"
        :dataUrl="urls.depotUrl"
        nameDateField="date"
        :namesValueFields=depotValueFields>
      </LineChart>
    </ChartContainer>
    <ChartContainer title="Orderbücher" containerID="orders">
      <LineChart
        chartRef="orderChart"
        :dataUrl="urls.orderUrl"
        nameDateField="date"
        :namesValueFields=orderValueFields>
      </LineChart>
    </ChartContainer>
    <ChartContainer title="Übernahmeschutz" containerID="ues">
      <LineChart
        chartRef="schutzChart"
        :dataUrl="urls.coverUrl"
        nameDateField="date"
        :namesValueFields="schutzValueFields">
      </LineChart>
    </ChartContainer>
    <ChartContainer title="Premium" containerID="prem">
      <LineChart
        chartRef="premChart"
        :dataUrl="urls.premUrl"
        nameDateField="date"
        :namesValueFields="premValueFields"></LineChart>
    </ChartContainer>
</div>

</template>

<script>
import ChartContainer from '@/components/ChartContainer.vue';
import LineChart from '@/components/charts/LineChart.vue';

export default {
  name: 'Market',
  components: {
    ChartContainer,
    LineChart,
  },
  data: function dataLoader() {
    return {
      urls: {
        marktUrl: `${process.env.VUE_APP_STATS_URL}/api/markt`,
        depotUrl: `${process.env.VUE_APP_STATS_URL}/api/markt/depot`,
        orderUrl: `${process.env.VUE_APP_STATS_URL}/api/markt/order`,
        coverUrl: `${process.env.VUE_APP_STATS_URL}/api/markt/schutz`,
        premUrl: `${process.env.VUE_APP_STATS_URL}/api/markt/premium`,
      },
      depotValueFields: [
        {
          valueName: 'aktien',
          label: 'Aktien',
          color: '#0000ff', // blue
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'cash',
          label: 'Bargeld',
          color: '#838B8B', // grey
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'anleihen',
          label: 'Anleihen',
          color: '#008000', // green
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'kredite',
          label: 'Kredite',
          color: '#FF0000', // red
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'zertis',
          label: 'Zertis',
          color: '#FF8000', // orange
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'nettcash',
          label: 'Nettcash',
          color: '#000', // black
          colorToolTipLabel: '#fff', // white
        },
      ],
      orderValueFields: [
        {
          valueName: 'buys',
          label: 'Buys',
          color: '#008000', // green
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'sells',
          label: 'Sells',
          color: '#FF0000', // red
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'cash',
          label: 'Bargeld',
          color: '#838B8B', // grey
          colorToolTipLabel: '#000', // black
        },
      ],
      schutzValueFields: [
        {
          valueName: 'ja',
          label: 'Schutz',
          color: '#008000', // green
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'nein',
          label: 'Kein Schutz',
          color: '#FF0000', // red
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'spieler',
          label: 'Spieler',
          color: '#000', // black
          colorToolTipLabel: '#fff', // white
        },
      ],
      marketValueFields: [
        {
          valueName: 'bbw',
          label: 'BBW',
          color: '#FF8000', // orange
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'bw',
          label: 'BW',
          color: '#008000', // green
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'fp',
          label: 'FP',
          color: '#FF0000', // red
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'sw',
          label: 'SW',
          color: '#000', // black
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'kurs',
          label: 'Marktkapitalisierung',
          color: '#0000ff', // blue
          colorToolTipLabel: '#fff', // white
        },
      ],
      premValueFields: [
        {
          valueName: 'premium',
          label: 'Premium',
          color: '#008000', // green
          colorToolTipLabel: '#fff', // white
        },
        {
          valueName: 'kein',
          label: 'Kein Premium',
          color: '#FF0000', // red
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'gold',
          label: 'Gold Premium',
          color: '#ffc800', // yellow
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'silber',
          label: 'Silber Premium',
          color: '#000cff', // blue
          colorToolTipLabel: '#000', // black
        },
        {
          valueName: 'spieler',
          label: 'Spieler',
          color: '#000', // black
          colorToolTipLabel: '#fff', // white
        },
      ],
    };
  },
};
</script>
