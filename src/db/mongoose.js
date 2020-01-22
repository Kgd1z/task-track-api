const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
  console.log("Successfully connected to database");
}).catch((e)=>{
  console.log("Error in connecting to database");
})




// const me =new User({
//    name:'  Mike  ',
//    email:'KGHHKGD@gmail.com',
//    password:'phone0273'
//
// })
//
// me.save().then(()=>{
//   console.log(me);
// }).catch((error)=>{
//   console.log('Error',error);
// })


// const task= new Task({
//   description:'   Learn the math   ',
//   completed:false
//
// })
// task.save().then(()=>{
//   console.log(task);
// }).catch((error)=>{
//   console.log(error);
// })
