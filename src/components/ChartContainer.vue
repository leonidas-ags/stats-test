<template>
    <div>
        <b-card class="mb-2 lg">
            <b-card-header
              header-bg-variant="secondary"
              header-text-variant="white"
              v-b-toggle=containerID>
              {{title}}
            </b-card-header>
            <b-collapse :id=containerID visible>
                <b-card-body bg-variant="light">
                    <slot>

                    </slot>
                </b-card-body>
            </b-collapse>
            <b-card-footer v-if="footer">
                <em>{{footer}}</em>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'ChartContainer',
  props: {
    containerID: String,
    title: String,
    footer: String,
  },
};
</script>
