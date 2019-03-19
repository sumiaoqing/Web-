<template>
  <div id="comment">
    <el-form ref="form" :model="form" label-width="80px" id="com">
       <el-form-item label="您的昵称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="评论内容">
    <el-input type="textarea" v-model="form.comment"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit('form')">欢迎留下对本博客的意见以及建议</el-button>
  </el-form-item>
      </el-form>
  <el-collapse v-model="activeNames" @change="handleChange" id="com2">
  <el-collapse-item title="一致性 Consistency" name="1">
    <el-input type="textarea" :rows="2" placeholder="评论内容" v-model="textarea1">
</el-input>
<el-input
  type="textarea" :rows="2" placeholder="回复内容" v-model="textarea2">
</el-input>
  </el-collapse-item>
  </el-collapse>
  </div>
</template>
             
<script>
export default {
    data() {
        return {
          // nameData:{
          //   _id:'',
          //   name:'',
          //   comment:'',
          //   response:''
          // },
           activeNames: ['1'],
           textarea1:'',
           textarea2:'',
          tableData:[],
          form: {
          name: '',
          comment:'',
          response:'',
          _id:''
        }       
        }
    },
    created() 
    {
        this.getComment();
      },
    methods: {
      onSubmit(form) {
        this.$refs.form.validate(valid=>
            {
                if(valid)
                {
                    this.$axios.post('/api/comments/add',this.form).then(res=>
                    {
                        this.$message({message:'添加成功'})
                    }).catch(err=>
                    {
                        console.log(err);})
          }
        })
        
      },
      getComment()
      {
            this.$axios.get('/api/comments').then(res=>
            {
              this.tableData=res.data;
              for(let i=0;i<this.tableData.length;i++)
              {
                this.form[i]={_id:this.tableData[i]._id,name:this.tableData[i].name,comment:this.tableData[i].comment,response:this.tableData[i].response}
              }        
              console.log(this.form);
            }).catch(err=>console.log(err));
          
      },handleChange(val) {
        console.log(val);
      }
    } 
}
</script>

<style  lang="scss" scoped>
#com
{
  position:absolute;
  top:30px;
  left: 30px;
}
#com2
{
  position: absolute;
  left: 600px;
  top: 10px;
}
</style>
