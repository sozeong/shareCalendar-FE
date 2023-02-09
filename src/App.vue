<template>
  <div id="app">
	<Header />
    <Contents />
	<Footer />
  </div>
</template>

<script>
// page
import Header from './components/common/Header.vue'
import Contents from './components/common/Contents.vue'
import Footer from './components/common/Footer.vue'

// vue
/* Set up using Vue 2 */
import Vue from 'vue'
import App from './App'

//-- vue end

export default {
  name: 'App',
  components: {
    Header ,
    Footer ,
    Contents
  }
}
</script>

<style>
	#app {
	  font-family: Avenir, Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  margin: 0 auto;
	  width: 450px;
	  position: relative;
	  min-height: 100%;
	  background-color: #ffffff;
	}
	
	body {background-color: #f3f3f3;}
	
	html, body {
	  height: 100%;
	}
	
	.pd5{padding: 5px;}
	.mt10{margin-top: 10px;}
	.mb10{margin-bottom: 10px;}
	.fr{float: right;}
</style>
