<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-navbar-brand href="#">AG-Spiel Statistiken³</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item :to="{name: 'market'}">
            <b-icon-globe></b-icon-globe> Markt
          </b-nav-item>
          <b-nav-item-dropdown :to="{name: 'premium'}" right>
            <template slot="button-content">
              <b-icon-map></b-icon-map> TreeMaps
            </template>
            <b-dropdown-item :to="{name: 'agsTree'}">AGs</b-dropdown-item>
            <b-dropdown-item :to="{name: 'indizesTree'}">Indizes</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :to="{name: 'indizes'}">
            <b-icon-diagram3></b-icon-diagram3> Indizes
          </b-nav-item>
          <b-nav-item :to="{name: 'wkns'}">
            <b-icon-building></b-icon-building> AGs
          </b-nav-item>
        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

    <b-container fluid="xl" class="fp">
      <slot>

      </slot>
    </b-container>
    <CustomFooter></CustomFooter>
  </div>
</template>

<script>
import CustomFooter from '@/components/navbar/footer.vue';

export default {
  name: 'CustomNavbar',
  components: {
    CustomFooter,
  },
};
</script>

<style scoped>
  .fp {
    padding-bottom: 70px;
  }
</style>
