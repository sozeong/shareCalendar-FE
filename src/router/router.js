import Vue from "vue";
import VueRouter from 'vue-router';
import Reservation from '../components/Reservation.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter);

const routersss = new VueRouter({
  mode: "history",
  routes: [
    {
		path: "/",
		component: HelloWorld
    },
    {
      	path: "/res",
    	component: Reservation
    }
  ]
});

export default routersss;