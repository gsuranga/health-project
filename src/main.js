import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button, Container, Header, Aside, Main, Footer, Menu, Submenu, MenuItem, MenuItemGroup, Tabs, TabPane, Form, FormItem, Input, Select, Option, DatePicker, Checkbox, Col, Row, Divider, Upload, Link, Tag, Alert, Card, Dialog } from 'element-ui'
import ElementUI from 'element-ui';
// import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale/lang/en'

// locale.use(lang);

import '@/assets/styles/overwrite_default.css'

Vue.use(ElementUI, {locale});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
