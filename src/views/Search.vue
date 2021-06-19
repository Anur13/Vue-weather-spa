<template>
  <div>
    <WeatherForm @getCity="getCityInfo" />
    <ul v-if="!isOnDetails">
      <DetailsItem v-for="item in info" :key="item.name" :city="item" />
    </ul>
    <CityInfo v-else />
  </div>
</template>

<script>
import CityInfo from '@/components/CitiesWeather/CityInfo'
import { getCities } from '../utils/weatherApi'
import DetailsItem from '@/components/WeatherSearchDetails/DetailsItem'
import WeatherForm from '@/components/WeatherSearchDetails/WeatherForm'
export default {
  name: 'Search',
  components: {
    DetailsItem,
    WeatherForm,
    CityInfo
  },
  data() {
    return {
      city: '',
      info: []
    }
  },
  methods: {
    async getCityInfo(input) {
      this.city = input
      if (this.city.length !== 0) {
        const data = await getCities(input)
        this.info = [...data]
      }
    }
  },
  computed: {
    isOnDetails() {
      return this.$route.query.city !== undefined ? true : false
    }
  },
  watch: {
    city(val) {
      if (val === '') this.$router.push({ path: '/search' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
