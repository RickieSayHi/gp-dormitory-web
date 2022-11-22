import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import i18n from './lang'; // Internationalization
// import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

// Vue.use(Avue);
// Vue.use(AVUE,{
//   size:'',
//   tableSize:'',
//   formSize:'',
//   appendToBody:true,
//   modalAppendToBody:true,
//   menuType:'',
//   qiniu:{
//     AK: '',
//     SK: '',
//     scope: '',
//     url: '',
//     deadline: 1
//   },
//   ali:{
//     region: '',
//     endpoint: '',
//     accessKeyId: '',
//     accessKeySecret: '',
//     bucket: '',
//   },
//   theme:'',
//   canvas:{
//     text: 'avuejs.com',
//     fontFamily: 'microsoft yahei',
//     color: "#999",
//     fontSize: 16,
//     opacity: 100,
//     bottom: 10,
//     right: 10,
//     ratio: 1
//   }
// });

Vue.use(window.AVUE, {
  size: 'small',
  tableSize: 'small',
  calcHeight: 65,
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
