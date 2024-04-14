<template>
   <v-app>
     <div>

      <div id="myNav" style="overflow: hidden!important" class="overlay">
        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)"  class="closebtn" style="marginTop:50px" @click="closeNav()"
          >&times;</a
        >
  
        <!-- Overlay content -->
        <div  class="overlay-content">
          <div style="overflow: hidden!important;padding:0px" class="contained">
            <div  class="login-sec fontfamily">
              <!-- <h2 style="color:#3a5768!important;padding:0px!important" class="fontfamily ">Welcome to Fullfillment Company</h2> -->
            
              <form @submit.prevent="login()" v-show="loginVisibility"  class="login-signup-form">
                <h4  style="color:#3a5768!important">Sign In</h4>

                <a @click="gotoSignUp()" style="color:blue!important;font-size: medium;"  class="fontfamily mt-4 mb-4">Not registered yet?
              </a>
                <div class="field-wrapper">
                  <input
                    type="email"
                    class="form-field mt-6  reg-log-field"
                    v-model="email"
                    placeholder="Email"
                    style="width:400px!important;margin:auto"
                   required="'required'"
                              
                  />
                  <div class="mt-4"></div>
                  <input
                  type="password"
                  class="form-field mt-6  reg-log-field"
                  placeholder="Password"
                 required="'required'"
                 v-model="password"
                  style="width:400px;margin:auto"          
                />
                <div style="marginTop:10px"></div>
             <!-- <div style="display: inline-block;">
    <input style="vertical-align: middle;" type="checkbox" class="mr-2" v-model="checked">
    <span style="vertical-align: middle;">Did you want to take services!</span>
</div> -->
<!-- <div class="service-icons mt-3">
    <span style="display: inline-block;">
      <input style="vertical-align: middle;" type="checkbox"  v-model="packing"> <v-icon title="Order Packing">mdi-dolly-flatbed</v-icon>
  <v-icon  title="Order Packing">mdi-box</v-icon>
  </span>
  <span class="ml-3" style="display: inline-block;">
    <input style="vertical-align: middle;" type="checkbox"  v-model="storage"> <v-icon title="Storage">mdi-dolly-flatbed</v-icon>
  <v-icon   title="Storage">mdi-warehouse</v-icon>
  </span>
  <span class="ml-3" style="display: inline-block;">
    <input style="vertical-align: middle;" type="checkbox"  v-model="returnProcessing"> <v-icon title="Returns Processing">mdi-dolly-flatbed</v-icon>
  <v-icon   title="Returns Processing">mdi-undo</v-icon>
  </span>
  <span class="ml-3" style="display: inline-block;">
    <input style="vertical-align: middle;" type="checkbox"  v-model="rework"> <v-icon title="Rework">mdi-dolly-flatbed</v-icon>
  <v-icon   title="Rework">mdi-tools</v-icon>
  </span>
  <span class="ml-3" style="display: inline-block;">
    <input style="vertical-align: middle;" type="checkbox"  v-model="bussiness"> <v-icon title="Small Business">mdi-dolly-flatbed</v-icon>
  <v-icon   title="Small Business">mdi-store</v-icon>
  </span>
</div> -->
<b-modal @ok="onSave" centered ok-title="Save"  id="modal-service-icons" title="Select Services" ok-only>
  <b-list-group>
    <b-list-group-item>
      <div class="service-icons d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <v-icon>mdi-box</v-icon>
          <span class="ml-3">Order Packing</span>
        </span>
        <input type="checkbox" style="cursor: pointer;" v-model="packing">
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <div class="service-icons d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <v-icon>mdi-warehouse</v-icon>
          <span class="ml-3">Storage</span>
        </span>
        <input type="checkbox" style="cursor: pointer;" v-model="storage">
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <div class="service-icons d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <v-icon>mdi-undo</v-icon>
          <span class="ml-3">Returns Processing</span>
        </span>
        <input type="checkbox" style="cursor: pointer;" v-model="returnProcessing">
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <div class="service-icons d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <v-icon>mdi-tools</v-icon>
          <span class="ml-3">Rework</span>
        </span>
        <input type="checkbox" style="cursor: pointer;" v-model="rework">
      </div>
    </b-list-group-item>
    <b-list-group-item>
      <div class="service-icons d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <v-icon>mdi-store</v-icon>
          <span class="ml-3">Small Business</span>
        </span>
        <input type="checkbox" style="cursor: pointer;" v-model="business">
      </div>
    </b-list-group-item>
  </b-list-group>
