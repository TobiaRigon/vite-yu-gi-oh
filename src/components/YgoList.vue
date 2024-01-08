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
    <div class="container">
        <div class="col" v-for="card in store.cardList" :key="card.id">
            <YgoCard :info="card" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {

    padding: 15px 0;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;

    .col {
        width: calc(100% / 5);

    }


}
</style>