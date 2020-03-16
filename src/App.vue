<template>
  <div id="app">
    <Header/>
    <Sidebar/>
    <Posts/>
    <ChatButton/>

  </div>
</template>

<script>
import Header from './components/Header.vue' 
import Sidebar from './Sidebar'
import Posts from './Posts'
import ChatButton from './ChatButton'
export default {
  name: 'App',
  components:{
    Header,
    Sidebar,
    Posts,
    ChatButton,
  },
  data () {
    return {
    }

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  h1{
    color:#444;
    font-weight: normal;
    text-align:center;
  }
</style>