</b-modal>
                <!-- <v-select
                class="form-field  reg-log-field  text-center"
                style="padding-top: 12px!important; display: flex; flex-direction: column; align-items: center;"
  label="Select Service Category"
  variant="solo"
  v-model="service_select"
  :items="['Inventory Upload', 'Creation of TF Hub', 'Sales Channel Linking', 'Shipping Services']"
></v-select> -->
                </div>
                <div id="recaptcha-container" class="mt-5 mb-4" style="background-color:#1b1a1a;width:300px;margin:auto;">
              </div>
                <button type="submit"  class="login-btn mt-6 mb-4 btn btn-lg btn-dark">
                  Login
                </button>
              </form>
              <form v-show="signUpVisibility"  @submit.prevent="signup()" class="login-signup-form">
                 <h4 style="color:#3a5768!important">Sign Up</h4>
                <a @click="gotoLogin()" style="color:blue!important;font-size: medium;"  class="fontfamily mt-4 mb-4">Already registered!
              </a>
                <div class="field-wrapper">
                  <input
                    type="text"
                    class="form-field mt-6  reg-log-field"
                    id="userNameSignUp"
                    placeholder="Username"
                    style="width:400px!important;margin:auto"
                   required="'required'"
                   v-model="usernameSignUp"           
                  />
                  <div class="mt-4"></div>

                  <input
                  type="email"
                  id="emailSignUp"
                  class="form-field mt-6  reg-log-field"
                  v-model="emailSignUp"
                  placeholder="Email"
                  style="width:400px!important;margin:auto!important"
                 required="'required'"
                            
                />
                  <div class="mt-4"></div>

                  <input
                  type="password"
                  class="form-field mt-6  reg-log-field"
                  placeholder="Password"
                 required="'required'"
                  style="width:400px;margin:auto"          
                v-model="passwordSignUp"
                  />
                </div>
                <div id="recaptcha-container" class="mt-5 mb-4" style="background-color:#1b1a1a;width:300px;margin:auto;">
              </div>
                <button type="submit"  class="login-btn mt-6 mb-4 btn btn-lg btn-dark">
                  Create your account
                </button>
              </form>
              <div class="styled-separator"><span>or</span></div>
              <div  style="overflow: hidden!important" class="login-content mt-6">
                <span
                style="color:#3a5768!important" 
                  >Here you can see
                  <a style="color:blue!important" href="/terms-conditions" class="color-primary login-content"
                    >Terms &amp; Conditions</a
                  ></span
                ><br /><span
                style="color:#3a5768!important" 
                  >Visit our
                  <a style="color:blue!important" href="/privacy-policy" class="color-primary login-content"
                    >Privacy Policy</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      		<div class="container-fluid">
            
			<nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
		    <div class="container">
		    	<a class="navbar-brand" href="/">Fulfilment</a>
		      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="fa fa-bars"></span> Menu
		      </button> -->
          <b-navbar-toggle target="nav-collapse">Menu</b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class=" fontfamil text pdleft">
		      <!-- <div class="collapse navbar-collapse" id="ftco-nav"> -->
		        <ul class="navbar-nav  mr-md-3">
		        	<li class="nav-item "><a href="/" class="nav-link">Home</a></li>
		        	<li  class="nav-item"><a  @click="gotoAbout()" class="nav-link">About Us</a></li>
		        	<li class="nav-item"><a @click="gotoStore()" class="nav-link">Store</a></li>
		        	<li class="nav-item"><a @click="gotoTech()" class="nav-link">Technology</a></li>
		          <li class="nav-item"><a @click="gotoContact()" class="nav-link">Contact</a></li>
		          <li v-if="isAdmin" class="nav-item"><a @click="gotoUsers()" class="nav-link">Users</a></li>
             
              <li v-if="!isAdmin && userLoggedIn" class="nav-item"><a @click="gotoRecord()" class="nav-link">Record</a></li>
		         
              <li @click="logout" v-if="userLoggedIn" style="cursor:pointer" class="dropdown loginBtn nav-item d-md-flex align-items-center">
                <v-icon class="float-right" color="#228B22" >mdi-logout</v-icon>
                Logout
              </li>
              <li @click="openNav" style="cursor:pointer" class="dropdown nav-item d-md-flex loginBtn align-items-center" v-else>
                <v-icon   class="float-right" color="#228B22" >mdi-login</v-icon>
                Login
              </li>

		        </ul>
            </b-navbar-nav>
            </b-collapse>
		      </div>
		    <!-- </div> -->
		  </nav>
    <!-- END nav -->
  
  </div>
     </div>
    <slot/>
   
    </v-app>
