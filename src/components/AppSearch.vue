<script >
import { store } from '../store';

export default {
    name: "AppSearch",


    data() {
        return {
            store,
        }
    }

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