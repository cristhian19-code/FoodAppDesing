<template>
  <div class="container">
    <NavbarVue />
    <BodyVue />
    <TrolleyVue />
  </div>
</template>

<script>
import BodyVue from '../components/Body.vue'
import NavbarVue from '../components/Navbar.vue'
import TrolleyVue from '../components/Trolley.vue'
export default {
  name: 'Home',
  components:{
    NavbarVue,
    BodyVue,
    TrolleyVue
  }
}
</script>
<style>
  .container{
    height: 100%;
    display: flex;
    background-image: linear-gradient(225deg, #e2ffff 0, #e0ffff 7.14%, #deffff 14.29%, #ddffff 21.43%, #ddf7f8 28.57%, #dceeed 35.71%, #dae3e2 42.86%, #d8d8d8 50%, #d5cdd0 57.14%, #d1c3c9 64.29%, #ccb9c5 71.43%, #c7b2c2 78.57%, #c0abc0 85.71%, #b9a6c0 92.86%, #b2a1c0 100%);;
  }
</style>
