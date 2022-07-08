<template>
  <div>
    <h1 style="text-align:center" class="pure_cursive color"> {{msg}} {{username}}</h1>
    <vs-avatar size="70" history history-gradient>
         <a :href="img_src"><img :src="img_src" alt="Profile Image"></a>
    </vs-avatar>
    <h2 class="cursive color">Account Details</h2>
    <div class="center color cursive">
     <vs-table striped>
       <template #tbody>
         <vs-tr>
           <vs-td>
             Full Name
           </vs-td>
           <vs-td>
             {{username}}
           </vs-td>
         </vs-tr>
         <vs-tr>
           <vs-td>
             ID
           </vs-td>
           <vs-td>
             {{uid}}
           </vs-td>
         </vs-tr>
         <vs-tr>
           <vs-td>
             Premium
           </vs-td>
           <vs-td>
             {{isPremium}}
           </vs-td>
         </vs-tr>
         <vs-tr>
           <vs-td>
             Email
           </vs-td>
           <vs-td>
             <a class="color" style="text-decoration:none"  :href="'mailto:'+email">{{ email}}</a>
           </vs-td>
         </vs-tr>
         <vs-tr>
           <vs-td>
             Phone Number
           </vs-td>
           <vs-td>
             <a class="color" style="text-decoration:none;" :href="'tel:'+number">{{number}}</a>
           </vs-td>
         </vs-tr>
         <vs-tr>
           <vs-td>
             Address
           </vs-td>
           <vs-td>
             {{address}}
           </vs-td>
         </vs-tr>
       </template>
     </vs-table>
   </div>

  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
export default{
  data: () =>({
    msg:'',
    username:'',
    email:'',
    uid:'',
    number:null,
    img_src:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    address:'',
    isPremium:false,
  }),
  methods:{
    greet(){
      let d =new Date();
      d = d.getHours();
      if(d>=0&&d<=4){
        this.msg = `Good Night, it's time to sleep`
      }
      if(d>4&&d<=6){
        this.msg = `Wish a nice dawn to you,`
      }
      if(d>6&&d<=12){
        this.msg = `Good Morning,`
      }
      if(d>12&&d<=17){
        this.msg = `Good AfterNoon,`
      }
      if(d>17&&d<=19){
        this.msg =`Good Evening,`
      }
      if(d>19&&d<=23){
        this.msg=`It's Night,`
      }
    },
    accessDetails(){
      const user = firebase.auth().currentUser;
      if(user){
        firebase.storage().ref('users/'+user.uid+'/profile.jpg').getDownloadURL().then(imgURL => {
          this.img_src = imgURL;
        }).catch(()=>{});
        this.username = user.displayName;
        this.email = user.email;
        this.uid = user.uid;
        user.getIdTokenResult().then(result=>{
          this.isPremium = result.claims.premium;
        })
        firebase.firestore().collection('userInfo').doc(user.uid).get().then(doc=>{
          this.address = doc.data().Address,
          this.number = doc.data().MobileNumber
        })
      }
    }
  },
  mounted(){
    this.greet();
    this.accessDetails();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Island+Moments&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
.center-heading{
  text-align: center;
}
.color{
  color:lavender;
}
.cursive{
  font-family: cursive;
}
.pure_cursive{
    font-family: cursive;
}
@media screen and (max-width: 990px){
   .cursive{
      font-family: 'Inconsolata', cursive;
   }
 }
.Island{
  font-family: 'Island Moments', cursive;
}
.Inconsolata{
  font-family: 'Inconsolata', cursive;
}
</style>
