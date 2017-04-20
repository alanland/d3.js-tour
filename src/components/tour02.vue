<template>
  <div class="w">
    <div class="datum">
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="data">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: 'hello',
    data () {
      return {
      }
    },
    mounted () {
      this.calculatePath()
    },
    methods: {
      calculatePath () {
        d3.select(this.$el)
          .select('.datum')
          .selectAll('p')
          .datum('D3.JS')
          .text(function (d, i) {
            return `${i}: ${d}`
          })
        const data = ['hello', 'd3', 'js']
        d3.select(this.$el)
          .select('.data')
          .selectAll('p')
          .data(data)
          .text(function (d, i) {
            return `${i}: ${d}`
          })
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .w > div {
    float: left
    margin: 1em
  }

  p {
    color: cadetblue
    height: 1.5em
    line-height: 1.5em
    font-size: 24px
    border: dashed indianred 1px
    width: 6em
    text-align: left
    padding-left: 1em
  }
</style>
