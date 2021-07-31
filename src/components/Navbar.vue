<template>
   <div class="navbar">
       <button class="route-nav"><i class="el-icon-house"></i></button>
       <button class="route-nav"><i class="el-icon-star-off"></i></button>
       <button class="route-nav"><i class="el-icon-notebook-2"></i></button>
   </div>
</template>

<script>
export default {
}
</script>

<style>
    .navbar{
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 10%;
        opacity: .9;
        background-image: linear-gradient(225deg, #dcffff 0, #d9ffff 7.14%, #d8ffff 14.29%, #d7fafd 21.43%, #d6f1f2 28.57%, #d6e8e7 35.71%, #d4dddc 42.86%, #d2d2d2 50%, #cfc7ca 57.14%, #cbbdc3 64.29%, #c6b4bf 71.43%, #c1acbc 78.57%, #baa5ba 85.71%, #b4a0ba 92.86%, #ac9cba 100%);
        border-radius: 0 40px 40px 0;
    }

    .route-nav{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 5px 10px 10px 0px rgba(184,184,184,.3);
        color: #2E4053 ;
        font-size: 21px;
        border: none;
        margin: 10px 0;
        outline: none;
        cursor: pointer;
    }

    .route-nav:hover{
        transform: scale(1.1);
        transition: .5s;
    }
</style>