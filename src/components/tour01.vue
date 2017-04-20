<template>
  <div class="w">
    <p></p>
    <p></p>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: '',
    data () {
      return {}
    },
    mounted () {
      this.calculatePath()
    },
    methods: {
      calculatePath () {
        let p = d3.select(this.$el)
          .selectAll('p')
          .text('hello')
        p.style('color', '#76BF8A')
          .style('font-size', '24px')
          .style('border', 'solid red 1px')
          .style('width', '10em')
      }
    }
  }
</script>

<style lang='stylus' scoped>
</style>
