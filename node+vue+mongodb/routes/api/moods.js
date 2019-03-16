//用来注册以及验证
const express=require('express')
const router=express.Router()
const Mood=require('../../models/Mood')//引入模型实例


//添加心情数据 api/moods
router.post('/add',(req,res)=>
{
    console.log(req.body);
    const moodFiles={}
    if(req.body.title) moodFiles.title=req.body.title;
    if(req.body.comment) moodFiles.comment=req.body.comment;
    if(req.body.time) moodFiles.time=req.body.time;
    new Mood(moodFiles).save().then(mood=>
        {
            res.json('mood ok');
        }).catch(err=>console.log(err));
})


//获取心情数据 get 
router.get('/',(req,res)=>
{
    Mood.find().then(mood=>
        {
            if(!mood) return res.status(404).json('没有内容')
            res.json(mood)
        }).catch(err=>res.status(404).json(err))
})


//获取单个信息
router.get("/:id",(req,res)=>
{
   Mood.findOne({_id:req.params.id}).then(mood=>
    {
        if(!mood) return res.status(404).json('没有内容')
        res.json(mood)
    })
    .catch(err=>res.status(404).json(err))
})

//编辑个人信息
router.post('/edit/:id',(req,res)=>
{
    const moodFiles={}
    if(req.body.title) moodFiles.title=req.body.title;
    if(req.body.comment) moodFiles.comment=req.body.comment;
    if(req.body.time) moodFiles.time=req.body.time;

        Mood.findByIdAndUpdate({_id:req.params.id},{$set:moodFiles},{new:true}).then(mood=>res.json(mood))
})


//删除信息接口 delete
router.delete('/delete/:id',(req,res)=>
{
        Mood.findByIdAndRemove({_id:req.params.id}).then(mood=>
            {
                mood.save().then(mood=>res.json(mood))
            }).catch(err=>res.status(404).json('删除失败'))
})



module.exports=router;//暴露路由