<template>
  <Layout>
    <div style="overflow-x:hidden" class="container">
   <div style="color:#3a5768" class="row mt-10 mb-5">
        <div class="col-12 scol-sm-12 col-lg-8 col-md-8 ">
       <h2 style="color:#3a5768!important;fontWeight:500" class="mt-5 titleheading">{{aboutPage.FirstCompTitle }}
      </h2>
      <p style="fontSize:20px" class="mt-8">
       {{ aboutPage.FirstCompDescOne }}      </p>
      <p style="fontSize:20px">
{{ aboutPage.FirstCompDescTwo }}
</p>
<p style="fontSize:20px">
{{aboutPage.FirstCompDescThree }}
</p>     
        </div>
        <div class="col-12 scol-sm-12 col-lg-4 col-md-4 ">
<g-image class="mt-4 about" style="width:100%;" :src="aboutPage.FirstCompImage" />  
        </div>
        </div>
  </div>
<div style="overflow-x:hidden;overflow-y:hidden" class="container-fluid">
  <div class="row mt-10"  style="backgroundColor:#0CAFFF">
<p class="ml-6 mr-6 blueheading" style="padding:50px;fontSize:33px;fontWeight:700;color:white">
  {{aboutPage.SecondCompDetail}}</p>
  </div>
</div>
<div style="overflow-x:hidden" class="container">
  <div style="color:#3a5768" class="row mt-10 mb-5">
    <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
      <g-image class="mt-10 about" style="marginLeft:10px;marginRight:10px;width:85%;border-radius: 20px;" :src="aboutPage.ThirdCompImage" />  
          </div>
    <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
  <p style="fontSize:20px" class="mt-8">
    {{ aboutPage.ThirdCompDetailOne }}
  </p>
  <p style="fontSize:20px">
    {{ aboutPage.ThirdCompDetailTwo }}
</p>
<p style="fontSize:20px">
  {{ aboutPage.ThirdCompDetailThree }}
</p>     
<p style="fontSize:20px">
  {{ aboutPage.ThirdCompDetailFour }}
</p>
    </div>
    </div>
</div>
<div style="backgroundColor:#f6faff;overflow-x:hidden" class="container-fluid">
  <div class="row" >
    <h1  class="mt-9 mb-6" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{ aboutPage.FourthCompTitle }}
</h1>              
  </div>
  <div style="fontWeight:700!important;" class="row mb-10">
<div class="col-12 col-sm-12 col-lg-4 col-md-4">
  <div class="row">
    <div class="col">
     <g-image style="width:50%;" class="float-right" src="https://noatumesolutions.com/wp-content/uploads/2022/09/post-local-delivery.png"></g-image>      
      <!-- <v-icon class="float-right" color="#228B22" >mdi-local-shipping</v-icon> -->
    </div>
    <div class="col">
      <h5 style="color:#3a5768!important;">{{ aboutPage.FourthCompPalletsNumbers }}
      </h5>
  <h5 style="color:#3a5768!important;">{{aboutPage.FourthCompPalletsDetail}}</h5>

    </div>
  </div>
</div>
<div class="col-12 col-sm-12 col-lg-4 col-md-4">
  <div class="row">
    <div class="col">
     <g-image style="width:40%" class="float-right" src="https://icon-graphica.com/wp-content/uploads/shield01.png"></g-image>      
      <!-- <v-icon class="float-right" color="#228B22" >mdi-local-shipping</v-icon> -->
    </div>
    <div class="col">
      <h5 style="color:#3a5768!important;">{{ aboutPage.FourthCompItemsNumbers }}
      </h5>
  <h5 style="color:#3a5768!important;">{{aboutPage.FourthCompItemDetail}}</h5>

    </div>
  </div>
</div>
<div class="col-12 col-sm-12 col-lg-4 col-md-4">
  <div class="row">
    <div class="col">
     <g-image style="width:50%" class="float-right" src="https://www.leser.com/-/media/images/11-leser-news/2021/september/icon_lieferversprechen_blau.png?la=de-DE&h=39.8&w=53.2&hash=18783506B65F0E1E87FF645F07133B3D"></g-image>      
      <!-- <v-icon class="float-right" color="#228B22" >mdi-local-shipping</v-icon> -->
    </div>
    <div class="col">
      <h5 style="color:#3a5768!important;">{{aboutPage.FourthCompPackagesNumbers}}</h5>
  <h5 style="color:#3a5768!important;">{{ aboutPage.FourthCompPackagesDetail }}
  </h5>

    </div>
  </div>
