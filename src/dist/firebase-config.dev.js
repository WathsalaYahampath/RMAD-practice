"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD9qfH2LZ349KjMCIN3wNXKlC3iiJjdBOI",
  authDomain: "rmwd-bf436.firebaseapp.com",
  projectId: "rmwd-bf436",
  storageBucket: "rmwd-bf436.appspot.com",
  messagingSenderId: "301696867551",
  appId: "1:301696867551:web:b78013db0df4df98cc1d6a",
  measurementId: "G-8CHCS1QHMT"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
//# sourceMappingURL=firebase-config.dev.js.map
