<template>
    <Layout>
    <div class="container">
        <div class="row mt-5">
        <h2 style="margin:auto;color:#3a5768">Inventory Record</h2>
        </div>
        <div class="row mt-4 mb-5">
        <p style="margin:auto;color:#3a5768">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>

        </div>
        <div class="row mt-5 mb-10">
            <div @click="showEdit=true" style="cursor:pointer;padding:5px;margin:auto;borderRadius:2px;backgroundColor:#3a5768;color:white">
            <v-icon color="white" >mdi-upload</v-icon> Upload your CSV
            </div>
            
        </div>
        <b-modal
        no-close-on-backdrop
        hide-header-close
        v-model="showEdit"
        id="modal-center"
        centered
        title="Inventory Upload"
      >
      <div >Select File</div> 
      <input type="file" @change="onFileChange" accept=".csv">

  <!-- <b-form-select  variant="dark" style="marginTop:5px;marginBottom:5px;" v-model="edtselected" :options="options">
     <template #first>
<b-form-select-option :value="null" disabled>-- Please select an Author --</b-form-select-option>
</template>
  </b-form-select> -->
    
        <template #modal-footer>
          <b-button
              class="border-0"
  size="md"
  style="margin: 0 auto;backgroundColor:transparent;color:blue"
            @click="showEdit=false"
          >
            Close
          </b-button>
          <b-overlay
            :show="edt_over"
            rounded
            opacity="0.6"
            spinner-small
            spinner-variant="primary"
            class="d-inline-block"
              style="margin: 0 auto; margin-left: 10px !important"
            @hidden="onHidde"
          >
            <b-button
    class="border-0"
  size="md"
  style="backgroundColor:transparent;color:Green"
              @click="uploadFile"
            >
              Upload
            </b-button>
          </b-overlay>
        </template>
      </b-modal>
<!-- <div class="row mt-4">
      <input type="file" @change="onFileChange" />
      <button @click="uploadFile" :disabled="!file">Upload File</button>
    </div> -->
      <div class="row table-responsive mt-4 ">
        <div  v-if="uploadedFiles.length === 0">
         <h2 class="pt-10" style="margin:auto;textAlign:center;color:#3a5768!important"> No files uploaded yet.</h2>
        </div>
        <table v-else
        role="table"
        
        aria-busy="false"
        aria-colcount="5"
        class="table b-table table-dark table-hover"
        id="__BVID__2679"
        style="cursor:pointer;color:white;backgroundColor:#3a5768!important;borderColor:grey!important"
      >
            <thead>
              <tr>
                <th>Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(file, index) in uploadedFiles" :key="index">
                <td>{{ file.name }}</td>
                <td><v-icon style="marginLeft:20px" color="green" @click="downloadFile(file.name)">mdi-download</v-icon></td>
              </tr>
            </tbody>
          </table>
     </div>
    <div>
        
    </div>
    </div>
</Layout>  
</template>
  
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/storage';
import { auth } from '~/main.js';
  
  export default {
    data() {
      return {
        file: null,
        uploadedFiles: [],
      uploadError: null,
      showEdit:false,
      currentDate: new Date().toISOString().slice(0, 10),
      isUserEmail:null,
      edt_over:false
      };
    },
    methods: {
      showModal() {
      this.$refs.myModal.show();
    }
    ,onHidde(){
      this.$refs.button.focus();

},
        async downloadFile(fileName) {
          if (typeof localStorage !== 'undefined') {
          const emailUser = localStorage.getItem('email');
      const storageRef = firebase.storage().ref(`files/${emailUser}/`)
      const fileRef = storageRef.child(fileName)
      try {
        const url = await fileRef.getDownloadURL()
        window.open(url, '_blank')
      } catch (error) {
        console.error('Error downloading file:', error)
      }
    }
    },
      onFileChange(event) {
        this.file = event.target.files[0];
      },
      async uploadFile() {
        if (this.file) {
        const today = new Date().toISOString().split('T')[0];
      //  const emailUser=  firebase.auth().currentUser.email;
        // Get today's date
        if (typeof localStorage !== 'undefined') {
          const emailUser = localStorage.getItem('email');

        const storageRef = firebase.storage().ref(`files/${emailUser}/`);
        
        try {
          const snapshot = await storageRef.child(this.file.name).put(this.file);
          console.log('File uploaded:', snapshot.metadata.name);
          this.file = null; // Reset file input
          this.fetchUploadedFiles(today);
          this.FileToast();
          this.showEdit=false;

          // Refresh uploaded files
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      } else {
       this.uploadFileToast()
    }}
      },
      uploadFileToast(){
        this.$bvToast.toast(`Please select file`, {
          title: 'Inventory Upload',
          autoHideDelay: 3000,
          // appendToast: append
        });},
        FileToast(){
        // this.toastCount++
        this.$bvToast.toast(`file uploaded`, {
          title: 'Inventory Upload',
          autoHideDelay: 3000,
          // appendToast: append
        });},
      async fetchUploadedFiles(date) {
        // const emailUser=firebase.auth().currentUser.email;
        if (typeof localStorage !== 'undefined') {
          const emailUser = localStorage.getItem('email');
     
        const storageRef = firebase.storage().ref(`files/${emailUser}`);
        console.log(this.isUserEmail);
        
        try {
          const listResult = await storageRef.listAll();
          const files = listResult.items.map(item => ({ name: item.name }));
          this.uploadedFiles = files;
        } catch (error) {
          console.error('Error fetching uploaded files:', error);
        }}
      }
      ,
      async fetchUploadedFile() {
        // const emailUser=firebase.auth().currentUser.email;
        if (typeof localStorage !== 'undefined') {
          const emailUser = localStorage.getItem('email');
        const directoryRef = firebase.storage().ref(`files/${emailUser}`);
console.log(this.isUserEmail);
directoryRef.listAll()
  .then((res) => {
    res.items.forEach(async(itemRef)  =>  {
      // itemRef is a reference to each file
      console.log('File:', itemRef.name);
         const metadata = await fileRef.getMetadata()
        this.uploadedFiles.push({ name: metadata.name, date: metadata.timeCreated.toISOString().slice(0, 10) })
    });
  })
  .catch((error) => {
    console.error('Error listing files:', error);
  });}
      // const storageRef = firebase.storage().ref(`files/${emailUser}`)
      // const files = await storageRef.listAll()
      // files.items.forEach(async fileRef => {
      //   const metadata = await fileRef.getMetadata()
      //   this.uploadedFiles.push({ name: metadata.name, date: metadata.timeCreated.toISOString().slice(0, 10) })
      // })
    }
    },
 
    created() {
  
      const today = new Date().toISOString().split('T')[0]; // Get today's date
      this.fetchUploadedFiles(today);
      this.fetchUploadedFile()

    }
  };
  </script>
  