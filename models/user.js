// grab the mongoose module
var mongoose = require('mongoose');

function ssoValidator(val){
    var reg = /\d{9}/;
    return reg.test(val);
}

var customValidator = [ssoValidator,'{PATH} can only contain numbers']



// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('user', {
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    position: {type: String, required: true},
    sso: {
      type: String,
      validate: customValidator,
      required: true},
    field: {type: String, required: true},
    business: {type: String, required: true},
    location: {type: String, required: true},
    address: {type: String, required: true},
    travelQues: {type: String, required: true},
    relocateQues: {type: String, required: true},
    building: {type: String, required: true},
    phone: {
      type: String,
      validate: {
        validator: function(v) { //v is the input
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: "'{VALUE}' is not a valid phone number!"
      },
      required: true},
    email: {
      type: String,
      validate: {
        validator: function(word) { //v is the input
          return /\w@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/.test(word);
        },
        message: "'{VALUE}' is not a valid email"
      },
      required: true},
    technicalBack: {type: String, required: true},
    learningObject: {type: String, required: true},
    training: {type: String, required: true},
    certificates: {type: String, required: true},
    role:{type: String, required: true, default: "user"}
});
