const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();
const cors = require('cors')({ origin: true });

exports.disableUser = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        try {
            const uid = req.query.uid;
            await admin.auth().updateUser(uid, { disabled: true });
            return res.status(200).send({
                success: true
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false
            })
        }
    });
});
