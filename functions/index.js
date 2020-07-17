const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
//v1 for deploy
exports.setUserData = functions.https.onRequest(async (req, res) => {  
  const data = req.body;
  const countField = Object.keys(data).length;
  let correctFormField = 0;
  for (let field in data) {
      // === validations ????
      if (field !== 'formRate' && data[field].length > 0) {
        correctFormField++;
      }
    }
  data.formRate = Math.ceil((countField / 100 * correctFormField) * 100) / 100;
  functions.logger.info('body', req.body);
  const userData = await admin.firestore().collection('users/{id}').update(data);
  functions.logger.info('userData', userData);
  res.json({
    user: userData
  });
});
// v2 for local test
exports.checkUserData = functions.firestore.document('users/{id}')
  .onWrite(async (change, context) => {
    console.log('change', change.after.data());
    console.log('context', context);
    const data = change.after.data();
    const countField = Object.keys(data).length - 1; // wite list ???
    let correctFormField = 0;
    for (let field in data) {
      // === validations ????
      if (field !== 'formRate' && data[field].length > 0) {
        correctFormField++;
      }
    }
    console.log('countField', countField);
    console.log('correctFormField', correctFormField);
    data.formRate = Math.ceil((100 /countField * correctFormField) * 100) / 100;
    const userData = await admin.firestore().collection('users').doc(context.params.id).set(data);
    console.log('data', data);
    
  });


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
