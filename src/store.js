import { reactive } from 'vue'

export const store = reactive({
    cardList: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    arcURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',

    // loading: true,
    searchArchetype: "",
    archetypes: [],
});