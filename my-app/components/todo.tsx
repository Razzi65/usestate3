import { useState } from "react"
import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"; 
import { async } from "@firebase/util";



const Todo = () => {

    type ToDoType = {
        id?: string,
        details: string
    }

    const [event, setEvent] = useState<string>("")
    const onChangeHandle = (e: any) => {
        setEvent(e.target.value)
    }

    const addToDo: ToDoType = {
        details: event
    }

    const [toDoList, setToDoList] = useState<ToDoType[]>([])
    
    const onClickHandle = async() => {

        const docRef = await addDoc(collection(db, "toDoNew"), addToDo)

        console.log("Document written with ID: ", docRef.id);

        setToDoList([...toDoList, {...addToDo, id:docRef.id}])
             
        }
   


    return (
        <div className="container m-5 ">
            <div className="row">
                <div className="col-md-4">
                    <input onChange={(e) => onChangeHandle(e)} type="text" className="form-control" placeholder="Write Task" aria-label="First name" />
                    <br />
                    <button onClick={() => onClickHandle()} type="button" className="btn btn-sm btn-outline-info ">Add</button>
                </div>

              <div className="m-4"> {
                    toDoList.map ((item)=> {
                        return <li>{item.details}</li>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Todo