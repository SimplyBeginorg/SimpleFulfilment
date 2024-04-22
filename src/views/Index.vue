<template>
  <Layout>
<div  class="container">
  <div style="color:#3a5768;" class="row mt-10 ">
          <div class="col-12 scol-sm-12 col-lg-5 col-md-5 ">
         <h1 style="color:#3a5768!important;fontSize:3rem;fontWeight:700" class="mt-5 titleheading">{{homePage.homeTitle}}</h1>
        
         <h5 style="fontWeight:400;;color:#3a5768!important" class="mt-2 mb-4 titleheading">{{homePage.homeDesc }}
        </h5>
          </div>
          <div class="col-12 scol-sm-12 col-lg-7 col-md-7 ">
<g-image class="mt-4 about" style="width:100%;" :src="homePage.homeImage" />  
          </div>
          </div>
      
    <div style="color:#3a5768" class="row mt-15">
      <h1 class="mt-7 fullHeadingMob ml-5 col-12" style="marign:auto;width:100%;fontWeight:300!important;color:#3a5768!important;">Total Fulfilment takes all the frustration out of
  <br><span class="col-12 fullHeadingMob " style="margin-left:200px;fontWeight:700!important;color:#3a5768!important;"> your order fulfilment operation.</span></h1>
          <h6 class="mt-2 mb-4 " style="width:100%;fontWeight:300" >
          
          </h6>
          </div>
          <div  class="row">
            <div class="  col-lg-1 col-md-1 "></div>
            <div class="card mr-4 col-12 col-md-3 col-lg-3" style="width: 15rem;">
              <img class="card-img-top " style="width:100px;margin:auto" :src="homePage.homeCardOneImage" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{homePage.homeCardOneTitle}}</p>
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:100!important;color:#3a5768!important;">{{ homePage.homeCardOneDesc }}</p>
              </div>
            </div>
            <div class="card mr-4 col-12 col-md-3 col-lg-3" style="width: 15rem;">
              <img class="card-img-top " style="width:100px;margin:auto" :src="homePage.homeCardTwoImage" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{homePage.homeCardTwoTitle}}</p>
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:100!important;color:#3a5768!important;">{{ homePage.homeCardTwoDesc }}</p>
              </div>
            </div>
            <div class="card mr-4 col-12 col-md-3 col-lg-3" style="width: 15rem;">
              <img class="card-img-top " style="width:100px;margin:auto" :src="homePage.homeCardThreeImage" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{ homePage.homeCardThreeTitle }}
           </p>
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:100!important;color:#3a5768!important;">{{ homePage.homeCardThreeDesc }}
                </p>
              </div>
            </div>
            <div class="row mt-16 mb-15  pb-10">
              <div class="col-12 scol-sm-12 col-lg-6 col-md-6">
              <g-image  style="width:95%;height:100%" class="whychoose" :src="homePage.homeThirdCompImage" />
                </div>            
                      
                <div style="fontWeight:700!important;color:#3a5768!important;" class=" col-12 scol-sm-12 col-lg-6 col-md-6">
                  <h4 class="mt-5 whychoose" style="fontWeight:700!important;color:#3a5768!important;">{{homePage.homeThirdCompTitle}}</h4>
              <h6 style="fontWeight:400" class="whychoose">{{homePage.homeThirdCompDesc}}</h6>
              <div style="fontWeight:700" class=" mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span>{{ homePage.homeThirdCompChecklistOne }}
              </div>             
              <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span>{{ homePage.homeThirdCompChecklistTwo }}</div>
              <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> {{ homePage.homeThirdCompChecklistThree }} </div>
              <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> {{ homePage.homeThirdCompChecklistFour }}
              </div>             
              <div style="fontWeight:700" class="mt-6 mb-12 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> {{ homePage.homeThirdCompChecklistFive }}</div>
 
            </div>
                      
            </div>
            <div style="color:#3a5768" class="row mt-10 ">
              <div class="col-12 scol-sm-12 col-lg-4 col-md-4 ">
             <h2 style="color:#3a5768!important;fontWeight:700" class="mt-5 titleheading">{{ homePage.homeFourCompTitle }}
            </h2>
          
             <h5 style="fontWeight:400;;color:#3a5768!important" class="mt-2 titleheading">
              {{ homePage.homeFourCompDesc }}
            </h5>
              </div>
              <div class="col-12 scol-sm-12 col-lg-8 col-md-8 ">
                <div class="row">
                  <div class="col-5 col-lg-5 col-md-5 mt-10">
    <g-image class="about titleheading" style="width:100%;border-radius: 10px;" :src="homePage.homeFourCompImage1" />  
  </div>
  <div class="col-lg-7 col-md-7 col-sm-6 col-6  image_margin">
    <g-image class="about " style="width:100%;border-radius: 10px;" :src="homePage.homeFourCompImage2" />  
  </div>
  </div>        
  <div class="row">
    <div class="col-1"></div>
    <div class="col-5 mt-10">
