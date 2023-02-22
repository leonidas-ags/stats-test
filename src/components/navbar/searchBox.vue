<template>
  <b-nav-form>
    <div class="row">
      <b-form-input size="sm" placeholder="Suche AG / WKN / CEO" v-model.trim="searchString">
        Suche
      </b-form-input>
      <b-dropdown id="resultDrop" right hide>
        <b-dropdown-header v-if="queryList.length === 0">Nix gefunden!</b-dropdown-header>
        <b-dropdown-item v-else v-for="res in queryList" :key="res.id">
          <router-link
          :to="{name: 'ag', params: {wkn: res.wkn}}">
            #{{res.wkn}} {{res.name}} - {{res.ceo}}
          </router-link>
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <!--
    <div class="row" id="responseBox" v-if="queryList.length > 2">
      <ul class="list" >
        <li v-for="res in queryList" :key="res.id">
          <router-link
          :to="{name: 'ag', params: {wkn: res.wkn}}">
            #{{res.wkn}} {{res.name}} - {{res.ceo}}
          </router-link>
        </li>
      </ul>

    </div>
    -->
  </b-nav-form>

</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchBox',
  data: function dataLoader() {
    return {
      searchString: '',
      apiUrl: `${process.env.VUE_APP_STATS_URL}/api/search`,
      apiLoaded: 0,
      queryList: [],
    };
  },
  watch: {
    searchString: function validateSearch(val) {
      if (val.length > 2 && val.length < 20 && this.apiLoaded < 200) {
        this.getList();
      }
    },
  },
  methods: {
    getList() {
      axios.get(`${process.env.VUE_APP_STATS_URL}/api/search/ag`, { params: { query: this.searchString } }).then((res) => {
        console.log(res.data);
        this.apiLoaded += 1;
        this.queryList = res.data;
      });
    },
  },
};
</script>
