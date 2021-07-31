<template>
    <div class="restaurant">
        <img :src="url" alt="">
        <div class="description">
            <p>{{name}}</p>
            <p>{{location}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        url: String,
        name: String,
        location: String
    }
}
</script>

<style>
.restaurant img{
    height: 110px;
    width: 100%;
    border-radius: 20px 20px 30px 30px;
}

.restaurant{
    width: 250px;
    background-color: white;
    border-radius: 20px;
    border: none;
}

.description{
    padding: 0 10px;
    display: inline-block;
}

.description p{
    margin: 10px;
}

</style>