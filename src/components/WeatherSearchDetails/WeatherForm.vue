<template>
  <div>
    <form action="">
      <input v-debounce:300ms="getCity" v-model="input" type="text" />
    </form>
  </div>
</template>

<script>
export default {
 name: "Search",
 data(){
  return{
   input: ''
  }
 },
  methods: {
    getCity() {
      this.$emit('getCity', this.input)
    }
  }
}
</script>

<style lang="scss" scoped></style>
