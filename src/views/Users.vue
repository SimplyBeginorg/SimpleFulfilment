<template>
    <Layout>
    <div class="container">
        <div class="row mt-5">
            <h2 style="color:#3a5768">Users List</h2>
            </div>
      <div class="row table-responsive mt-4 ">

        <table
        role="table"
        
        aria-busy="false"
        aria-colcount="5"
        class="table b-table table-dark table-hover"
        id="__BVID__2679"
        style="cursor:pointer;color:white;backgroundColor:#3a5768!important;borderColor:grey!important"
      >
            <thead>
              <tr>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr  @click="navigateToUserDetails(user.email)" v-for="user in users" :key="user.id">
                <td class="pt-4">{{ user.email }}</td>
                <td>
                    <v-select
                    v-model="user.active"
                    :value="user.active"
                    :items="statusOptions"
                    outlined
                    background-color="white"
                  style="width:230px;"
                  ></v-select>
                    </td>
                <!-- <td>{{user.active ? 'active' : 'inactive'}}</td> -->
                <td><b-button style="backgroundColor:white;color:black" @click="saveUserStatus(user)" >Save</b-button></td>
              </tr>
            </tbody>
          </table>
     </div>
    </div>
    </Layout>
  </template>
  
  <script>
    import firebase from 'firebase/compat/app';
  import 'firebase/compat/app';
  
  export default {

    data() {
      return {
        users: [],statusOptions: [
        { text: 'Active', value: true },
        { text: 'Inactive', value: false },
      ],
      };
    },
    mounted() {
    this.getUserRecord();
    },

    methods:{
      getUserRecord(){
        const db = firebase.firestore();
      const usersCollection = db.collection('users');
  
      usersCollection.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const user = doc.data();
            user.id = doc.id;
            this.users.push(user);
          });
        })
        .catch((error) => {
          console.error('Error getting documents: ', error);
        });

      }
      ,
      navigateToUserDetails(email) {
        // this.$router.push({ path: "/user/", params: { email } });
    },
        userToast(message) {
          this.$bvToast.toast(message, {
            title: 'FullFillment',
            variant: "primary",
            solid: true
          })
        },
        saveUserStatus(user) {
      const db = firebase.firestore();
      const userRef = db.collection('users').doc(user.id);

      userRef.update({
        active: user.active,
      })
        .then(() => {
            this.userToast('User status updated successfully');
          console.log('User status updated successfully');
        })
        .catch((error) => {
          console.error('Error updating user status: ', error);
        });
    },
    }
  };
  </script>