var express = require('express'),
router = express.Router(),
User = require('../models/user.js') //links to user.js file

//POST (C.R.U.D. - CREATE)
router.post('/users', function (req, res) {
  var user = new User(req.body.user);
  user.save(function(err, user) {
  	if(err) {
  		res.json(err) //sends error messge to front end
  	}
  	res.json(user);
  })
});

//GET (C.R.U.D. - READ)
router.get('/users', function (req, res) {
  User.find(function(err,users){
    if(err){
      console.log(err)
    }
    res.json(users)
  })
});

router.get('/user/:_id', function (req, res) {
  User.findOne({_id: req.params._id},function(err,user){
    if(err){
      console.log(err)
    }
    res.json(user)
  })
});

//PUT (C.R.U.D. - UPDATE)
router.put('/user', function (req, res) {
  User.findOneAndUpdate({_id: req.body.user._id},{$set:req.body.user},{upsert:true}, function(err, doc) {
    if(err) {
      console.log(err);
    }
    res.json(doc);
  })
});


//DELETE (C.R.U.D. - DELETE)
router.delete('/user', function (req, res) {
  console.log(req.body)
  User.remove({ _id: req.body.user._id }, function(err) {
    if (!err) {
      console.log(err);
    }
    res.json('success');
  })
});

module.exports = router;
