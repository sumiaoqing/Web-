<template>
<div class="assessment">
  <div class="title">
    <mu-icon value="mood" color="#1d3653" />
    <span>自我评价</span>
  </div>


  <mu-icon value="add" mini class="demo-float-button awardBtn" @click="openAssessment" style="color:red"/>
  <!-- <mu-button color="orange">
    <mu-icon value="add" mini class="demo-float-button awardBtn" @click="openAssessment"></mu-icon>
  </mu-button> -->




  <mu-dialog :open="assessmentDialog" title="自我评价" @close="closeAssessment">
      <mu-row gutter>
        <mu-col width="100" table="100" desktop="100">
          <mu-text-field placeholder="进行自我评价"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="assessmentContent" />
        </mu-col>
      </mu-row>
    <mu-button slot="actions" @click="closeAssessment">关闭</mu-button>
    <mu-button slot="actions" @click="assessmentData" >确定</mu-button>
  </mu-dialog>

  <div class="assessment-content">
      <div v-if="assessmentEmpty" class="empty">请添加荣誉奖项</div>
      <div v-for="(item,index) in assessments" v-else class="list">
          <mu-row gutter>
            <mu-col width="100" table="100" desktop="90">
               <span class="content-font"> • {{item}}</span>
            </mu-col>
            <mu-col width="100" table="100" desktop="10">
              <a href="javascript:;" class="deleteBtn" @click="deleteAssessment(index)">
                <mu-icon value="delete" color="#fff" />
              </a>
            </mu-col>
          </mu-row>
      </div>
  </div>
</div>
</template>
<style></style>
<script>
  export default {
  data () {
    return {
      assessmentDialog:false,
      assessmentContent:"",
      assessments:[],
      assessmentEmpty:true
    }
  },
  methods: {
    openAssessment() {
      this.assessmentDialog = true
    },
    closeAssessment () {
      this.assessmentDialog = false
    },
    assessmentData(){
      this.assessments.push(this.assessmentContent);
      this.assessmentContent = "";
      this.assessmentDialog = false;
      this.assessmentEmpty = false;
    },
    deleteAssessment(index){
      this.assessments.splice(index,1);
      if(this.assessments.length==0){
          this.assessmentEmpty = true;
      }
    },
  }
}
</script>