<template>
  <div class="w">
  </div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: 'hello',
    data () {
      return {
        dataset: [88, 9, 33, 43, 75, 67]
      }
    },
    mounted () {
      this.calculatePath()
    },
    methods: {
      calculatePath () {
        const svg = d3.select(this.$el)
          .append('svg')
          .attr('width', '400px')
          .attr('height', '300px')
        svg.selectAll('rect')
          .data(this.dataset)
          .enter()
          .append('rect')
          .attr('x', 10)
          .attr('y', function (d, i) {
            return i * 22
          })
          .attr('width', function (d) {
            return d * 2
          })
          .attr('height', 20)
      }
    }
  }
</script>

<style lang='stylus'>
  svg rect {
    fill: cadetblue
    &:hover {
      fill: indianred
    }
  }
</style>
