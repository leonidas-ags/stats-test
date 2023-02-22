<template>
  <div id='tableContent'>
    <b-row fluid='xl' align='center'>
      <b-col>
        <b-form-input
          type='search'
          v-model='filter'
          :placeholder='searchPlaceholder'
          id='filterInput' class="mb-5">
        </b-form-input>
      </b-col>
    </b-row>

    <b-row fluid='xl' align='center'>
      <b-col>
        <b-pagination
          v-model='currentPage'
          :total-rows='rows'
          :per-page='perPage'
          :aria-controls='tableId'
          align='center'>
        </b-pagination>
      </b-col>
    </b-row>

    <b-row>
      <b-col align="start">
        <p class='mt-3'>Aktuelle Seite: {{ currentPage }}</p>
      </b-col>
      <b-col align="center">
        <p class='mt-3'>{{ perPage }} pro Seite</p>
      </b-col>
      <b-col align="end">
        <p class='mt-3'>Insgesamt {{ items.length }} Seiten</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table striped hover responsive small foot-clone no-footer-sorting dark
          head-variant='light'
          stacked='md'
          :filter='filter'
          :id='tableId'
          :items='items'
          :fields='columns'
          :per-page='perPage'
          :current-page='currentPage'>
            <template v-if="agLink" v-slot:cell(wkn)="data">
              <router-link
                tag="a"
                class="customLink"
                :to="{'name': 'ag', 'params': {'wkn': data.value}}">
                  {{data.value}}
              </router-link>
            </template>
            <template v-if="indexLink" v-slot:cell(id)="data">
              <router-link tag="a" class="customLink"
                :to="{'name': 'index', 'params': {'id': data.value}}">
                {{data.value}}
              </router-link>
            </template>
        </b-table>
      </b-col>
    </b-row>

    <b-row>
      <b-col align="start">
        <p class='mt-3'>Aktuelle Seite: {{ currentPage }}</p>
      </b-col>
      <b-col align="center">
        <p class='mt-3'>{{ perPage }} pro Seite</p>
      </b-col>
      <b-col align="end">
        <p class='mt-3'>Insgesamt {{ items.length }} Seiten</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-pagination
          v-model='currentPage'
          :total-rows='rows'
          :per-page='perPage'
          :aria-controls='tableId'
          align='center'>
        </b-pagination>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CustomTable',
  props: {
    searchPlaceholder: String,
    tableId: String,
    endpoint: String,
    columns: Array,
    agLink: Boolean,
    indexLink: Boolean,
  },
  data: function dataLoader() {
    return {
      filter: '',
      currentPage: 1,
      perPage: 25,
      items: [],
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_STATS_URL}${this.endpoint}`).then((result) => {
      this.items = result.data;
    });
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style scoped>
.customLink {
  color:aquamarine
}
</style>
