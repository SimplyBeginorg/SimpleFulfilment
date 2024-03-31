<template>
    <Layout>
      <div style="overflow-x:hidden;" class="container ">
        <div style="paddingTop:0px!important"  class="row  mt-10">
            <h2 class="col-12" style="color:#3a5768!important;fontWeight:700;paddingTop:0px!important;paddingBottom:0px!important">{{storePage.FirstComponentTitle}}</h2>
        </div>
        <div class="row">
          <div class="col-12" style="paddingTop:0px!important;paddingBottom:0px!important">
            <h3 style="color:#3a5768!important">   
              {{ storePage.FirstComponentDesc }} 
            </h3>
          </div>
        </div>
        <div class="row">
            <h6 class="col-12" style="color:#3a5768!important;paddingTop:0px!important;paddingBottom:0px!important">{{ storePage.FirstComponentDesc1 }} </h6>
        </div>
        <div  class="row  mt-10 mb-10">
            <g-image class="small-phone" style="overflow:hidden;width:80%;height:400px;borderRadius:10px;margin:auto; " :src="storePage.FirstCompImage"></g-image>
          </div>
    </div>
   
    <div style="color:#3a5768" class="container mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                <h5 style="color:#3a5768;fontWeight:700;textAlign:center">{{storePage.SecondComponentCardOneTitle
                }}</h5>
                <p style="fontSize:14px;textAlign:center">{{ storePage.SecondComponentCardOneDesc}}</p>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <h5 style="color:#3a5768;fontWeight:700;textAlign:center">{{storePage.SecondComponentCardTwoTitle}}</h5>
              <p style="fontSize:14px;textAlign:center">
                 {{ storePage.SecondComponentCardTwoDesc                 }}
              </p>   
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <h5 style="color:#3a5768;fontWeight:700;textAlign:center">{{ storePage.SecondComponentCardThreeTitle }}
                </h5>
                <p style="fontSize:14px;textAlign:center">{{storePage.SecondComponentCardThreeDesc}}</p>

            </div> 
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-5">
              <div class="p-4" style="backgroundColor:#EAF6FA;border-radius: 25px;">
                <h5 style="color:#3a5768;fontWeight:700;">{{storePage.ThirdComponentCardOneTitle}}
                </h5>
                <h6 style="color:#3a5768!important;">{{storePage.ThirdComponentCardOneDesc}}</h6>
                <h6 style="color:#3a5768!important;">
                  {{ storePage.ThirdComponentCardOneDesc1 }}
                </h6 >
              </div>
              	
              <div class="p-4 mt-5" style="backgroundColor:#E8FCF6;border-radius: 25px;">
                <h5 style="color:#3a5768;fontWeight:700">{{storePage.ThirdComponentCardTwoTitle}}</h5>
                <h6 style="color:#3a5768!important;">{{ storePage.ThirdComponentCardTwoDesc }}            </h6>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-7 mt-10">
                <g-image
                style="marginLeft:10px;marginRight:10px;width:85%;border-radius:50px;" 
               :src="storePage.ThirdCompImage"></g-image>         
            </div>
            <div  class="row mt-5 mb-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <h5 style="color:#3a5768;fontWeight:700;textAlign:center">{{ storePage.FourthComponentCardOneTitle }}
                    </h5>
                    <p style="color:#3a5768!important;fontSize:14px;textAlign:center">{{storePage.FourthComponentCardOneDesc}}</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <h5 style="color:#3a5768;fontWeight:700;textAlign:center">{{storePage.FourthComponentCardTwoTitle}}</h5>
                  <p style="color:#3a5768!important;fontSize:14px;textAlign:center">{{ storePage.FourthComponentCardTwoDesc }}
                  </p>   
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <h5 style="color:#3a5768;fontWeight:700;textAlign:center">{{ storePage.FourthComponentCardThreeTitle }}
                    </h5>
                    <p style="color:#3a5768!important;fontSize:14px;textAlign:center">{{storePage.FourthComponentCardThreeDesc }}
                    </p>
    
                </div> 
              </div>
             
          </div>
    </div>
    <div class="container" >
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
             <div class="p-4 mt-5" style="backgroundColor:#F6F5EF;border-radius: 25px;">
                 <h4 style="color:#3a5768;fontWeight:700">{{ storePage.FiveComponentLeftCardOneTitle }}

                 </h4>
                 <h6 style="color:#3a5768!important;">
                  {{ storePage.FiveComponentLeftCardOneDesc }}
                 </h6>
                 
               </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
             <div class="p-4 mt-5" style="backgroundColor:#F6F5EF;border-radius: 25px;">
                 <h4  style="color:#3a5768;fontWeight:700">{{ storePage.FiveComponentRightCardOneTitle }}
                 </h4>
                 <h6 style="color:#3a5768!important;">
                  {{ storePage.FiveComponentRightCardOneDesc }}
                 </h6>
              
               </div>
            </div>  
         </div>
         <div class="row">
             <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                 <div class="p-4 mt-5" style="backgroundColor:#F6F5EF;border-radius: 25px;">
                     <h4 style="color:#3a5768;fontWeight:700">{{storePage.FiveComponentLeftCardTwoTitle }}
                     </h4>
                     <h6 style="color:#3a5768!important;">{{storePage.FiveComponentLeftCardTwoDesc }}
                     </h6>
                     
                   </div>
             </div>
             <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                 <div class="p-4 mt-5" style="backgroundColor:#F6F5EF;border-radius: 25px;">
                     <h4 style="color:#3a5768;fontWeight:700">{{storePage.FiveComponentRightCardTwoTitle }}
                     </h4>
                     <h6 style="color:#3a5768!important;">{{storePage.FiveComponentRightCardTwoDesc }}   </h6>
                  
                   </div>
             </div>  
          </div>
    </div>
    <div class="container">
        <div style="color:#3a5768" class="row mt-10 mb-5">
            <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
              <g-image class="mt-10 about" 
              style="marginLeft:10px;height:70%;marginRight:10px;width:85%;border-radius:20px;" 
              :src="storePage.SixCompImage" />  
                  </div>
            <div class="col-12 scol-sm-12 col-lg-6 col-md-6 ">
                <div class="p-4" style="backgroundColor:#EAF6FA;border-radius: 25px;">
                    <h5 style="color:#3a5768;fontWeight:700">{{storePage.SixComponentCardOneTitle }}
                    </h5>
                    <h6 style="color:#3a5768!important;">{{storePage.SixComponentCardOneDesc}}</h6>
                   
                  </div>
                      
                  <div class="p-4 mt-5" style="backgroundColor:#E8FCF6;border-radius: 25px;">
                    <h5 style="color:#3a5768;fontWeight:700">{{storePage.SixComponentCardTwoTitle}}</h5>
                    <h6 style="color:#3a5768!important;">{{storePage.SixComponentCardTwoDesc }}
                    </h6>
                    
                  </div>
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
        return{storePage:[]}},
      mounted(){
        axios.get('https://api.storyblok.com/v2/cdn/stories/storepage?version=draft&token=a0JvifJUK2XuIzV1Lhblvwtt&cv=1707389930').then(
     data=>{
       console.log(data.data.story)
          this.storePage= data.data.story.content
     
     }).catch(error=>{
      console.log(error);
  });
      },
      metaInfo: {
    title: 'Secure Warehousing & Storage Solutions | Total Fulfilment',
//   meta: [
//  {name: "description", content: "Total Fulfilment offers safe and secure warehousing and storage solutions. With comprehensive security measures, including CCTV, perimeter fencing, and team member security checks, your goods are protected. Our climate-controlled facilities provide optimal conditions for garment storage and high-value items. Flexible storage options available."},
//  {property: "og:description", content: "Total Fulfilment offers safe and secure warehousing and storage solutions. With comprehensive security measures, including CCTV, perimeter fencing, and team member security checks, your goods are protected. Our climate-controlled facilities provide optimal conditions for garment storage and high-value items. Flexible storage options available."},

//  { property: "og:title", content: 'Secure Warehousing & Storage Solutions | Total Fulfilment'},
//                      { key: 'keywords',property: "og:keywords" , content: "secure warehousing, storage solutions, garment storage, high-value storage, climate-controlled facilities, flexible storage, secure distribution center" }
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
     .small-phone{
      height: 50%!important;
     }
  }
  </style>