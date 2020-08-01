var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        min: 10
    },
    role:[{
      type:String,
      defalut:'user'
    }],
});

userSchema.methods.getName = function () {
    const greeting = this.name
      ? "User name is " + this.name
      : "I don't have a name";
    return greeting;
};
module.exports = function (connection) {
    return connection.model('User', userSchema);
}
//module.exports = mongoose.model('User', userSchema);