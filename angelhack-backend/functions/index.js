/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");

admin.initializeApp();

// Cloud Function to get total number of transactions
exports.getUsers = onRequest(
  {
    region: "asia-southeast1",
  },
  async (request, response) => {
    if (request.get("Authorization") !== "angelhack") {
      response.status(403).send("Unauthorized");
      logger.log("Unauthorized");
      return;
    }

    try {
      const usersRef = admin.firestore().collection("users");
      const snapshot = await usersRef.get();

      snapshot.forEach((doc) => {
        const users = doc.data();
      });

      response.json({});
    } catch (error) {
      console.error("Error retrieving users:", error);
      response.status(500).send(error);
    }
  }
);
