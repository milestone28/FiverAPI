const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

 const deleteUser = async (req,res) => {
    const user = await User.findById(req.params.id);


        //res.send(payload);
        if(req.user.id !== user._id.toString()){
           return res.status(403).send("You can only delete your account.")
        }

        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted");
    

}

module.exports = {
    deleteUser
}