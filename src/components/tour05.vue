<template>
  <div class="w">
    <div>
      <div><span>dataset:</span> {{ dataset }}</div>
      <div><span>min:</span> {{ min }}</div>
      <div><span>max:</span> {{ max }}</div>
      <pre>linear = d3.scaleLinear()
        .domain([this.min, this.max])
        .range([0, this.width])</pre>
      <div><span>linear(1):</span> {{ linear(1) }}</div>
      <div><span>linear(10):</span> {{ linear(10) }}</div>
      <div><span>linear(100):</span> {{ linear(100) }}</div>
    </div>
    <div>
      <div>No Scale</div>
      <svg class="noScale"></svg>
    </div>
    <div>
      <div>Use Scale</div>
      <svg class="scale"></svg>
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  const margin = {top: 40, right: 40, bottom: 40, left: 40}
  const width = 400 - margin.left - margin.right
  const height = 300 - margin.top - margin.bottom
  const dataset = [88, 9, 33, 43, 75, 67]

  export default {
    name: 'hello',
    data () {
      return {
        dataset: dataset,
        width: width,
        height: height,
        min: d3.min(dataset),
        max: d3.max(dataset)
      }
    },
    mounted () {
      this.drawNoScale()
      this.drawScale()
      window.d3 = d3
    },
    methods: {
      linear (val) {
        let linear = d3.scaleLinear()
          .domain([this.min, this.max])
          .range([0, this.width])
          .clamp(true)
        return linear(val)
      },
      drawNoScale () {
        const svg = d3.select(this.$el)
          .select('svg.noScale')
          .attr('width', width + 'px')
          .attr('height', height + 'px')
        svg.selectAll('rect')
          .data(this.dataset)
          .enter()
          .append('rect')
          .attr('x', 10)
          .attr('y', function (d, i) {
            return i * 22
          })
          .attr('width', function (d) {
            return d
          })
          .attr('height', 20)
      },
      drawScale () {
        const svg = d3.select(this.$el)
          .select('svg.scale')
          .attr('width', width + 'px')
          .attr('height', height + 'px')
        const linear = d3.scaleLinear()
          .domain([0, this.max])
          .range([0, this.width])
          .clamp(true)

        svg.selectAll('rect')
          .data(this.dataset)
          .enter()
          .append('rect')
          .attr('x', 10)
          .attr('y', function (d, i) {
            return i * 22
          })
          .attr('width', function (d) {
            return linear(d)
          })
          .attr('height', 20)
      }
    }
  }
</script>

<style lang='stylus' scoped="">
  .w {
    padding: 10px 100px
    text-align: left
  }

  .w > div {
    float: left
    margin: 1em
    width: 350px
    height: 300px
    border: dashed cadetblue 1px
  }

  div span {
    text-align: right
    margin: 5px
    border-bottom: solid 1px
    width: 100px
    display: inline-block
  }

  svg rect {
    fill: cadetblue
    &:hover {
      fill: indianred
    }
  }
</style>
