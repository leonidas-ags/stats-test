<template>
  <div id='indizes'>
    <b-row fluid='xl' align='center'>
      <b-col>
        <b-jumbotron
          header='Auflistung aller Indizes in der DB'
          lead='**Die Suchfunktion reagiert aufgrund der Datenmenge leicht verzögert**'>
        </b-jumbotron>
      </b-col>
    </b-row>
    <CustomTable
      tableId='IndexTable'
      searchPlaceholder='Suche nach Index ...'
      endpoint='/api/index/'
      :columns='columns'
      indexLink>
      <template v-slot:cell(id)='data'>
        <router-link :to='{name: "wkns", params: {wkn: data.value}}'>{{data.value}}</router-link>
      </template>
    </CustomTable>
  </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

export default {
  name: 'Indizes',
  components: {
    CustomTable,
  },
  data: function dataLoader() {
    return {
      columns: [
        {
          label: 'ID',
          key: 'id',
          sortable: true,
        },
        {
          label: 'Name',
          key: 'name',
          sortable: true,
        },
        {
          label: 'Marktkapitalisierung',
          key: 'boersenwert',
          sortable: true,
          formatter: (row) => Number(row).toLocaleString(),
        },
        {
          label: 'Buchwert',
          key: 'buchwert',
          sortable: true,
          formatter: (row) => Number(row).toLocaleString(),
        },
        {
          label: 'Aktien',
          key: 'aktien',
          sortable: true,
          formatter: (row) => Number(row).toLocaleString(),
        },
        {
          label: 'Anleihen',
          key: 'anleihen',
          sortable: true,
          formatter: (row) => Number(row).toLocaleString(),
        },
        {
          label: 'Kredite',
          key: 'kredite',
          sortable: true,
          formatter: (row) => Number(row).toLocaleString(),
        },
        {
          label: 'Cash',
          key: 'bargeld',
          sortable: true,
          formatter: (row) => Number(row).toLocaleString(),
        },
      ],
    };
  },
};
</script>
