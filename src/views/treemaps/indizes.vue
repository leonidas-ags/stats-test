<template>
<div id="treemapPage">
  <b-jumbotron header="TreeMap aller aktuellen Indizes"></b-jumbotron>
  <TreeMap indizes></TreeMap>
</div>
</template>

<script>
import TreeMap from '@/components/charts/TreeMap.vue';

export default {
  name: 'treemapIndizes',
  components: {
    TreeMap,
  },
};
</script>
