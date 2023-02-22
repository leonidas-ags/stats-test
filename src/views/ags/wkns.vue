<template>
  <div id='ags'>
    <b-row fluid='xl' align='center'>
      <b-col>
        <b-jumbotron
          header='Auflistung aller AGs in der DB'
          lead='**Die Suchfunktion reagiert aufgrund der Datenmenge leicht verzögert**'>
        </b-jumbotron>
      </b-col>
    </b-row>
    <CustomTable
      tableId='AGStable'
      searchPlaceholder='Suche nach AG...'
      endpoint='/api/ag/'
      :columns='columns'
      agLink>
    </CustomTable>
  </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

export default {
  name: 'WknsPage',
  components: {
    CustomTable,
  },
  data: function dataLoader() {
    return {
      columns: [
        {
          label: 'WKN',
          key: 'wkn',
          sortable: true,
        },
        {
          label: 'Name',
          key: 'name',
          sortable: true,
        },
        {
          label: 'AG-Gründung',
          key: 'founding',
          sortable: true,
          formatter: (row) => new Date(row).toLocaleString().split(', ')[0],
          sortByFormatted: (row) => Date.parse(row),
        },
        {
          label: 'CEO',
          key: 'ceo',
          sortable: true,
        },
        {
          label: 'CEO-Registrierung',
          key: 'ceoRegister',
          sortable: true,
          formatter: (row) => new Date(row).toLocaleString().split(', ')[0],
          sortByFormatted: (row) => Date.parse(row),
        },
        {
          label: 'Gebannt',
          key: 'isBanned',
          sortable: true,
        },
        {
          label: 'Userprojekt',
          key: 'isUserproject',
          sortable: true,
        },
        {
          label: 'i.L.',
          key: 'inLiquidation',
          sortable: true,
        },
      ],
    };
  },
};
</script>
