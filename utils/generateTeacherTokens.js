const jwt = require('jsonwebtoken');  
function generateTeacherToken(teacher) {
    return jwt.sign(
        { login_id: teacher.login_id },  // Match the route logic
        process.env.JWT_KEY,
        { expiresIn: '1h' }
    );
}

module.exports = generateTeacherToken;