<template>
  <div id="app">
    <CustomNavbar>
      <router-view/>
    </CustomNavbar>
  </div>
</template>

<script>
import CustomNavbar from '@/components/navbar/navbar.vue';

export default {
  name: 'app',
  components: {
    CustomNavbar,
  },
};
</script>
