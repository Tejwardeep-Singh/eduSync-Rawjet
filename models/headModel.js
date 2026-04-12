const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const headSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    }
});


const head = mongoose.model("head", headSchema);


async function registerUser(id, plainPassword) {
    try {
        
        const existingUser = await head.findOne({ id: id });
        if (existingUser) {
            return;
        }

       
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

       
        const head_user = new head({
            id: id,
            password: hashedPassword,
        });

      
        await head_user.save();
        console.log("User registered successfully:", id);
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

module.exports = head;



