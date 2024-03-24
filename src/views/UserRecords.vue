<template>
  <Layout>
    <div class="container">
        <div class="row mt-5">
            <h2 style="color:#3a5768">User Record</h2>
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
                <th>File</th>
                <th>Status</th>
                <th>Date</th>
                <th>Download</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="user in users" :key="user.id">
                <td class="pt-4">{{ user.filename }}</td>
                <td>
                    <v-select
                    v-model="user.status"
                    :value="user.status"
                    :items="statusOptions"
                    outlined
                    background-color="white"
                  style="width:230px;"
                  ></v-select>
                    </td>
                <td>{{user.date}}</td>

                    <td><v-icon style="marginLeft:20px" color="white" @click="downloadFile(user.fileURL)">mdi-download</v-icon></td>
                <!-- <td>{{user.active ? 'active' : 'inactive'}}</td> -->
                <td><b-button @click="saveUserStatus(user)" style="backgroundColor:white;color:black"  >Update</b-button></td>
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
      userEmail: '',
      userDetails: null,
      users: [], statusOptions: [
      { text: 'Pending', value: 'pending' },
      { text: 'Approved', value: 'approved' },
      { text: 'Disapproved', value: 'disapproved' }
    ],
       // Object to store the user details
    };
  },
  created() {
    const db = firebase.firestore();
      const usersCollection = db.collection('uploads').where('userEmail', '==', email)
        ;
  
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
    // this.fetchUserData();
  },
  methods: {
    userToast(message) {
          this.$bvToast.toast(message, {
            title: 'FullFillment',
            variant: "primary",
            solid: true
          })
        },
    downloadFile(url){
        try {
        // const url = await fileRef.getDownloadURL()
        window.open(url, '_blank')
      } catch (error) {
        console.error('Error downloading file:', error)
      }
    },
    fetchUserData() {
      const email = this.$route.params.email;
      console.log(email)
      const db = firebase.firestore();

      // Query Firestore for the user document based on the email
      db.collection('uploads')
        .where('userEmail', '==', email)
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0]; // Assuming only one document per email
            this.userEmail = userDoc.data().userEmail;
            this.userDetails = userDoc.data(); // Store the entire user document data
            // Access other user details from this.userDetails
          } else {
            console.log('No user found with the provided email');
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    },
    saveUserStatus(user) {
      const db = firebase.firestore();
      const userRef = db.collection('uploads').doc(user.id);

      userRef.update({
        status: user.status,
      })
        .then(() => {
            this.userToast('User status updated successfully');
          console.log('User status updated successfully');
        })
        .catch((error) => {
          console.error('Error updating user status: ', error);
        });
    },
  },
}
</script>

<style>

</style>