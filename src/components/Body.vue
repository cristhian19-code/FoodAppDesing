<template>
  <div class="container-body">
        <div class="input-search">
            <input class="search" type="text" placeholder="Search">
        </div>
        <div class="types-foods">
            <div class="type-food">
                <img src="@/assets/chicken-leg.svg" alt="" height="80" width="80">
            </div>
            <div class="type-food">
                <img src="@/assets/dango.svg" alt="" height="80" width="80">
            </div>
            <div class="type-food">
                <img src="@/assets/donas.svg" alt="" height="80" width="80">
            </div>
            <div class="type-food">
                <img src="@/assets/pizza.svg" alt="" height="80" width="80">
            </div>
            <div class="type-food">
                <img src="@/assets/salad.svg" alt="" height="80" width="80">
            </div>
            <div class="type-food">
                <img src="@/assets/sushi.svg" alt="" height="80" width="80">
            </div>
        </div>
        <p class="title-best-offers text-white">Best Offers</p>
        <div class="best-offers">
            <OfferFoodVue v-for="(item) in offers" :key="item.url" :url="item.url" :name="item.name" :price="item.price"/>
        </div>
        <p class="title-best-offers text-white">Favorite Restaurants</p>
        <div class="favorite-restaurants">
            <RestaurantVue v-for="(item) in restaurants" :key="item.url" :url="item.url" :name="item.name" :location="item.location"/>
        </div>
  </div>
</template>

<script>
import OfferFoodVue from './OfferFood.vue'
import RestaurantVue from './Restaurant.vue'
export default {
    components:{
        OfferFoodVue,
        RestaurantVue
    },
    data() {
        return {
            offers: [
                {url: 'https://www.flaticon.es/premium-icon/icons/svg/3183/3183463.svg',name: 'Ensada con carne y huevo',price: 15},
                {url: 'https://www.flaticon.com/premium-icon/icons/svg/1065/1065715.svg',name: 'Ensalada con chuleta',price: 21.8},
                {url: 'https://www.flaticon.com/premium-icon/icons/svg/2276/2276931.svg',name: 'Marisco con huevo',price: 14.9},
                {url: 'https://www.flaticon.com/premium-icon/icons/svg/2515/2515249.svg',name: 'Ramen de cerdo',price: 17.5}
            ],
            restaurants: [
                {url: 'https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name: 'My Italy',location: '101 W 112th St #APT 1E'},
                {url: 'https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name: 'Mediterranean',location: '966 Lexington Ave'},
                {url: 'https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name: 'Monica',location: '7000 Kennedy Bivd E'}
            ]
        }
    },
}
</script>

<style>

.text-white{
    color: white;
}

.favorite-restaurants{
    padding: 10px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
}

.container-body{
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    overflow-y: scroll;
}


.container-body::-webkit-scrollbar{
    width: 5px;
}

.container-body::-webkit-scrollbar-button{
    display: none;
}

.container-body::-webkit-scrollbar-thumb{
    background-color: rgb(94, 94, 94);
    border-radius: 10px;
}
.container-body::-webkit-scrollbar-track{
    background-color: transparent;
}

.input-search{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}

.search{
    width: 80%;
    border-radius: 20px;
    background-color: #ECF0F1;
    border: none;
    height: 40px;
    outline: none;
    padding: 5px 20px;
}

.search::placeholder{
    padding: 5px;
}

.types-foods{
    display: flex;
    flex-wrap: nowrap;
    padding: 20px 0;
    justify-content: center;
    align-items: center;
    grid-gap: 30px;
}

.type-food{
    height: 120px;
    width: 120px;
    background-color: #ECF0F1;
    box-shadow: 8px 8px 15px 0px rgba(199,199,199,0.7);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.best-offers{
    padding: 60px 0 15px 0;
    display: flex;
    grid-gap: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-price{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.btn-plus{
    color: white;
    background: #49CA99;
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
}



.title-best-offers{
    font-size: 20px;
    font-weight: bold;
}
</style>