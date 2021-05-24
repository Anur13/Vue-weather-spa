<template>
  <div class="home">
    <CitiesWeatherList :cities="cities" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getHomeCities } from '../utils/weatherApi'
import CitiesWeatherList from '@/components/CitiesWeather/CitiesWeatherList'
export default {
  name: 'Home',
  components: {
    CitiesWeatherList
  },
  data() {
    return {
      cities: []
    }
  },
  async created() {
    const list = await getHomeCities()
    this.cities = [...list]
  }
}
</script>
