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

export const addCollectionDB = async (boardObject) => {
  await fBaseDB.collection("mapboard").add(boardObject)
}

export const fetchMapBoardsDB = async () => {
  const getMapBoardsDB = await fBaseDB.collection("mapboard").get()
  const dbDocsArr = getMapBoardsDB.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })
  return dbDocsArr
}

export const fetchMapItemDB = async (id) => {
  const mapBoardsArr = await fetchMapBoardsDB()
  const filteredItem = mapBoardsArr.find(board => board.id === id && board)
  return filteredItem
}