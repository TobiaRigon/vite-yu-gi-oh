<script >

import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import YgoList from './components/YgoList.vue'
import AppSearch from './components/AppSearch.vue'


// importa store
import { store } from './store';


export default {
  components: {
    AppHeader,
    YgoList,
    AppSearch,
  },

  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {
      axios
        .get(store.apiURL)
        .then((res => {
          console.log(res.data.data)
          store.cardList = res.data.data;
        }))
        .catch((err) => {
          console.log('Errori', err);
        });
    }
  },

  created() {
    this.getCard();


  }


}

</script>

<template>
  <AppHeader />
  <AppSearch />
  <YgoList />
</template>

<style lang="scss" ></style>
