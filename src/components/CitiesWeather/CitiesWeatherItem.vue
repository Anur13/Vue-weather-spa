<template>
  <article :style="getBorderColor">
    <div>
      <img :src="getIcon" alt="" />
      <ul>
        <li>Temperature {{ city.current.temp_c }}&#176;</li>
        <li>Feels like {{ city.current.feelslike_c }}&#176;</li>
      </ul>
    </div>
    <ul>
      <li>{{ city.location.name }}</li>
      <li>{{ city.location.localtime }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    city: {
      type: Object
    }
  },

  computed: {
    getIcon() {
      return this.city.current.condition.icon
    },
    getBorderColor() {
      if (this.city.current.condition.text === 'Sunny') {
        return 'border-color: tomato'
      }
      if (this.city.current.condition.text.includes('rain')) {
        return 'border-color: blue'
      }
      return 'border-color: grey'
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  padding: 0;
  justify-content: space-between;
}
article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px grey solid;
  border-radius: 4px;
  padding: 10px;
  width: 230px;
}
div {
  width: 80%;
}
</style>
