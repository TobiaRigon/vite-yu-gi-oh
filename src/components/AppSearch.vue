<script >
import axios from 'axios';
import { store } from '../store';

export default {
    name: "AppSearch",


    data() {
        return {
            store,
        }
    },

    mounted() {

        axios
            .get(store.arcURL)

            .then((res) => {
                const archetypes = res.data.slice(0, 15).map(item => item.archetype_name);
                store.archetypes = archetypes;
                console.log(archetypes);
            })
            .catch((err) => {
                console.log('Errori', err);
            });
    },

};



</script>

<template>
    <select name="select-status" id="" v-model="store.searchArchetype">
        <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype">
            {{ archetype }}
        </option>
    </select>
</template>

<style scoped></style>