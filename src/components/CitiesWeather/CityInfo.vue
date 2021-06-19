<template>
  <article v-if="loaded">
    <div>
      <img :src="getIcon" alt="" />
    </div>

    <ul>
      <li>{{ city.location.name }}</li>
      <li>{{ city.location.localtime }}</li>
      <li>Temperature {{ city.current.temp_c }}&#176;</li>

      <li>Feels like {{ city.current.feelslike_c }}&#176;</li>
    </ul>
  </article>
</template>

<script>
import { getCityInfo } from '../../utils/weatherApi'
export default {
  name: 'CityDetails',
  data() {
    return {
      city: {},
      loaded: false,
    }
  },
  computed: {
    getIcon() {
      return this?.city?.current?.condition?.icon
    }
  },
  async beforeCreate() {
    const data = await getCityInfo(this.$route.query.city)
    console.log(data)
    this.city = { ...data }
    this.loaded = true

  }
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
}
article {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding: 10px;
}
</style>
