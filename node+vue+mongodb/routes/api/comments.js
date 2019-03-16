//用来注册以及验证
const express=require('express')
const router=express.Router()
const Comment=require('../../models/Comment')//引入模型实例


//添加心情数据 api/comments
router.post('/add',(req,res)=>
{
    console.log(req.body);
    const commentFiles={}
    if(req.body.name) commentFiles.name=req.body.name;
    if(req.body.comment) commentFiles.comment=req.body.comment;
    if(req.body.response) commentFiles.response=req.body.response;
    new Comment(commentFiles).save().then(comment=>
        {
            res.json('comment ok');
        }).catch(err=>console.log(err));
})


//获取心情数据 get 
router.get('/',(req,res)=>
{
    Comment.find().then(comment=>
        {
            if(!comment) return res.status(404).json('没有内容')
            res.json(comment)
        }).catch(err=>res.status(404).json(err))
})


//获取单个信息
router.get("/:id",(req,res)=>
{
   Comment.findOne({_id:req.params.id}).then(comment=>
    {
        if(!comment) return res.status(404).json('没有内容')
        res.json(comment)
    })
    .catch(err=>res.status(404).json(err))
})

//编辑个人信息
router.post('/edit/:id',(req,res)=>
{
    const commentFiles={}
    if(req.body.name) commentFiles.name=req.body.name;
    if(req.body.comment) commentFiles.comment=req.body.comment;
    if(req.body.response) commentFiles.response=req.body.response;
        Comment.findByIdAndUpdate({_id:req.params.id},{$set:commentFiles},{new:true}).then(comment=>res.json(comment))
})


//删除信息接口 delete
router.delete('/delete/:id',(req,res)=>
{
        Comment.findByIdAndRemove({_id:req.params.id}).then(comment=>
            {
                comment.save().then(comment=>res.json(comment))
            }).catch(err=>res.status(404).json('删除失败'))
})



module.exports=router;//暴露路由