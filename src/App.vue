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
      let myURL = store.apiURL;

      if (store.searchArchetype) {
        myURL += `&archetype=${store.searchArchetype}`; // Fix here
      }

      axios
        .get(myURL) // Fix here
        .then((res) => {
          console.log(store.searchArchetype)
          store.cardList = res.data.data;
        })
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
  <AppSearch @PerformFilter="getCard" />
  <YgoList />
</template>

<style lang="scss" ></style>
