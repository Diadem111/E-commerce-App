import { db } from '../components/duplicateFire'; // update with your path to firestore config
import { doc, setDoc } from "firebase/firestore"; 

export const createNote = async (note) => {
    await setDoc(doc(db, 'notes', note.id), note);
};
createNote(note);