</div>
</div>
</div>
<div style="overflow-x:hidden" class="container">
  <div style="color:#3a5768" class="row mt-10 mb-5">
    <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
      <g-image class="mt-10 about" style="marginLeft:10px;marginRight:10px;width:85%;border-radius:20px;" :src="aboutPage.FiveCompImage" />  
          </div>
          <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
            <h4 style="color:#3a5768!important;fontWeight:600" class="mt-5 titleheading">{{ aboutPage.FifthCompTitle }}
           </h4>
           <p style="fontSize:20px" class="mt-2">
           {{ aboutPage.FifthCompDescOne }}
            </p>
           <p style="fontSize:20px">
          {{ aboutPage.FifthCompDescTwo }}  
          </p>
       
             </div>
    </div>
    <div style="color:#3a5768" class="row mt-10 mb-5">
            <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
              <h4 style="color:#3a5768!important;fontWeight:600" class="mt-5 titleheading">{{ aboutPage.SixthCompTitle }}
             </h4>
             <p style="fontSize:20px" class="mt-2">
              {{ aboutPage.SixthCompDescOne }}
            </p>
             <p style="fontSize:20px">
              {{ aboutPage.SixthCompDescTwo }}
            </p>
         
               </div>
               <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
                <g-image class="mt-10 about" style="marginLeft:10px;marginRight:10px;width:85%;border-radius:20px;" :src="aboutPage.SixCompImage" />  
                    </div>
      </div>
      <div style="color:#3a5768" class="row mt-10 mb-5">
        <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
          <g-image class="mt-10 about" style="marginLeft:10px;marginRight:10px;width:85%;border-radius:20px;" :src="aboutPage.SevenCompImage" />  
              </div>
        <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
          <h4 style="color:#3a5768!important;fontWeight:600" class="mt-5 titleheading">{{ aboutPage.SeventhCompTitle }}
         </h4>
         <p style="fontSize:20px" class="mt-2">
        {{ aboutPage.SeventhCompDescOne }}  
        </p>
         <p class="mt-2" style="fontSize:20px">
        {{ aboutPage.SeventhCompDescTwo }}  
        </p>
     <p class="mt-2" style="fontSize:20px">
    {{aboutPage.SeventhCompDescThree  }}
    </p>
           </div>           
  </div>
  <div style="color:#3a5768" class="row mt-10 mb-5">
    <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
      <h4 style="color:#3a5768!important;fontWeight:600" class="mt-5 titleheading">{{aboutPage.EighthCompTitle  }}

     </h4>
     <p style="fontSize:20px" class="mt-2">
      {{aboutPage.EighthCompDescOne  }}
    </p>
     <p style="fontSize:20px" class="mt-2">
    {{ aboutPage.EighthCompDescTwo }}  
    </p>
   <p style="fontSize:20px" class="mt-2">
  {{ aboutPage.EighthCompDescThree }}  
  </p>
       </div>
       <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
        <g-image class="mt-10 about" style="marginLeft:10px;marginRight:10px;width:100%;border-radius:20px;" :src="aboutPage.EightCompImage" />  
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
      return{aboutPage:[]}},
    mounted(){
     console.log("About Page load")

      axios.get('https://api.storyblok.com/v2/cdn/stories/aboutpage?version=draft&token=a0JvifJUK2XuIzV1Lhblvwtt&cv=1704640335').then(
   data=>{
        this.aboutPage= data.data.story.content
   
   }).catch(error=>{
    console.log(error);
});
    },
    metaInfo: {
    title: 'About Total Fulfilment - Warehousing & Distribution Company',
//   meta: [
//  {name: "description", content: "Total Fulfilment is a family-owned warehousing and distribution center company offering industry-leading order fulfillment services. With skilled teams, robust processes, and cutting-edge technology, we ensure efficient pick, pack, and shipping for our clients. Learn more about our experienced team and personalized approach."},
//                     { property: "og:title", content: 'About Total Fulfilment - Warehousing & Distribution Company'},
//                     {property: "og:description", content: "Total Fulfilment is a family-owned warehousing and distribution center company offering industry-leading order fulfillment services. With skilled teams, robust processes, and cutting-edge technology, we ensure efficient pick, pack, and shipping for our clients. Learn more about our experienced team and personalized approach."},
//                      { key: 'keywords',property: "og:keywords" , content: "warehousing company, distribution center, order fulfillment services, ecommerce fulfillment, third-party logistics, 3pl, pick and pack services" }
//     ,            
//  ]
  },
}
</script>
<style scoped>
@media (max-width: 767px) {
  .blueheading{
    font-size: 20px!important; 
   }
}
</style>