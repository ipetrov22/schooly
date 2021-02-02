const admin = require('firebase-admin');
const serviceAccount = require("./schooly-73851-firebase-adminsdk-jewm1-d3531cf2ae.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
