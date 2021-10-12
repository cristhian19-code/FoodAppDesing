<template>
  <div class="contenido bg-primary">
    <BodyVue />
    <TrolleyVue />
  </div>
</template>

<script>
import BodyVue from '../components/Body.vue'
import TrolleyVue from '../components/Trolley.vue'
export default {
  name: 'Home',
  components:{
    BodyVue,
    TrolleyVue
  }
}
</script>
<style>
  .contenido{
    height: 100%;
    display: flex;
  }
</style>
