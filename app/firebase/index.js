import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import serviceAccount from '@/app/firebase/config';

if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const firestore = admin.firestore()