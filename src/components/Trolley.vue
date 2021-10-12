<template>
  <div id="sidebar" class="bg-ligth trolley">
    <div>
      <button class="menu btn btn-success py-2 px-3">
        <span>&#9776;</span>
      </button>
    </div>
    <div class="d-flex align-items-center justify-content-around">
      <h3 class="my-4 text-center">My Order</h3>
      <button class="btn btn-outline-primary" @click="ClearCart()">Clean</button>
    </div>
    <div class="order">
      <ul>
        <li class="bg-primary d-flex justify-content-around align-items-center mt-2 rounded-2 px-2 py-3 text-white" v-for="(item, index) in carrito" :key="index">
          <img :src="item.url" alt="" height="30" width="30" />
          <span>{{ item.name }}</span>
          <b class="mx-2">{{ item.cant }}</b>
          <span>S/.{{ item.price * item.cant }}</span>
        </li>
      </ul>
    </div>
    <p class="text-center">Total: S/.{{ getTotal.toFixed(2) }}</p>
    <div class="d-flex justify-content-center px-3">
      <button class="col-12 btn btn-outline-dark">Comprar</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions } from "vuex";

export default {
  data() {
      return {
          windowWidth: window.innerWidth
      }
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["getTotal"]),
  },
  methods:{
    ...mapActions(['ClearCart'])
  },
  mounted() {
      const button = document.querySelector('.menu')

      button.addEventListener('click',()=>{
        document.getElementById('sidebar').classList.toggle('active')
      })

      window.onresize = () => {
          this.windowWidth = window.innerWidth
      }
  }
};
</script>

<style scoped>
.menu{
  position: absolute;
  right: 320px;
  top: 10px;
}

#sidebar{
  position: fixed;
  height: 100%;
  background-color: white;
  color: black;
  width: 300px;
  right: -300px;
  transition: all .5s linear;
}

#sidebar.active{
  right: 0
}

ul {
  list-style: none;
  padding: 10px;
}

</style>