<g-image class="about" style="width:100%;border-radius: 10px;" :src="homePage.homeCompFourImage3" />  
</div>
<div class="col-5">
<g-image class="about" style="width:100%;border-radius: 10px;" :src="homePage.homeCompFourImage4" />  
</div>
</div>        
  </div>
  
              </div>
            
              <div style="color:#3a5768;marginTop:100px!important" class="row mt-12">
                <h2   style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{ homePage.homeFiveCompTitle }}
                </h2>
              <h6 class="mt-2 mb-4 titleheading" style="textAlign:center;width:100%;fontWeight:300" >{{homePage.homeFiveCompDesc}}</h6>
              </div>
          </div>
          <div style="color:#3a5768!important;fontWeight:700!important" class="row mb-10 mt-7">
            <div class="row">
               <div class="col-6">
                <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompOneLeftTitle}}</h4>
                <h6 style="text-align: right;">{{homePage.homeFiveSubCompOneLeftDesc}}</h6>
               </div>
               <div class="col-6">
                <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompTwoRightTitle}}</h4>
                <h6>{{homePage.homeFiveSubCompTwoRightDesc}}</h6>
               </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompThreeLeftTitle}}</h4>
                  <h6 style="text-align: right;">{{homePage.homeFiveSubCompThreeLeftDesc}}</h6>
                 </div>
                 <div class="col-6">
                  <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompFourRightTitle}}</h4>
                  <h6>{{homePage.homeFiveSubCompFourRightDesc}}</h6>
                 </div>
               </div>
               <div class="row">
                <div class="col-6">
                  <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompFiveLeftTitle}}</h4>
                  <h6 style="text-align: right;">{{homePage.homeFiveSubCompFiveLeftDesc}}</h6>
                 </div>
                <div class="col-6">
                  <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompSixRightTitle}}</h4>
                  <h6>{{homePage.homeFiveSubCompSixRightDesc }}
                  </h6>
                 </div>
               </div>
               <div class="row">
                <div class="col-6">
                  <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompSevenLeftTitle}}</h4>
                  <h6 style="text-align: right;">
                    {{ homePage.homeFiveSubCompSevenLeftDesc }}
                  </h6>
                 </div>
                <div class="col-6">
                  <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompEightRightTitle}}</h4>
                  <h6>{{ homePage.homeFiveSubCompEightRightDesc }}
                  </h6>
                 </div>
               </div>

          </div>
          <div style="color:#3a5768;marginTop:100px!important" class="row mt-12">      
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
    },data(){
      return{homePage:[],      imageUrl: 'https://www.efulfillmentservice.com/wp-content/uploads/2015/03/Aisle-Shot-2.jpg'
}},
    mounted(){
      // axios.get('https://api.storyblok.com/v2/cdn/stories/homefirst?version=draft&token=a0JvifJUK2XuIzV1Lhblvwtt&cv=1704612574').then(
   axios.get("https://api.storyblok.com/v2/cdn/stories/homepage?version=draft&token=a0JvifJUK2XuIzV1Lhblvwtt&cv=1706463359").then(
      data=>{
     console.log(data.data.story)
        this.homePage= data.data.story.content;
   
   }).catch(error=>{
    console.log(error);
});
    },
    metaInfo: {
    title: 'Order Fulfillment Services | Warehousing & Distribution | Total Fulfilment',
//   meta: [
//  {name: "description", content: "Total Fulfilment provides comprehensive order fulfillment services, warehousing, and distribution solutions for online retailers and wholesalers. We store, pick, pack, and ship orders efficiently to meet consumer demands. Leverage our industry-leading pick and pack services, secure warehousing, and powerful inventory management tools."},
//                     { property: "og:title", content: 'Order Fulfillment Services | Warehousing & Distribution | Total Fulfilment'},
//                     {property: "og:description", content: "Total Fulfilment provides comprehensive order fulfillment services, warehousing, and distribution solutions for online retailers and wholesalers. We store, pick, pack, and ship orders efficiently to meet consumer demands. Leverage our industry-leading pick and pack services, secure warehousing, and powerful inventory management tools."},
//                      { key: 'keywords',property: "og:keywords" , content: "order fulfillment services, warehousing, distribution, pick and pack, ecommerce fulfillment, inventory management, third-party logistics, 3pl" }
//     ,            
//  ]
  },
}
</script>
<style scoped >
@media(max-width:470px){
   .fullHeadingMob {
margin-left: 0px !important;
font-size: 27px;
  }
  .app_detail{
    font-size: 13px;
  }
  .whychoose{
  margin-left: 13px;
  margin-right: 10px;
  }
  .titleheading{
    margin-left: 13px !important;
    margin-right: 13px !important;
  }
  .image_margin{
   margin-right: 2px!important;

  }
}
</style>