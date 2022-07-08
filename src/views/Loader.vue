  <template>
  <div class="loader">
    <img src="https://vuesax.com/foto1.png">
  </div>
  </template>

  <script>
    export default {
      data: () => ({
        type: 'waves',
        color:'#ffd534',
        state:'loading',
        loading : ''
      }),
      methods: {

      },
      updated(){

      },
      created(){
        this.loading = this.$vs.loading({
                        color: this.color,
                        })
        this.state = document.readyState;
        console.log(this.state);
      },
      beforeMount(){
      
      },
      mounted(){
        this.loading.close();
      }
    }
  </script>
