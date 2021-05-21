<template>
    <div class="head">
        <header>
            <div class="header__logo">
               <img src="@/assets/img/logo.svg" alt="" class="header__logo__img">
               <!-- <span class="header__logo__text"></span> -->
            </div>
            <div class="header__poisk"><input type="text" placeholder="Поиск..."><button v-on:click="openSort" class="header__poisk__knopka">наж</button>
             <Sort class="sortOpen" v-bind:class="{sort:sortActive}"/>
            </div>
            <div class="header__user">
                <span class="header__user_name">{{ username }}</span>
                <img src="@/assets/img/user.svg" alt="" class="header__user__img" width="45px" height="45px">
                <img src="@/assets/img/vhod.svg" alt="" class="header__user__strelka">
            </div>
        </header>
        <div class="header__poisk__adaptiv"><input type="text" placeholder="Поиск..."><button v-on:click="openSort"  class="header__poisk__knopka">наж</button></div>
  
    </div>
</template>



<style scoped lang="scss">

.sortOpen{
    position: relative;
    top: 100px;
      transition: .5s;
    transition-duration: 3s;
}
.sort{
   position: relative;
   top:-200px;
   transition: .5s;
    transition-duration: 3s;
}
.head{
    width: 100%;
}
header{
    width: 100%;
    display: flex;
    align-items: center;
   justify-content: space-between;
}
.header__logo{
    width: 18%;
}
.header__poisk__adaptiv{
    display: none;
     border-radius: 20px;
        padding-top:15px;
        padding-bottom: 15px;
        padding-left: 20px;
        background: url("/img/user.svg")  no-repeat 3px 1px;
}
.header__poisk__knopka{
  height: 30px;
   position: relative;
   right: 10%;
   top:10px
    // left: 90%;
    // bottom: 30px;
    // z-index: 9999;
}
.header__poisk{
    width: 60%;
    display: flex;

    input{
        width: 100%;
        border-radius: 20px;
        padding-top:15px;
         outline:none;
        padding-bottom: 15px;
        padding-left: 35px;
        background: url("https://www.iconninja.com/files/647/860/906/search-icon.png")  no-repeat 3px 1px;
        background-position: 10px;
        background-size: 20px;
    }
}
.header__user{
    display: flex;
    align-items: center;
    width: 15%;
    span{
        margin-right: 1vw;
    }
    img{
        margin-right: 1vw;
    }
    &:last-child{
        margin-right: 0;
    }
}
// адаптив
@media screen and (max-width: 886px) {
    .header{
        display: flex;
        justify-content: space-between;
    }
    .header__poisk{
        display: none;
        width:0;
    }
    .header__logo{
        width: auto;
    }
    .header__user{
        width: auto;
       
    }
    .header__poisk__adaptiv{
         display: flex;
         padding: 0;
        width: 100%;
        input{
             width: 100%;
        border-radius: 20px;
        padding-top:15px;
        padding-bottom: 15px;
        padding-left: 35px;
        background: url("https://www.iconninja.com/files/647/860/906/search-icon.png")  no-repeat 3px 1px;
        background-position: 10px;
        background-size: 20px;
         outline:none;
        }
        display: block;
    }
    .header__poisk__knopka{
   position: relative;
    top: -40px;
    left: 90%;
}
}
</style>



<script>
import Sort from "@/components/Header/Sort.vue"
export default{
    data(){
        return{
             username: "егор",
             sortActive:true,
        }
    },
    components:{
        Sort
    },
    methods:{
     openSort(){
        this.sortActive = !this.sortActive
     }
 }
}
</script>