</template>
<script>
import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
import { auth } from '~/main.js';


export default {
  created(){
    auth.onAuthStateChanged((user) => {
  if (user) {
    this.userLoggedIn=true;
    if(user.email== "admin@admin.com"){
      this.isAdmin=true;
}
    
    console.log('User is logged in:', user);
    // You can perform actions for a logged-in user here
  } else {
    console.log('No user is logged in');
    // You can perform actions for a user who is not logged in here
  }
});
  },
  data(){
return{
  loginVisibility:true,
  signUpVisibility:false,emailSignUp:null,usernameSignUp:null,passwordSignUp:null,
  email:null,password:null,userLoggedIn:false,service_select:null,checked:false,isAdmin:false,
  rework:false,storage:false,packing:false,picking:false,bussiness:false,returnProcessing:false,
  business:false
}
  },
methods:{
  onSave(){
this.gotoRecord();
  },
  gotoAbout(){
    window.location.href = '/about';

    // window.reload();
    // this.$router.push({ path: "/about"});
    // this.$router.push({ name: 'About' });

  },
  gotoStore(){
    window.location.href = '/store';
    // this.$router.push({ path: "/store"});

    // window.reload();
    // this.$router.replace('/about')

  },
  gotoTech(){
    window.location.href = '/technology';
    // this.$router.push({ path: "/technology"});

    // window.reload();
    // this.$router.replace('/about')

  },
  gotoContact(){
    window.location.href = '/contact';
    // this.$router.push({ path: "/contact"});

    // window.reload();
    // this.$router.replace('/about')

  },
  gotoRecord(){
    window.location.href = '/inventory';
    // this.$router.push({ path: "/inventory"});

  },
  gotoUsers(){
    window.location.href = '/userrecord/';
    // this.$router.push({ path: "/userrecord/"});
  },
  categoryToast() {
          this.$bvToast.toast("Please select category", {
            title: 'FullFillment',
            variant: "primary",
            solid: true
          })
        },
  authToast(message) {
          this.$bvToast.toast(message, {
            title: 'FullFillment',
            variant: "primary",
            solid: true
          })
        },
  logout(){
    auth.signOut()
        .then(() => {
          window.location.href = '/'
          this.userLoggedIn=false;
          this.authToast('User logged out successfully!');
          console.log('User logged out successfully!');
          
          // You can perform additional actions after logout if needed
        })
        .catch((error) => {
          console.error('Error logging out:', error.message);
        });
  },
async login(){
  const { email, password } = this;
  if (email === "admin@admin.com") {
      // If user is admin, redirect to admin panel or perform other admin-specific actions
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
        
          this.closeNav();
          this.authToast('User logged in successfully!');
          // alert("User logged in successfully!");
          console.log('User logged in successfully!');

          if (typeof localStorage !== 'undefined') {
          localStorage.setItem('email', email);
          

    // localStorage is available
    // Your code here
} else {
    // localStorage is not available, handle accordingly
}
// this.gotoUsers();

}).catch((error) => {
    // Handle the error
    switch (error.code) {
      case 'auth/invalid-email':
        console.error('Invalid email address');
        break;
      case 'auth/user-disabled':
        console.error('User account is disabled');
        break;
      case 'auth/user-not-found':
        console.error('User not found');
        break;
      case 'auth/wrong-password':
        console.error('Incorrect password');
        this.authToast('Incorrect password');
        break;
      default:
        console.error('An error occurred:', error.message);
        break;
    }
  });

       // Exit the function early
    }  
  const userQuery = await firebase.firestore().collection('users').where('email', '==', email).get();

    if (userQuery.empty) {
      console.log('No matching user document found.');
      this.errorMessage = 'No matching user document found.';
      return;
    }

    // Get the first document from the query (assuming email is unique)
    const userDoc = userQuery.docs[0];
    const userData = userDoc.data();
    if (userData.active) {
      // Allow user to sign in
      console.log('User is active. Signing in...');
      // this.authToast('User logged in successfully!');
      // Redirect to dashboard or perform other actions
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
        
          this.closeNav();
          this.authToast('User logged in successfully!');
          this.$bvModal.show('modal-service-icons');

          // alert("User logged in successfully!");
          console.log('User logged in successfully!');

          if (typeof localStorage !== 'undefined') {
          localStorage.setItem('email', email);
          

    // localStorage is available
    // Your code here
} else {
    // localStorage is not available, handle accordingly
}
// this.gotoRecord();

});
    }else{
      this.authToast('You dont have rights to get Login');
    } 
},

