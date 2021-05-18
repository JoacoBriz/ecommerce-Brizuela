import { getFirestore } from './indexFirebase'

export const getCollection = (collectionName) => {
  let data = []
  const db = getFirestore()
  const itemCollection = db.collection(collectionName)
  itemCollection
    .get()
    .then((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => doc.data())
    })
    .catch((error) => console.log('Error Firestore => ', error))

  return data
}