<template>
  <div>
    <my-header></my-header>
    <list></list>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import List from './components/List'

export default {
  components: {
    MyHeader,
    List
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background: rgb(245, 248, 250);
}

a {
  color: #555;
  background-color: transparent;
  text-decoration: none;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
