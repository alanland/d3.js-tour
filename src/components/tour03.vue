<template>
  <div class="w">
    <div class="appendOne">
    </div>
    <div class="appendMore">
    </div>
    <div class="remove">
      to remove
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  export default {
    name: 'hello',
    data () {
      return {
        data: 'Welcome to Your D3.js App'.split(' ')
      }
    },
    mounted () {
      this.calculatePath()
    },
    methods: {
      calculatePath () {
        const wrapper = d3.select(this.$el)
        wrapper.select('.appendOne')
          .append('p')
          //          .selectAll('p')
          .attr('class', 'aaa')
          .text('Appended')
        wrapper.select('.appendOne')
          .insert('p')
          .text('Inserted')
        wrapper.select('.remove').remove()

        // todo not visible
        wrapper.select('.appendMore')
          .data(this.data)
          .enter()
          .append('p')
          .text(function (d, i) {
            return `${i}`
          })
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .w > div {
    float: left
    margin: 1em
    width: 100px
    height: 200px
    border: dashed cadetblue 1px
  }

  // todo css not take effect
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
