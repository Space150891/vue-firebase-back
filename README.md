# vue firebase back
Google cloud functions for setting rate to form
*Function doesn't work on free google account

## Project clone
```
git clone -b develop git@github.com:Code-n-DesignMaster/vue-firebase-back.git
```
The branch contain two functions
1 - setUserData - endpoint that set form rate before inserting into DB 
2 - checkUserData - listener that set form rate when data was saved into DB 

### Deploy into Firebase
* you need an firebase-tools
```
npm install -g firebase-tools
firebase deploy
```
### Local test
* You can test this functions on localhost
```
firebase emulators:start
```
Functions will be available  on http://localhost:4000/firestore


### Task what was
Create a Google Firestore account.
Build a form with 5 fields with autosave ability and show the percentage of form completion to the user. Assume each field accounts for 20% of the form.
Specifics:

Use TailwindCSS (tailwindcss.com) for design and UI
Use Cloud Firestore as database
Use Vue (https://vuejs.org/) and Vuexfire (https://vuefire.vuejs.org/vuexfire/) to save data in the database
Write a Cloud Function event to calculate form completion percentage in the backend.

Please, share the GitHub link of the assignment only with clear readme.md for the review.
In readme.md, please,  mention the case study, test assignment description, what approach you followed and why.