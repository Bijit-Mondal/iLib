<template>
  <div class="home">
    <vs-card-group>
        <vs-card type='4' v-for="card in cards" :key="card.id">
          <template #title>
            <h3 class="Inconsolata">{{card.title}}</h3>
          </template>
          <template #img>
            <img :src="`${card.img}`" alt="image">
          </template>
          <template #text>
            <p class="Inconsolata">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
        </vs-card>
    </vs-card-group>
    <center>
      <vs-button
        transparent
        :active="active == 0"
        @click="active = 0"
        class="cursive"
        to="/dashboard"
      >
        Let's get started
      </vs-button>
    </center>


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
         return {
            cards:[
              {id:1, title:'Hello 1',img:'https://rkmvccrahara.org/upload/Category_54_200723084903526.jpg'},
              {id:2, title:'Hello 2',img:'https://rkmvccrahara.org/upload/Category_54_200724034645297.jpg'},
              {id:3, title:'Hello 3',img:'https://rkmvccrahara.org/upload/Category_54_200724034010059.jpg'}
            ],
            active:0
         }
     },
     mounted() {

     },
     created(){

     }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,900;1,300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
  .Inconsolata{
    font-family: cursive;
  }
  .Vujahday{
    font-family:'Vujahday Script', cursive;
  }
  .cursive{
    font-family: cursive;
  }
   @media screen and (max-width: 990px){
     .Inconsolata{
        font-family: 'Inconsolata', cursive;
     }
   }
</style>
