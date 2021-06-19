<template>
  <ul>
    <CitiesWeatherItem v-for="city in cities" :city="city" :key="city.location.name" />
  </ul>
</template>

<script>
import CitiesWeatherItem from '@/components/CitiesWeather/CitiesWeatherItem'
export default {
  components: { CitiesWeatherItem },
  props: {
    cities: {
      type: Array
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
</style>
