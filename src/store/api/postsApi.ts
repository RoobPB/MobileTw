import { db } from '../../../firebase-config';
import { collection, getDocs, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';


export const fetchPosts = (setPosts) => {
    return onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    });
  };

/*export const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }; */

  // Lägga till en post

export const addPost = async (postData) => {
    const docRef = await addDoc(collection(db, 'posts'), postData);
    return { id: docRef.id, ...postData };
  };

  
export const deletePost = async (postId) => {
    await deleteDoc(doc(db, 'posts', postId));
  };
