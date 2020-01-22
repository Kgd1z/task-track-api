//CRUD
const {MongoClient,ObjectID} = require('mongodb')


const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
     if(error){
       return console.log('Unable to connect to database')
     }

     const db = client.db(databaseName)

db.collection('users').deleteMany({age:21

}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})

// db.collection('tasks').updateMany({
//     completed:false
// },{
//   $set:{
//     completed:true
//   }
// }).then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.log(error);
//
// })





// db.collection('users').updateOne({_id:new ObjectID("5dc6020f1113f02924b6b1b8")},{
//
//     $inc:{
//       age:1
//     }
// }).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
// console.log(error)
//
// })



//      db.collection('users').findOne({_id:new ObjectID('5dc733331546e1347c1ec163' )},(error,user)=>{
// if(error){
//   return console.log('error finding');
// }
// console.log(user);
//
//
//      })
//
//
// db.collection('users').find({age:21}).toArray((error,users)=>{
//   console.log(users)
// })
//
// db.collection('users').find({age:21}).count((error,count)=>{
//   console.log(count)
// })
//
// db.collection('tasks').findOne({_id:new ObjectID('5dc73521f102ac26b82b5b2a')},(error,task)=>{
//   if(error){
//     return console.log('Error finding task');
//   }
//   console.log(task);
// })
//
// db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
//   console.log(tasks)
// })
//


})
