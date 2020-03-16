<template>
<<<<<<< HEAD
  <div id="app">
    <Header/>
    <Sidebar/>
    <Posts/>
    <ChatButton/>

=======
  <div id="app"> 
    <h1> conNectUs </h1>  
    <app-header v-bind:title="msg"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
>>>>>>> a5c899038d220c31ce0c0516eca19707106c882b
  </div>
</template>

<script>
<<<<<<< HEAD
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

=======
//Registering components Locally
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
//import PageContent from './components/PageContent.vue'
export default {
  name: 'App',
  data(){
    return {
          }
  },
  components: {
    //Registering with a name
    'app-header':Header,
    'app-footer':Footer,
    //Registering without a name
    //PageContent
>>>>>>> a5c899038d220c31ce0c0516eca19707106c882b
  }
}
</script>

<<<<<<< HEAD
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  h1{
    color:#444;
    font-weight: normal;
    text-align:center;
  }
=======
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
h1 {
  position: absolute;
  width: 259px;
  height: 72px;
  left: 32px;
  top: 9px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
}
>>>>>>> a5c899038d220c31ce0c0516eca19707106c882b
</style>
