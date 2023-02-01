<template>
  <div id="app">
    <Header />
    <Reservation />
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import Reservation from './components/Reservation.vue'

// vue
/* Set up using Vue 2 */
import Vue from 'vue'
import App from './App'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faCalendarCheck, faClock)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
//-- vue end

export default {
  name: 'App',
  components: {
    Header ,
    Footer ,
    Reservation
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
</style>
