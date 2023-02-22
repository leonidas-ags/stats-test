<template>
  <b-navbar fixed="bottom" type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-text>
        Copyright © AG-Spiel-Statistiken {{ new Date().getFullYear() }}
      </b-nav-text>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'customFooter',
};
</script>
