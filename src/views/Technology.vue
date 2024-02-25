<template>
    <Layout>
      <div style="overflow-x:hidden;" class="container ">
        <div  class="row pt-10 mb-10 pb-10  mt-10">
           <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <h2 style="color:#3a5768!important;fontWeight:700">{{technologyPage.FirstComponentTitile}}</h2>
       <p style="color:#3a5768!important;">
        {{technologyPage.FirstComponentDesc}}</p>
    <p style="color:#3a5768!important;">
    {{technologyPage.FirstComponentDesc1}}</p>   
    <p style="color:#3a5768!important;">{{technologyPage.FirstComponentDesc2 }}    </p>
    </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
         <g-image fit="true" src="https://img.sdcexec.com/files/base/acbm/scn/image/2022/12/Gorodenkoff_AdobeStock_465501008.63a0bafc487b5.png?auto=format%2Ccompress&fit=max&q=70&w=1200"></g-image>
        </div>

        </div>

    </div>
    <Footer />
    </Layout>
  </template>
  
  <script>
  import Footer from "./Footer.vue";
  import axios from 'axios'
  export default {
     components: {
        Footer
      },
      data(){
        return{technologyPage:[]}},
      mounted(){
        axios.get('https://api.storyblok.com/v2/cdn/stories/technologypage?version=draft&token=a0JvifJUK2XuIzV1Lhblvwtt&cv=1707400197').then(
     data=>{
       console.log(data.data.story)
          this.technologyPage= data.data.story.content
     
     }).catch(error=>{
      console.log(error);
  });
      },
    metaInfo: {
      title: 'Store'
    }
  }
  </script>
  <style scoped>
  @media (max-width: 767px) {
    .blueheading{
      font-size: 20px!important; 
     }
  }
  </style>