import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword}  from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, updateDoc, arrayUnion} from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCaywzakE8Zq0gTfkw_s-cprZDx1efTkZY",
  authDomain: "deakin-web-app-cafb6.firebaseapp.com",
  projectId: "deakin-web-app-cafb6",
  storageBucket: "deakin-web-app-cafb6.appspot.com",
  messagingSenderId: "789217950848",
  appId: "1:789217950848:web:de0ee4010d3e3fcb9b3a65"
};

const app = initializeApp(firebaseConfig);
const dbs = getFirestore(app); 


const provider= new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const db= getFirestore();

export const addCollectionAndDocument= async (collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey)
  const batch=writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef, object.name.toLowerCase())
    batch.set(docRef,object)
  })
  await batch.commit()
  console.log('Transaction is successful!')
}

export const fetchStaffAndDoc=async ()=>{
  const collectionRef =collection(db,'staff')
  const q= query(collectionRef)
  const querySnap=await getDocs(q)
  const staffMap= querySnap.docs.reduce((acc, docSnapshot)=>{
    const {name,...items}=docSnapshot.data()
    acc[name.toLowerCase()]=items
    return acc
  },{})
  return staffMap
}

export const createUserDocFromAuth=async (userAuth,additionalInfomation={}) =>{
  if(!userAuth)return;
  const userDocRef=doc (db, 'marketplace_user', userAuth.uid);
  console.log(userDocRef)

  const userSnapshot=await getDoc(userDocRef);

  if(!userSnapshot.exists())
  {
    const {displayName , email}=userAuth;
    const createdAt=new Date();

  
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfomation
      })
    
    } catch (error) {
      console.log('Error in creating', error.message)
    }
  }
  return userDocRef;

}

export const getImageUrl= async (image)=>{

  const storage = getStorage();

  const metadata = {
    contentType: 'image/png'
  };

  const storageRef = ref(storage, 'images/' + image.name);
  const uploadTask =await uploadBytesResumable(storageRef, image, metadata);

  const ImgURL= await getDownloadURL(storageRef)
  return ImgURL
  
}

export const createuserjob = async (userAuth, additionalInfomation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'job_details', userAuth.Title);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { JobType, Title, JobDescription, Skill, ProjectLength, Min, Max, Hours, Image } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        Title,
        JobDescription,
        Skill,
        ProjectLength,
        Min,
        Max,
        Hours,
        Image,
        createdAt,
        ...additionalInfomation,
      });
    } catch (error) {
      console.log('Error in creating', error.message);
    }
  }
  return userDocRef;
};


export const jobCollection = collection(dbs, 'job_details');

export const fetchJobData = async () => {
  const querySnapshot = await getDocs(jobCollection);
  const jobDataArray = [];

  querySnapshot.forEach((doc) => {
    const jobData = doc.data();
    jobDataArray.push(jobData);
  });

  return jobDataArray;
};

export const createAuthUserWithEmailAndPassword=async(email,password) =>{
  if(!email  || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password)
}