//用来注册以及验证
const express=require('express')
const router=express.Router()
const passport=require('passport')

const Profile=require('../../models/Profile')//引入模型实例

//请求为get  路由为api/profiles/test  公共数据
router.get('/test',(req,res)=>
{
    res.json('test ok')
})


//添加个人信息post api/profiles/add
router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>
{
        const profielFields={}
        if(req.body.type) profielFields.type=req.body.type
        if(req.body.article) profielFields.article=req.body.article
        if(req.body.note) profielFields.note=req.body.note

        new Profile(profielFields).save().then((profile)=>
        {
            res.json('profile ok')
        })
})

//获取所有信息 get api/profiles
router.get("/",passport.authenticate('jwt',{session:false}),(req,res)=>
{
   Profile.find().then(profile=>
    {
        if(!profile) return res.status(404).json('没有内容')
        res.json(profile)
    })
    .catch(err=>res.status(404).json(err))
})


//获取单个信息
router.get("/:id",passport.authenticate('jwt',{session:false}),(req,res)=>
{
   Profile.findOne({_id:req.params.id}).then(profile=>
    {
        if(!profile) return res.status(404).json('没有内容')
        res.json(profile)
    })
    .catch(err=>res.status(404).json(err))
})

//编辑个人信息
router.post('/edit/:id',passport.authenticate('jwt',{session:false}),(req,res)=>
{
        const profielFields={}
        if(req.body.type) profielFields.type=req.body.type
        if(req.body.article) profielFields.article=req.body.article
        if(req.body.note) profielFields.note=req.body.note

        Profile.findByIdAndUpdate({_id:req.params.id},{$set:profielFields},{new:true}).then(profile=>res.json(profile))
})


//删除信息接口 delete
router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res)=>
{
        Profile.findByIdAndRemove({_id:req.params.id}).then(profile=>
            {
                profile.save().then(profile=>res.json(profile))
            }).catch(err=>res.status(404).json('删除失败'))
})








module.exports=router;//暴露路由