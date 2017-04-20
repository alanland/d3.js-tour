<template>
  <div class="w">
    <div>dataset: {{ dataset }}</div>
    <div>min: {{ min }}</div>
    <div>max: {{ max }}</div>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  const margin = {top: 40, right: 40, bottom: 40, left: 40}
  const width = 960 - margin.left - margin.right
  const height = 500 - margin.top - margin.bottom

  export default {
    name: 'hello',
    data () {
      return {
        dataset1: [88, 9, 33, 43, 75, 67],
        dataset: [13.3, 3, 8, 9, 6, 8, 3, 22, 1.8, 9.8],
        min: d3.min(this.dataset),
        max: d3.max(this.dataset),
        width: width,
        height: height
      }
    },
    mounted () {
      this.calculatePath()
    },
    methods: {
      calculatePath () {
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
