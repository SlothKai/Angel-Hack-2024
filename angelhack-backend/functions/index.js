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

exports.getUsers = onRequest(
  {
    region: "asia-southeast1",
  },
  async (request, response) => {
    try {
      const usersRef = admin.firestore().collection("users");
      const snapshot = await usersRef.get();
      const users = [];

      snapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });

      // Fetch subcollections for each user
      await Promise.all(
        users.map(async (user) => {
          const { id } = user;
          const userRef = usersRef.doc(id);
          const subcollections = await userRef.listCollections();

          await Promise.all(
            subcollections.map(async (subcollection) => {
              const subcollectionName = subcollection.id;
              const subcollectionDocsSnapshot = await subcollection.get();
              const subcollectionDocuments = [];
              subcollectionDocsSnapshot.forEach((doc) => {
                subcollectionDocuments.push({ id: doc.id, ...doc.data() });
              });
              user[subcollectionName] = subcollectionDocuments;
            })
          );
        })
      );

      response.json({ users });
    } catch (error) {
      console.error("Error retrieving users:", error);
      response.status(500).send("error fetching users");
    }
  }
);

exports.applyEvents = onRequest(
  {
    region: "asia-southeast1",
  },
  async (request, response) => {
    try {
      // Set CORS headers
      response.set('Access-Control-Allow-Origin', '*');
      response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.set('Access-Control-Allow-Headers', 'Content-Type');

      // Handle preflight requests
      if (request.method === 'OPTIONS') {
        response.status(204).send('');
        return;
      }

      const { eventId, userId } = request.body;

      if (!eventId || !userId) {
        response.status(400).send("Missing eventId or userId");
        return;
      }

      // Add event and user ID to Firestore
      await db.collection('eventsRegister').add({
        eventId,
        userId
      });

      response.status(200);
    } catch (error) {
      console.error("Error adding user to event:", error);
      response.status(500);
    }
  }
);