<template>
  <div class="w">
    <ul>
      <li v-for="item in items"><a v-bind:href="'/#/'+item" target="_blank">{{ item }}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        items: ['tour01', 'tour02', 'tour03', 'tour04', 'tour05'],
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 30px;
    display: block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
