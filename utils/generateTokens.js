const jwt = require('jsonwebtoken');  

function generateToken(user) { 
    return jwt.sign(
        { id: user.id },  
        process.env.JWT_KEY,                
        { expiresIn: '1h' }                 
    );
}
module.exports = generateToken;