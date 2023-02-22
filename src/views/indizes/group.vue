<template>
  <div id="groupPage">
    <b-jumbotron
      :header="header">
    </b-jumbotron>
    <ChartContainer title="Index" containerID="index">
      <LineChart
        chartRef="indexChart"
        :dataUrl="urls.index"
        nameDateField="date"
        :namesValueFields="valueFields.indexChart"></LineChart>
    </ChartContainer>
    <ChartContainer title="Index-Depot" containerID="depot">
      <LineChart
        chartRef="depotChart"
        :dataUrl="urls.depot"
        nameDateField="date"
        :namesValueFields="valueFields.depotChart"></LineChart>
    </ChartContainer>
    <ChartContainer title="Index Orderbuch" containerID="order">
      <LineChart
        chartRef="orderChart"
        :dataUrl="urls.order"
        nameDateField="date"
        :namesValueFields="valueFields.orderChart"></LineChart>
    </ChartContainer>
  </div>
</template>

<script>
import axios from 'axios';
import ChartContainer from '@/components/ChartContainer.vue';
import LineChart from '@/components/charts/LineChart.vue';

export default {
  name: 'groupPage',
  components: {
    ChartContainer,
    LineChart,
  },
  data: function dataLoader() {
    return {
      id: this.$route.params.id,
      group: {},
      header: '',
      urls: {
        index: `${process.env.VUE_APP_STATS_URL}/api/index/${this.$route.params.id}/chart`,
        depot: `${process.env.VUE_APP_STATS_URL}/api/index/${this.$route.params.id}/depot`,
        order: `${process.env.VUE_APP_STATS_URL}/api/index/${this.$route.params.id}/order`,
      },
      valueFields: {
        indexChart: [
          {
            valueName: 'boersenwert',
            label: 'Marktkapitalisierung',
            color: '#0000ff', // blue
            colorToolTipLabel: '#fff', // white
          },
          {
            valueName: 'bw',
            label: 'Buchwert',
            color: '#008000', // green
            colorToolTipLabel: '#fff', // white
          },
        ],
        depotChart: [
          {
            valueName: 'aktien',
            label: 'Aktien',
            color: '#0000ff', // blue
            colorToolTipLabel: '#fff', // white
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
            valueName: 'cash',
            label: 'Bargeld',
            color: '#838B8B', // grey
            colorToolTipLabel: '#000', // black
          },
        ],
        orderChart: [
          {
            valueName: 'buys',
            label: 'Buy-Orders',
            color: '#008000', // green
            colorToolTipLabel: '#fff', // white
          },
          {
            valueName: 'sells',
            label: 'Sell-Orders',
            color: '#FF0000', // red
            colorToolTipLabel: '#000', // black
          },
        ],
      },
    };
  },
  created() {
    this.checkGroup(this.$route.params.id);
  },
  methods: {
    checkGroup: function check(id) {
      axios.get(`${process.env.VUE_APP_STATS_URL}/api/index/${id}`).then((result) => {
        if (result.data === null) {
          console.log(result.data);
          this.$route.push({
            name: 'notFound',
          });
        } else {
          this.group = result.data;
          this.header = `${result.data.name} (#${result.data.id})`;
        }
      }).catch(() => {
        this.$router.push({
          name: 'notFound',
        });
      });
    },
  },
};
</script>
