<template>
    <div class="offer-food">
        <div class="offer-img">
            <img :src="url" alt="" height="90" width="90">
        </div>
        <dir class="offer-content">
            <p class="name">{{name}}</p>
            <div class="content-price">
                <p class="price">${{price}}</p>
                <button @click="AddTrolley({
                    url,
                    name,
                    price,
                    cant: 1
                })" class="btn-plus" type="button"><i class="el-icon-plus"></i></button>
            </div>
        </dir>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props:{
        url: String,
        name: String,
        price: Number
    },
    methods: {
        ...mapActions(['AddTrolley']),
    },
}
</script>

<style>
.offer-food{
    background: white;
    border: none;
    height: 140px;
    width: 180px;
    border-radius: 30px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}

.offer-content{
    padding: 0;
    margin-top: 55px;
    text-align: center;
}

.offer-img{
    position: absolute;
    height: 115px;
    width: 115px;
    display: flex;
    justify-content: center;
    transform: translate(30%,-70%);
    align-items: center;
    background-color: white;
    border-radius: 50%;
}

.price,.name{
    margin: 8px;
}

.name{
    font-size: 15px;
    color: #515A5A;
    font-weight: bold;
}

.price{
    font-size: 17px;
    font-weight: bold;
}
</style>