<template>
  <div class='w'>
    <svg></svg>
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
      this.draw()
    },
    methods: {
      draw () {
        const svg = d3.select(this.$el)
          .select('svg')
          .attr('width', width + 'px')
          .attr('height', height + 'px')
        const linear = d3.scaleLinear()
          .domain([0, this.max])
          .range([0, this.width])
          .clamp(true)

        const axis = d3.axisTop(linear)

        svg.selectAll('rect')
          .data(this.dataset)
          .enter()
          .append('rect')
          .attr('x', 0)
          .attr('y', function (d, i) {
            return i * 22 + margin.top
          })
          .attr('width', function (d) {
            return linear(d)
          })
          .attr('height', 20)
        svg.append('g')
          .attr('transform', 'translate(0,30)')
          .call(axis)
      }
    }
  }
</script>

<style lang='stylus' scoped=''>
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

  svg {
    padding: 5px
    rect {
      fill: cadetblue
      &:hover {
        fill: indianred
      }
    }
  }

.axis path,
.axis line {
  fill: none;
  stroke: black;
  shape-rendering: crispEdges;
}

.axis text {
  font-family: sans-serif;
  font-size: 11px;
}
</style>
