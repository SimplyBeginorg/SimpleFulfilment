<template>
    <Layout>
     <div  class="container " style="min-height: calc(100vh - 340px)">
         <!-- <v-row>
             <Navbar />
           </v-row> -->
   <v-row>
     <v-col class="col-2" ></v-col>
   <v-col  class="col-10 col-md-12 col-lg-12">   
      <v-row class="mt-12" ></v-row>
      
   
       <v-row>
           <h1 class="  fontfmil " style="fontWeight:400;fontSize:50px;color:#3a5768">Contact Us</h1>
       
       </v-row>
   <v-row class="mt-7">
              <h5 style="color:#3a5768">Get in touch with Fulfillment. Talk to our team for 24/7 customer support.</h5>
   </v-row>
       <v-row>
           <h6 class=" mt-3 fontfmil" style="width:170px;fontWeight:400;color:#3a5768">Our mailing address is:
   152A Charlotte Street,
   Peterborough ON
   Phone: 705-742-3221</h6>
   
       </v-row>
   <v-row class="mt-8 ">
      <v-icon  >mdi-facebook</v-icon>
      <v-icon class="ml-3">mdi-twitter</v-icon>
      <v-icon class="ml-3">mdi-instagram</v-icon>
      <v-icon class="ml-3">mdi-google-plus</v-icon>
   
   </v-row>
   </v-col>
   <v-col class="mt-3 col-11 col-md-12 col-lg-12 "  >
     <v-row class="mt-12 inputbox" style="color:#3a5768" >
         <div class="mb-3" style="fontWight:400"> 
          <h6> Let us know how we can help. We will get in touch as soon as possible based on urgency of your request.
          </h6>
         </div>
     <!-- <v-text-field class="col-12 col-md-12 col-lg-12" v-model="fullName"  style="margin:5px" placeholder="Enter Name"  /> -->
     <!-- <v-text-field
      class="col-12 col-md-12 col-lg-12"
               label=""
               single-line
               outlined        
               background-color="white"
             ></v-text-field> -->
            <div style="padding:0px" class="col-12">
             <h6 style="paddingBottom:0px;marginBottom:0px">Full Name<span style="color:red" >*</span></h6>
             </div>
             <input placeholder="Enter your Name" v-model="fullName" style="height:40px;backgroundColor:white;border: 1px solid #DCDCDC" class="col-10 mb-7 " />
            <div style="padding:0px" class="col-12">
             <h6 style="paddingBottom:0px;marginBottom:0px">Email<span style="color:red" >*</span></h6>
             </div>
             <input placeholder="Enter a valid email address"  style="height:40px;backgroundColor:white;border: 1px solid #DCDCDC" class="col-10  mb-7" />
             <div style="padding:0px" class="col-12">
             <h6 style="paddingBottom:0px;marginBottom:0px">Message<span style="color:red" >*</span></h6>
             </div>
       <textarea style="backgroundColor:white;border: 1px solid #DCDCDC " v-model="detail" placeholder="Enter your message" class="col-10  mb-7 " rows="3"></textarea>
   
             <!-- <input placeholder="Enter your message" rows="3" max-rows="6" style="height:40px;backgroundColor:white" class="col-10 mt-4 mb-12 " /> -->
      <!-- <v-text-field
      class="col-12 col-md-12 col-lg-12"
                  label="Email"
                 :rules="rules"
                 style="border:blue"
               v-model="email"
                 hide-details="auto"
                             
               ></v-text-field> -->
   </v-row>
   <!-- <v-row>
        <v-col cols="12">
               <v-textarea
               v-model="detail"
                 color="teal"
               >
                 <template v-slot:label>
                   <div>
                     Description <small>(optional)</small>
                   </div>
                 </template>
               </v-textarea>
             </v-col>
   </v-row> -->
   <v-row class="mb-12 inputbox " style="paddingBottom:50px;">
     <!-- #dec79b -->
     <v-btn elevation="0" @click="sendData()" style="width:130px;color:white;" class="bg-primary" >Submit</v-btn>
   </v-row>
   </v-col>
     <v-col class="col-1" ></v-col>
   
   </v-row>

     </div>
   
     <Footer class="mt-5" />
   
    </Layout>
   </template>
   
   <script>
//    import {namesRef} from '~/main.js'
   // import Footer from './Footer.vue'
   // import Navbar from './Navbar.vue'
   import Footer from './Footer.vue'
   export default {
   components:{
     // Navbar,
   Footer
   }
   ,metaInfo: {
    title: 'Support | Contact Us',
  meta: [
 {name: "description", content: "Contact us page"},
                    { property: "og:title", content: 'Support | Contact Us'},
                    {property: "og:description", content: "Contact us page"},
               
 ]
  }, data(){
       return{  
                
               password: '',
         fullName:"",email:"",detail:""
       ,rules: [
           // (value) => !!value || "Required.",
           (value) => !!value || "Required.",
          (value) => (value || "").length <= 20 || "Max 20 characters",    
       (value) => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail.";
           },
         ],}
     },
      mounted() {
            const data =window.location.href;
     console.log(data);
     //  this.showMobileSidebar(false);  
      }
     ,
     methods: {
     //  showMobileSidebar(obj) {
         // this.$store.commit("SET_NAVBAR_BACK", obj);
       // },
     //  validationStatus: function(validation) {
     //           return typeof validation != "undefined" ? validation.$error : false;
     //       },
    // makeToast() {
    //        this.$bvToast.toast('Your Request is Forwarded.', {
    //          title: 'Fulfillment',
    //          variant: "primary",
    //          solid: true
    //        })
    //      },
   sendData(){
   if( this.fullName !="" && this.email != "" && this.detail !="" ){
             // const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // pattern.test(this.email)
   // alert("chal gaya")
    // namesRef.push({email:this.email,fullname:this.fullName,detail:this.detail});                           
   this.fullName=null ,this.email = null,  this.detail =null
//    this.makeToast();
   // alert('Congratulation... Your Request is Forwarded');
         // this.$router.push({ path: "/" });
   
   }
   else{
   alert("Please Fill All Enteries..!");
   
   }
       }
     }
   }
   </script>
   
   <style>
   .fontfmil{
     /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: Poppins,sans-serif !important;
   }
   
   @media (max-width: 767px){
     .inputbox{
   margin-left: 60px;
   
     }
   }
   @media(max-width: 480px){
       .app_btn{
   margin-left: 15px !important;
   width: 200px !important;
     }
   }
   .v-toolbar__content, .v-toolbar__extension {
       padding: 4px 5px !important;
   }
   </style>