import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
  if (!userDoc.exists()) throw new Error('User not found');
  const userData = userDoc.data();
  if (userData.role === 'Patient') {
    throw new Error('Patient access is not allowed on this platform. Please use the mobile app.');
  }
  return {
    id: userCredential.user.uid,
    username: userData.username,
    role: userData.role,
  };
};