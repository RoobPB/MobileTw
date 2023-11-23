import { db } from '../../../firebase-config';
import { collection, getDocs, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';


export const fetchPosts = (setPosts, loggedInUserId) => {
    return onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(post => !post.private || post.createdBy === loggedInUserId);
      setPosts(postsData);
    });
};


export const addPost = async (postData, userId) => {
    const docRef = await addDoc(collection(db, 'posts'), {
      ...postData,
      createdBy: userId,
    });
    return { id: docRef.id, ...postData, createdBy: userId };
};


export const deletePost = async (postId) => {
    await deleteDoc(doc(db, 'posts', postId));
  };
