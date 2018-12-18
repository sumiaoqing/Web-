<template>
  <div class="container" id="app">

     <mu-row gutter>
      <mu-col width="100" tablet="30" desktop="25" class="col-3 resume-left">
    <v-headerimg></v-headerimg>
    <div class="baseInfo">
              <mu-text-field placeholder="输入年龄" type="text" icon="face" fullWidth :underlineShow="false"  v-model="value_age"/>
              <mu-text-field placeholder="输入住址" type="text" icon="place" fullWidth :underlineShow="false" v-model="value_address"/>

              <mu-text-field placeholder="输入电话号码" type="text" icon="phone" fullWidth :underlineShow="false" v-model="value_tel"/>
       
              <mu-text-field placeholder="输入邮箱" type="text" icon="mail" fullWidth :underlineShow="false" v-model="value_email" />
              <!-- suffix="@gmail.com" -->
          </div>
          <v-interest></v-interest>
    <v-skill></v-skill>
 </mu-col>

 <mu-col width="100" tablet="30" desktop="75" class="resume-right">
          <div class="name_mess">
              <mu-text-field placeholder="请输入姓名"  :underlineShow="false" class="nameInput" v-model="value_name"/>
              <div class="ambition">
                <mu-text-field placeholder="请输入求职志向" :underlineShow="false" v-model="value_future"/>
              </div>
          </div>
      
          <v-education></v-education>
        
          <v-work></v-work>
         
          <v-award></v-award>
     
          <v-assessment></v-assessment>

          <!-- <mu-button icon="camera" mini class="demo-float-button createPic" @click="createImg()" id="print"/> -->
          <mu-icon value="camera" mini class="demo-float-button createPic" @click="createImg()" id="print"/>
        
            <div v-if="this.flag">
            <div class="shadow"></div>
            <div class="resume">
                <mu-card>
                    <mu-card-media title="恭喜你，简历成功生成" subTitle="">
                      <img :src="url" />
                    </mu-card-media>
                    <mu-card-actions>
                      <a :href="url" target="_blank" download class="generatePic">下载简历</a>
                      <mu-button @click="closeResume()" >关闭预览</mu-button>
                    </mu-card-actions>
                  </mu-card>
            </div>
          </div>



      </mu-col>

     </mu-row>


  </div>
</template>


<script>
import work from './components/Work';
import skill from './components/Skill';
import interest from './components/Interest';
import award from './components/Award';
import assessment from './components/Assessment';
import education from './components/Education';
import headerImg from './components/HeaderImg';
import Html2canvas from '../static/js/html2canvas';

export default {  
  data()
  {
          return {
            value_name:"",
            value_address:"",
            value_tel:"",
            value_email:"",
            value_age:"",
            value_future:"",
            flag:"",
            url:""
          }
  },
 components:
        {
            'v-work':work,
            'v-skill':skill,
            'v-interest':interest,
            'v-assessment':assessment,
            'v-award':award,
            'v-education':education,
            'v-headerimg':headerImg
          
        },
        methods:{
        createImg(){
        document.getElementById("print").style.display="none";
        let height = document.getElementById("app").offsetHeight;   
        let width = document.getElementById("app").offsetWidth;
        let canvas = document.createElement("canvas"); 
        canvas.width = width * 2;  
        canvas.height = height * 2;  
        canvas.style.width = width + "px";  
        canvas.style.height = height + "px";
        let ctx = canvas.getContext("2d");
        let _this = this;
        Html2canvas(document.querySelector("#app"), {//回调函数
            onrendered: function(canvas){
                let img = canvas.toDataURL();
                //  console.log(img); //在console中会输出图片的路径，然后复制在浏览器一粘贴，就可以看到。
               _this.url=img;
               _this.flag=true;
            },
        });
    },
    closeResume(){
      this.flag=false;
      document.getElementById("print").style.display="inline";
    }
  }
}
</script>

<style>
.container{
  width:100%;
  max-width:1280px;
  margin: 0 auto;
}
</style>

