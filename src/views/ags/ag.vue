<template>
  <div id="agPage">
    <b-jumbotron
      :header="header">
    </b-jumbotron>
    <ChartContainer title="AG Entwicklung" containerID="ag">
      <LineChart
        chartRef="agChart"
        :dataUrl="urls.ag"
        nameDateField="date"
        :namesValueFields="valueFields.agChart">
      </LineChart>
    </ChartContainer>
    <ChartContainer title="Depot Entwicklung" containerID="depot">
      <LineChart
        chartRef="agDepot"
        :dataUrl="urls.depot"
        nameDateField="date"
        :namesValueFields=valueFields.depotChart>
      </LineChart>
    </ChartContainer>
    <ChartContainer title="Orderbuch Entwicklung" containerID="order">
      <LineChart
        chartRef="agORder"
        :dataUrl="urls.order"
        nameDateField="date"
        :namesValueFields=valueFields.orderChart>
      </LineChart>
    </ChartContainer>
    <ChartContainer title="Handelsaktivität Entwicklung" containerID="handel">
      <LineChart
        chartRef="agActiv"
        :dataUrl="urls.activity"
        nameDateField="date"
        :namesValueFields=valueFields.activityChart>
      </LineChart>
    </ChartContainer>
    <ChartContainer title="AGSX-P. Entwicklung" containerID="agsx">
      <LineChart
        chartRef="agAGSX"
        :dataUrl="urls.agsx"
        nameDateField="date"
        :namesValueFields=valueFields.agsxChart>
      </LineChart>
    </ChartContainer>
  </div>
</template>

<script>
import axios from 'axios';
import ChartContainer from '@/components/ChartContainer.vue';
import LineChart from '@/components/charts/LineChart.vue';

export default {
  name: 'AgPage',
  components: {
    ChartContainer,
    LineChart,
  },
  data: function dataLoader() {
    return {
      wkn: this.$route.params.wkn,
      company: {},
      header: '',
      urls: {
        ag: `${process.env.VUE_APP_STATS_URL}/api/ag/${this.$route.params.wkn}/chart`,
        depot: `${process.env.VUE_APP_STATS_URL}/api/ag/${this.$route.params.wkn}/depot`,
        order: `${process.env.VUE_APP_STATS_URL}/api/ag/${this.$route.params.wkn}/order`,
        activity: `${process.env.VUE_APP_STATS_URL}/api/ag/${this.$route.params.wkn}/activity`,
        agsx: `${process.env.VUE_APP_STATS_URL}/api/ag/${this.$route.params.wkn}/agsx`,
      },
      valueFields: {
        agChart: [
          {
            valueName: 'kurs',
            label: 'Kurs',
            color: '#0000ff', // blue
            colorToolTipLabel: '#fff', // white
          },
          {
            valueName: 'bw',
            label: 'Buchwert/Aktie',
            color: '#008000', // green
            colorToolTipLabel: '#fff', // white
          },
        ],
        depotChart: [
          {
            valueName: 'sharesSum',
            label: 'Aktien',
            color: '#0000ff', // blue
            colorToolTipLabel: '#fff', // white
          },
          {
            valueName: 'bondSum',
            label: 'Anleihen',
            color: '#008000', // green
            colorToolTipLabel: '#fff', // white
          },
          {
            valueName: 'creditSum',
            label: 'Kredite',
            color: '#FF0000', // red
            colorToolTipLabel: '#000', // black
          },
          {
            valueName: 'certSum',
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
            valueName: 'sellSum',
            label: 'Sells',
            color: '#FF0000', // red
            colorToolTipLabel: '#000', // black
          },
          {
            valueName: 'buySum',
            label: 'Buys',
            color: '#008000', // green
            colorToolTipLabel: '#fff', // white
          },
        ],
        activityChart: [
          {
            valueName: 'activity',
            label: 'Aktivität',
            color: '#0000ff', // blue
            colorToolTipLabel: '#fff', // white
          },
        ],
        agsxChart: [
          {
            valueName: 'agsxP',
            label: 'AGSX-P.',
            color: '#0000ff', // blue
            colorToolTipLabel: '#fff', // white
          },
        ],
      },
    };
  },
  created() {
    this.checkCompany(this.$route.params.wkn);
  },
  methods: {
    checkCompany: function check(wkn) {
      axios.get(`${process.env.VUE_APP_STATS_URL}/api/ag/${wkn}`).then((result) => {
        if (result.data === null) {
          this.$route.push({
            name: 'notFound',
          });
        } else {
          this.company = result.data;
          this.header = `${result.data.name} (#${result.data.wkn})`;
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
