import { useEffect, useState } from "react"
import { db } from "../../firebase/config";
import { collection, addDoc, getDocs, setDoc } from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore";


const useToDo = () => {



  type ToDoType = {
    id?: string,
    details: string
}

const [event, setEvent] = useState<string>("")
const onChangeHandle = (e: any) => {
    setEvent(e.target.value)
}

const addToDo: ToDoType = {
    details: event,

}

const [toDoList, setToDoList] = useState<ToDoType[]>([])

const [loader, setLoader] = useState(false)


const onClickHandle = async () => {
    const docRef = await addDoc(collection(db, "toDo23"), addToDo)
    console.log("Document written with ID: ", docRef.id);
    setToDoList([...toDoList, { ...addToDo, id: docRef.id }])
    setEvent("")
}


useEffect(() => { getData() }, [])



const getData = async () => {
    try {
        setLoader(true)
        const querySnapshot = await getDocs(collection(db, "toDo23"));
        let dataArr: ToDoType[] = []
        querySnapshot.forEach((doc) => {
            dataArr.push({
                details: doc.data().details,
                id: doc.id
            })
        })
        setToDoList(dataArr)
    }
    catch (error) {
        console.log("error>>>", error);
    }
    finally { setLoader(false) }
}


const onDeleteHandler = (item: ToDoType) => {
    const filteredArr = toDoList.filter((value) => {
        if (item.id != value.id) {
            return (value)
        }
    })
    setToDoList(filteredArr)
}



const [isEdit, setIsEditing] = useState(false)
const [oldId, setOldID] = useState<string>()

const onEditHandler = (item: ToDoType) => {
    setIsEditing(true)
    setOldID(item.id)
    setEvent(item.details)
}


const onUpdateHandler =async (oldId) => {

    const updatedDoc = doc(db, "toDo23", oldId)
    await updateDoc(updatedDoc, {details:event})
  
    const newArray = toDoList.map((value) => {

     



        if (oldId == value.id) {
            let newitem: ToDoType = {
                details: event,
                id: value.id
            }
            return newitem
        }
        else { return value }
    })
    setIsEditing(false)
    setToDoList(newArray)
    setEvent("")
   
}

const [done, setDone] = useState<ToDoType[]>([])

const onDoneHandler =  (item) => {
    let doneArr: ToDoType[] = []


    toDoList.forEach((value) => {

        

        if (item.id == value.id)
         {
            let a = { details: value.details, id: value.id }
            doneArr.push(a)
        }

    })
    setDone([...doneArr ])
}

return {
    event,
    toDoList,
    loader,
    isEdit,
    oldId,
    onChangeHandle,
    onClickHandle,
    getData,
    onDeleteHandler,
    onEditHandler,
    onUpdateHandler


}
}

export default useToDo

