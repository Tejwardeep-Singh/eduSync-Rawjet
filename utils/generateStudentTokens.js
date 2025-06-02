const jwt = require('jsonwebtoken');  
function generateStudentToken(student) {
    return jwt.sign(
        { id: student.id},  // Match the route logic
        process.env.JWT_KEY,
        { expiresIn: '1h' }
    );
}

module.exports = generateStudentToken;