//   async login() {
//   try {
//     const { email, password } = this;
//     // Authenticate user with Firebase Authentication
//     const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
//     const user = userCredential.user;
    
//     // Check if the user is admin
//     if (user.email === "admin@admin.com") {
//       // If user is admin, redirect to admin panel or perform other admin-specific actions
//       console.log('Admin logged in. Redirecting to admin panel...');
//       this.gotoUsers();
//       return; // Exit the function early
//     }
    
//     // Retrieve user data from Firestore
//     const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
//     const userData = userDoc.data();
    
//     // Check if user is active
//     if (userData.active) {
//       // Redirect to dashboard or perform other actions
//       console.log('User is active. Redirecting...');
//       this.gotoRecord();
//     } else {
      
//       // If user is not active, display error message
//       this.errorMessage = 'User is not active.';
//       // Log out user
//       await firebase.auth().signOut();
//     }
//   } catch (error) {
//     console.error('Login error:', error.message);
//     this.errorMessage = error.message;
//   }
// },
//   login(){
//     //  if(this.service_select != null ){
//     auth.signInWithEmailAndPassword(this.email, this.password)
//         .then(() => {
        
//           this.closeNav();
//           this.authToast('User logged in successfully!');
//           // alert("User logged in successfully!");
//           console.log('User logged in successfully!');
//           if (typeof localStorage !== 'undefined') {
//           localStorage.setItem('email', this.email);

//     // localStorage is available
//     // Your code here
// } else {
//     // localStorage is not available, handle accordingly
// }
//     this.gotoRecord();

//         this.email="";this.password="";
//       })
//         .catch((error) => {
//           this.authToast('invalid Email/Password.');       
//           console.error('Error logging in:', error.message);
//         });

       

//       // }else{
//       //    this.categoryToast();
//       //   }
//   },
  signup(){
    auth.createUserWithEmailAndPassword(this.emailSignUp, this.passwordSignUp)
    .then((userCredential) => {
        // User successfully created, you can get the UID from the userCredential
        const user = userCredential.user;
        const uid = user.uid;

        // Add user data to Firestore using the UID
        firebase.firestore().collection('users').doc(uid).set({
            username: this.usernameSignUp,
            email: this.emailSignUp,
            active: true
        })
        .then(() => {
            // User data added successfully
            this.authToast('User registered successfully!');
            // this.signUpVisibility = false;
            // this.loginVisibility = false;
            this.closeNav();
            this.usernameSignUp = "";
            this.emailSignUp = "";
            this.passwordSignUp = "";
        })
        .catch((error) => {
            // Error adding user data to Firestore
            this.authToast('Something went wrong registering user!');
            console.error('Error adding user data to Firestore:', error.message);
        });
    })
    .catch((error) => {
        // Error creating user
        this.authToast('Something went wrong registering user!');
        console.error('Error registering user:', error.message);
    });
    // auth.createUserWithEmailAndPassword(this.emailSignUp, this.passwordSignUp)
    //     .then(() => {
    //       firebase.firestore().collection('users').doc().add({
    //  username: this.usernameSignUp,
    //     email: this.emailSignUp,
    //     active:true        
    //     });
    //       this.authToast('User registered successfully!');
    //       this.signUpVisibility=false;this.loginVisibility=true
    //       this.usernameSignUp="";this.emailSignUp="";this.passwordSignUp="";
    //     })
    //     .catch((error) => {
    //       this.authToast('Something went wrong registering user!');
    //       console.error('Error registering user:', error.message);
    //     });
  },
 gotoLogin(){
  this.signUpVisibility=false;this.loginVisibility=true
 },
  gotoSignUp(){
    this.signUpVisibility=true;this.loginVisibility=false
  },
  openNav() {
    this.$root.$emit('bv::toggle::collapse', 'nav-collapse'); 
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
}  
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');
.login-content{
  font-size: 16px!important;
}

  .btnmain {

    background-color: #3a5768 ;
    color: rgb(8, 8, 8);
    border-radius: 5px;
    text-align: center;
    position: fixed;
    bottom:50%;
    right: 0px;
  }
.login-btn{
    width: 390px!important;
    background-color: black;
    border-radius: 20px!important;
    margin:auto;
  }

