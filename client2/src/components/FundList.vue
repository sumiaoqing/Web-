<template>
    <div id="fundlist">
    </div>
</template>

<script>
export default {
    data() {
        return  {
            tableData:[]
        }  
    },
    created() {
        this.getProfile();
    },
    methods: {
        getProfile()
        {
            //获取数据
            this.$axios.get('/api/profiles').then(res=>
            {
            //    this.tableData=res.data;
               console.log(res.data);
            }).catch(err=>console.log(err));
        }
    },
}
</script>

