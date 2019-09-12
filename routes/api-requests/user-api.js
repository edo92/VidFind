const firebaseInt = require('../../assets/service_account');
const admin = require('firebase-admin');


const db = admin.firestore();

module.exports = ( app, protect ) => {
    app.get('/get/projects/', async (req, res) => {
        //
    });
};