.form-field {
    display: block;
    width: 100%;
    height: 45px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 10px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background: #f4f4f4;
    font-size: .8rem;
    border: none;
}
.form-field.reg-log-field {
    height: 60px;
    background: #f9f8f8;
    border-radius: 100px;
    text-align: center;
    font-size: 20px;
    width: 400px!important;
    margin: auto!important;
}
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: white; /* Black fallback color */
  background-color: white; /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
   /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: black;
text-decoration: none;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.closebtn:hover{
color: blue!important;
}
@media (max-width: 768px) {


.form-field{
    width: 390px!important;
  
    width: 100% !important;;
  }
 .logimg {
    margin-left: 10px !important;
  }
  .login-btn{
    width: 390px!important;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 20px!important;
    background-color: black;
  }
}
@media (max-width: 767px) {
  ul.navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  ul.navbar-nav li {
    margin: 10px 0;
  }
  .loginBtn{
    color:#818181
  }
  
}
@media (min-width:993px){
  .markdetail{
  margin-left: 100px;
}
}
@media (max-width: 900px) {
.logimg {
    margin-left: 30px !important;
  }
}
@media (max-width: 440px) {
  .logimg {
    margin-left: 2px !important;
  }
  .logincolor{
    color: white!important;;
  }

}
@media (max-width: 399px) {
  .login-btn{
    width: 290px!important;
  }
}
/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}


.cardChip{
  width:200px;height:100px;background-Color:white;margin-Right:15px;
  font-size: 17px;
  font-weight: 500;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  
  /* border-start-end-radius: 10px; */
  /* border-end-start-radius: 10px; */
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  
}
.fontfamil{
  font-family: Poppins,sans-serif !important;
  font-weight: 500 !important;
  font-size: 16px !important;
}
/* .fontfamil{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

} */
@media (max-width: 592px) {
  /* .autocomp{
      width: 140px !important;
  } */
  .btnside {
    padding-left: 0px;
  }
}
@media (max-width: 485px) {
  .autocomp {
    width: 320px !important;
  }
  .btnside {
    padding-left: 0px;
    margin-right: 15px;
  }
}
@media (max-width: 392px) {
  .btnside {
    padding-left: 0px;
  }
}
@media (max-width: 424px) {
  .autocomp {
    width: 270px !important;
  }
}
@media (max-width: 394px) {
  .autocomp {
    width: 220px !important;
  }
  .btnside {
    padding-left: 0px;
    margin-right: 15px;
  }
}
@media (max-width: 768px) {
  .imgmain > div {
    bottom: 78% !important;
  }
  .tfont {
    font-size: 27px;
  }
  .btnside {
    margin-top: -155px;
  }
}
.list {
  min-height: 160px;
  height: 160px;
  line-height: 110px;
  text-align: center;
  background-color: #ffff;
  margin-right: 15px;
}
.item {
  width: 100px;
}
.wrapper {
  max-height: 120px;
  border: 1px solid #ffff;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.wrapper ::-webkit-scrollbar {
  width: 0;
  display: none;
}
.wrapper .item {
  min-height: 110px;
  height: 110px;
  line-height: 110px;
  text-align: center;
  background-color: #ffff;
  margin-right: 7px;
}
.theme--light.v-application {
  background-color: transparent;
}

.home-links a {
  margin-right: 1rem;
}
.nav_bar {
  box-shadow: none;
  outline: none !important;
  border: none;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #4c5162;
  /* overflow-y: hidden; */
}
.v-menu__content {
  overflow-y: hidden;
}
.imgmain > img {
  position: fixed;
  right: 0px;
  bottom: 172px;
  height: 130px;
  width: 152px;
  float: right;
  /* border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.377); */
}
.imgmain > div {
  position: fixed;
  right: 7%;
  bottom: 93%;

  height: 30px;
  width: 95px;
  float: right;
  font-weight: bold;
  padding-top: 5px;
}
/* .imglap > img {
  right: 0px;
  bottom: 135px;
  height: 230px;
  width: 162px;
  float: right;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.377);
} */
/* .imgmain:hover {
    background-image: url(img/laptop-short.gif);
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: 0px;
    background-position-y: 0px;
    position: fixed;
    right: 180px;
    bottom: 60px;
    height: 230px;
    width: 192px;
    float: right;
    border-radius: 20px;
    background-color: rgba(197, 195, 195, 0.377);
  } */
.yellow-btn {
  background-color: #dec79b;
  color: rgb(8, 8, 8);
  border-radius: 5px;
  text-align: center;
}
</style>
