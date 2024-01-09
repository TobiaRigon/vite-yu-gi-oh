<script >
import { store } from '../store';

export default {
    name: "AppSearch",

    data() {
        return {
            store,
        }
    }

}


</script>

<template>
    <select name="select-status" id="" v-model="store.searchArchetype">

        <option value="Alien">Alien</option>
        <option value="Infernoble Arms">Infernoble Arms</option>

    </select>
</template>

<style scoped></style>