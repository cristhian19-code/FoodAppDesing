<template>
  <div class="restaurant">
    <img :src="url" alt="" />
    <div class="description px-3">
      <p class="fw-bold my-2">{{ name }}</p>
      <p><i class="el-icon-location"></i>{{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    name: String,
    location: String,
  },
};
</script>

<style>
.restaurant img {
  height: 140px;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
}

.restaurant {
  width: 280px;
  background-color: white;
  border-radius: 20px;
  border: none;
}

.description {
  padding: 0 10px;
  display: inline-block;
}
</style>
