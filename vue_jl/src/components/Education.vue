<template>
	<div class="education">
	    <div class="title">
	        <mu-icon value="school" color="#1d3653" /> 
	    <span>教育背景</span>
			
	    </div>
	    <mu-icon value="add" mini class="demo-float-button educationBtn" @click="openEducation" style="color:red"/>
		
	      <mu-dialog :open="educationDialog" title="教育背景" @close="closeEducation">
	          <mu-row gutter>
	            <mu-col width="50" table="30" desktop="20">
	              <mu-date-input v-model="edu.startTime" label="开始时间" label-float full-width></mu-date-input>
	            </mu-col>
	            <mu-col width="50" table="30" desktop="20">
	             <mu-date-input v-model="edu.endTime" label="结束时间" label-float full-width></mu-date-input>
	            </mu-col>
	            <mu-col width="50" table="30" desktop="35">
	              <mu-text-field placeholder="毕业学校" fullWidth v-model="edu.school" />
	            </mu-col>
	            <mu-col width="50" table="30" desktop="25">
	              <mu-text-field placeholder="专业技能" fullWidth v-model="edu.professional" />
	            </mu-col>
	          </mu-row>
	          <mu-row gutter>
	            <mu-col width="100" table="100" desktop="100">
	              <mu-text-field placeholder="输入教育背景详情"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="edu.content" />
	            </mu-col>
	          </mu-row>
	        <mu-button slot="actions" @click="closeEducation" >关闭</mu-button>
	        <mu-button slot="actions"  @click="eduData" >确定</mu-button>
	      </mu-dialog>

	      <div class="education-content lists">
	          <div v-if="empty" class="empty">请添加教育背景</div>
	          <div v-for="(item,index) in edus" class="list" v-else>
	              <mu-row gutter>
	                  <mu-col width="50" table="30" desktop="30">
	                    <span class="title-font">{{item.startTime.getFullYear()+'-'+(item.startTime.getMonth()+1)+'-'+item.startTime.getDate()}}</span>
	                    <span class="title-font">--</span>
	                    <span class="title-font">{{item.endTime.getFullYear()+'-'+(item.endTime.getMonth()+1)+'-'+item.endTime.getDate()}}</span>
	                  </mu-col>
	                  <mu-col width="50" table="30" desktop="30">
	                    <span class="title-font">{{item.school}}</span>
	                  </mu-col>
	                  <mu-col width="50" table="30" desktop="30">
	                    <span class="title-font">{{item.professional}}</span>
	                  </mu-col>
	                  <mu-col width="50" table="5" desktop="10">
	                    <a href="javascript:;" class="deleteBtn" @click="deleteData(index)">
	                        <mu-icon value="delete" color="#fff" />
	                    </a>
	                  </mu-col>
	                </mu-row>
	                <mu-row gutter>
	                <mu-col width="100" table="100" desktop="100">
	                  <span class="content-font">{{item.content}}</span>
	                </mu-col>
	            </mu-row>
	          </div>
	      </div>
	  </div>
</template>
<style></style>
<script>
	export default{
		data(){
			return {
		      	educationDialog:false,
		      	empty:true,
		     	edu:{
			        startTime:"",
			        endTime:"",
			        school:"",
			        professional:"",
			        content:"",
		      	},
		      	edus:[],
		    }
		},
		methods: {
		    openEducation () {
		      this.educationDialog = true
		    },
		    closeEducation () {
		      this.educationDialog = false
		    },
		    eduData(){
		      this.edus.push(this.edu);
		      this.edu = {
		        startTime:"",
		        endTime:"",
		        school:"",
		        professional:"",
		        content:"",
		      };
		      this.educationDialog = false;
					this.empty = false;
		    },
		    deleteData(index){
		      this.edus.splice(index,1);
		      if(this.edus.length==0){
		          this.empty = true;
		      }
		    },
		},
	}
</script>
