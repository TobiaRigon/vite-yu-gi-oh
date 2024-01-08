<script >
import YgoCard from './YgoCard.vue'
import { store } from '../store';


export default {
    name: "YgoList",

    components: {
        YgoCard,
    },

    data() {
        return {
            store,
        }
    }
}


</script>

<template>
    <div>
        Alien
    </div>
    <div class="container">

        <div class="foundbar">
            Found 20 Cards
        </div>

        <div class="col" v-for="card in store.cardList" :key="card.id">
            <YgoCard :info="card" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {


    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;

    .foundbar {
        color: white;
        width: 100%;
        background-color: rgb(31, 31, 31);
        line-height: 40px;
        height: 40px;
    }

    .col {
        width: calc(100% / 5);

    }


}
</style>