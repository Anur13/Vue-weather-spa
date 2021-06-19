<template>
  <div>
    <router-link :to="getRoute">{{ city.name }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object
    }
  },
  computed: {
    getRoute() {
      return { path: `search`, query: { city: this.city.name } }

    }
  }
}
</script>

<style lang="scss" scoped></style>
