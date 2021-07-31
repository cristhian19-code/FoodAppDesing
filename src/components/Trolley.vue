<template>
  <div class="trolley">
      <div class="user">
        <img class="avatar" src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" height="50" width="50" />
        <h3 class="name-user">Christian Ricardo</h3>
      </div>
      <h3 class="mx-2">My Order</h3>
      <div class="order">
        <ul>
          <li v-for="(item,index) in carrito" :key="index">
            <img :src="item.url" alt="" height="30" width="30">
            <p class="nombre-trolley">{{item.name}}</p>
            <b class="mx-2">{{item.cant}}</b>
            <p class="mx-2">{{(item.price * item.cant).toFixed(1)}}</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    ...mapState(['carrito']),
  }
}
</script>

<style>
.trolley{
    width: 20%;
}

.user{
    display: flex;
    padding: 20px 0;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
}

.avatar{
    border-radius: 50%;
}

ul{
  list-style: none;
  padding: 10px;
  
}

li{
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 10px;
}

.nombre-trolley{
  width: 130px;
}

.mx-2{
  margin: 0 10px;
}

</style>