import {
  getDocs,
  getDoc,
  setDoc,
  doc,
  collection,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-init";
const patientRef = collection(db, "patient");
export const getPatientData = async (patientID) => {
  var snap = {};
  try {
    snap = await getDoc(doc(db, "patient", patientID));
    if (snap.exists()) {
      return { id: patientID, ...snap.data() };
    } else {
      return {};
    }
  } catch (err) {
    console.log(err);
  }

  //   const q = query(collection(db, "patient"),where(d));
  //   const patient = [];
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     patient.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     });
  //   });
  //   patient.forEach((pt) => {
  //     if (pt.id == patientID) {
  //       return pt;
  //     }
  //   });
  //   return {};
};
export const addPatient = async () => {
  await setDoc(doc(patientRef, "patient"), {
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"],
  });
};
