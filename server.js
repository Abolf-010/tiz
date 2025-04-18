const express=require("express")
const mongo=require('mongodb').MongoClient
const bodyParser=require('body-parser');
const { UUID } = require("mongodb");
const app = express();
async function mongodb() {
    const connect=await mongo.connect('mongodb://localhost:27017')
    const users= connect.db('users')
    users.createCollection('user')
    const user=users.collection('user')
    

    
    const finder=user.find({}).sort({_id:1})
    while(await finder.hasNext()){
        let finded=await finder.next()
        if(finded["_id"]){
            // console.log("id:"+finded["_id"])
            // console.log("name:"+finded["name"])
            // console.log("last name:"+finded["userName"])
            // console.log("age:"+finded["age"]+"\n")
        }            
    }
    connect.close()
}
async function addUser(Uname,userName,age,email,pass){
    const connect=await mongo.connect('mongodb://localhost:27017')
    const users= connect.db('users')
    users.createCollection('user')
    const user=users.collection('user')
    const find=user.find({}).sort({_id:-1});
    const finded= await find.next();
    let lastId=finded["_id"]        
    user.insertOne({_id:lastId+1,name:Uname,userName:userName,age:age,email:email,pass:pass})
    return lastId+1
}
mongodb()

app.use(bodyParser.json())
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/assets', express.static(__dirname + '/assets/mian'));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/assets/index.html")
})
//  var userN,Uun,Upass,Uemail,Uid;
// async function us(){
    
//     const connect=await mongo.connect('mongodb://localhost:27017')
//     const users= connect.db('users')
//     users.createCollection('user')
//     const user=users.collection('user')
//     const finder=user.find({}).sort({_id:1})
//         while(await finder.hasNext()){
//         let finded=await finder.next()
//         if(finded["_id"]==id){
//             console.log(finded['_id'])
//             Uid=finded['_id'];
//             userN=finded['name']
//             Uun=finded['userName']
//             Upass=finded['pass']
//             Uemail=finded['email']
//             console.log(Uid)
//         }
//         return {name:userN,uName:Uun,pass:Upass,Uemail}

// }}
app.post('/a',(req,res)=>{
    res.send("/")
})
app.post('/main',(req,res)=>{
    
    
    res.send("/assets/main/main.html")
})

app.post('/sub',(req,res)=>{
    const a=req.body
//    us( addUser(a.Uname,a.userName,a.age,a.email,a.pass))
    
    res.send("/assets/main/main.html")
})
app.post('/log',(req,res)=>{
    const a=req.body
    var f=false
    async function acc(un,pass) {
        const connect=await mongo.connect('mongodb://localhost:27017')
        const users= connect.db('users')
        users.createCollection('user')
        const user=users.collection('user')
        const finder=user.find({}).sort({name:1})
        
        while(await finder.hasNext()){
        let finded=await finder.next()
        if(finded["name"]==un,finded['pass']==pass){
            // console.log("id:"+finded["_id"])
            // console.log("name:"+finded["name"])
            // console.log("last name:"+finded["userName"])
            // console.log("age:"+finded["age"]+"\n")
            f= true ;  
            // us(finded["_id"])
            res.send("main")
        }    
            
    }  
    if(!f){
        res.send('accept')
    }
    } 
    acc(a.Uname,a.pass)
})


app.get('/user',(req,res)=>{
    var userN,Uun,Upass,Uemail,Uid;
    async function us(){
        
        const connect=await mongo.connect('mongodb://localhost:27017')
        const users= connect.db('users')
        users.createCollection('user')
        const user=users.collection('user')
        const finder=user.find({}).sort({_id:1})
            while(await finder.hasNext()){
            let finded=await finder.next()
            if(finded["_id"]==1){
                // console.log(finded['_id'])
                Uid=finded['_id'];
                userN=finded['name']
                Uun=finded['userName']
                Upass=finded['pass']
                Uemail=finded['email']
                // console.log(Uid)
            }
            let a=[userN,Uun,Upass,Uemail,Uid]
            return a
    
    }}
    res.send(us())
    // console.log(a)
})
app.post('/user',(req,res)=>{
    
    // us(req.body.id)
    res.send("/assets/main/main.html")
})
app.post('/accept',(req,res)=>{
    res.send('/assets/login/accept.html')
})
app.post('/sigIn',(req,res)=>{
    res.send("/assets/signin/signin.html")
})
app.post('/logIn',(req,res)=>{
    res.send("/assets/login/login.html")
})
app.post('/user/userName',(req,res)=>{
    async function acc(un,pass) {
        const connect=await mongo.connect('mongodb://localhost:27017')
        const users= connect.db('users')
        users.createCollection('user')
        const user=users.collection('user')
        user.updateOne({id})
    }

    
})
app.post('/school',(req,res)=>{
    res.send("/assets/main/teach/teach.html")
})
app.post('/quiz',(req,res)=>{
    res.send("/assets/main/quiz/quiz.html")
})
app.post('/quiz/exam',(req,res)=>{
    res.send("/assets/main/quiz/exam.html")
})
app.post('/forum',(req,res)=>{
    res.send("/assets/main/forum/forum.html")
})
app.post('/forum/qustion',(req,res)=>{
    res.send("/assets/main/forum/forumQ.html")
})
app.post('/about',(req,res)=>{
    res.send("/assets/main/about/about.html")
})

app.get('/profile',(req,res)=>{
    res.send(toString(userN))
    
    
})
app.post('/profile',(req,res)=>{
    res.send("/assets/main/profile/porfile.html")
})
app.post('/home',(req,res)=>{
    res.send("/assets/main/main.html")
})
app.post('/school/teach',(req,res)=>{
    res.send("/assets/main/teach/content.html")
})
app.post('/school/teach/content',(req,res)=>{
    res.send("/assets/main/teach/subContent.html")
})

app.listen(80,()=>{
    console.log('app listen on port 80')
})