import { v4 as uuidv4 } from 'uuid'
import { fBaseDB, fBaseStorage } from "Apis/fBase"

export const getToday = () => {
  let year = new Date().getFullYear()
  let month = 1 + new Date().getMonth() 
  let day = new Date().getDate()
  month = month >= 10 ? month : `0${month}`
  day = day >= 10 ? day: `0${day}`
  return `${year}-${month}-${day}`
}

export const uploadImgAsync = async (user, imgFiles) => {
  return Promise.all(imgFiles.map(async file => {
    const path = `${user.uid}/${uuidv4()}`
    const uploadTask = await fBaseStorage.ref(path).put(file)
    const fileURL = await uploadTask.ref.getDownloadURL()
    return fileURL
  }))
}

export const deleteImgAsync = item => item.uploadImgPath.map(async (imgPath) => await fBaseStorage.refFromURL(imgPath).delete())

export const addCollectionDB = async (boardObject) => await fBaseDB.collection("mapBoards").add(boardObject)

export const getMapBoardsDB = async () => {
  const getMapBoardsDB = await fBaseDB.collection("mapBoards").get()
  const dbDocsArr = getMapBoardsDB.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })
  return dbDocsArr
}

export const getMapItemDB = async (boardId) => {
  const dbItem = await fBaseDB.doc(`mapBoards/${boardId}`).get()
  return dbItem.data()
}

export const deleteMapItemDB = async (item) => {
  await fBaseDB.doc(`mapBoards/${item.id}`).delete()
  if(item.uploadImgPath.length > 0) deleteImgAsync(item)
}

export const updateMapItemDB = async (boardId, updateObject) => await fBaseDB.doc(`mapBoards/${boardId}`).update(updateObject)