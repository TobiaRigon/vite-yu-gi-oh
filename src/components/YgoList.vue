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
    <h1>YgoList</h1>

    <div class="container">
        <div class="col" v-for="card in store.cardList" :key="card">
            <YgoCard />
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

    .col {
        width: calc(100% / 5);
    }


}
</style>