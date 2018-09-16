var User= require('./model/user.js')
var Datastore = require('nedb')
var db = new Datastore()
module.exports=function(app){
    app.post("/haha",(req,res)=>{
        const customers = [
            {id: 1, firstName: 'John111', lastName: 'Doe'},
            {id: 2, firstName: 'Brad111', lastName: 'Traversy'},
            {id: 3, firstName: 'Mary111', lastName: 'Swansonâ'},
          ];
          res.send(customers)
          //res.json(customers);
    })
    app.get("/:username/:password/:configpws",(req,res)=>{
        var newUser=new User();
        newUser.usrname=req.params.username;
        newUser.pws=req.params.password;
        newUser.configpws=req.params.configpws;
        console.log("Register user success!!"+newUser.usrname+"  "+newUser.pws);
        newUser.save((err)=>{
            if(err)
                throw err;
        })
        res.send("success!!");
    })
    app.post('/register_user', function(req, res){
        console.log(req.body.username);
        console.log(req.body.password);
        var newUser=new User();
        newUser.usrname=req.body.username;
        newUser.pws=req.body.password;
        newUser.configpws=req.body.configpws;
        console.log("Register user success!!"+newUser.usrname+"  "+newUser.pws);
        newUser.save((err)=>{
            if(err)
                throw err;
        })
        var i=10;
       
        
        i=i-1;
        var element="<h1>Đăng ký tài khoản thành công!!</h1>"+
        "Quay lại sau "+
        i;

            res.send(element);
      
        //res.send(req.body)
    });

    db.insert([{ text: 'Get to the choppah!' }]) 

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post("/fetch-todos", function(req, res) {
  db.find({}, function(err, docs) {
    res.send(docs.map(function(doc) { return { id: doc._id, text: doc.text }}))
  })
})

app.post("/add-todo", function(req, res) {
  db.insert([{ text: req.body.text }], function (err, newDocs) {
    res.send(newDocs[0])
    console.log(newDocs)
  });
})

app.post("/edit-todo", function(req, res) {
  db.update({ _id: req.body.id }, {text: req.body.text}, { returnUpdatedDocs: true },  function (err, numAffected, doc, upsert) {
    
    res.send({ text: doc.text, id: doc._id })
  });
})

app.post("/complete-todo", function(req, res) {
  db.findOne({ _id: req.body.id }, function (err, doc) {
    db.update({ _id: req.body.id }, {completed: !doc.completed}, { returnUpdatedDocs: true },  function (err, numAffected, doc, upsert) { 
      res.send({ text: doc.text, id: doc._id, completed: doc.completed })
    })
  })
})

app.post("/complete-all", function(req, res) {
  db.find({ }, function (err, docs) {
    const areAllMarked = docs.every(todo => todo.completed)

    db.update({ }, {completed: !areAllMarked}, { returnUpdatedDocs: true }, function (err, numAffected, doc, upsert) { 
      res.send({ })
    })
  })
})

app.post("/clear-completed", function(req, res) {
  db.remove({ completed: true }, { multi: true }, function (err, numRemoved) {
    res.send(numRemoved);
  });
})

app.post("/delete-todo", function(req, res) {
  db.remove({ _id: req.body.id }, function (err, numRemoved) {
    res.send({ })
  });
})
}