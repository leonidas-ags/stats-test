<template>
<div id="treemapPage">
  <b-jumbotron header="TreeMap aller aktuellen AGs"></b-jumbotron>
  <TreeMap ags></TreeMap>
</div>
</template>

<script>
import TreeMap from '@/components/charts/TreeMap.vue';

export default {
  name: 'treemapAgs',
  components: {
    TreeMap,
  },
};
</script>
