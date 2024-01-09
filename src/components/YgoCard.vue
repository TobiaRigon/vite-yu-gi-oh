<script >


export default {
    name: "YgoCard",
    props: {
        info: Object
    },
}


</script>

<template>
    <div>
        <img :src="info.card_images[0].image_url" alt="">
        <h3>{{ info.name }}</h3>
        <h4>{{ info.archetype }}</h4>
    </div>
</template>

<style scoped>
div {
    margin: 5px;
    background-color: orange;
    text-align: center;
    min-height: 350px;

    img {
        width: 100%;
    }

    h3 {
        color: white;
    }

    h4 {
        color: rgb(44, 28, 0);
        padding-bottom: 15px;
    }
}
</style>