import useToDo from "./customHooks/useTodo"



const Todo = () => {

    const {
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
        onUpdateHandler } = useToDo()


    return (
        <div className="container m-5 ">
            <div className="row">
                <div className="col-md-4">
                    <input onChange={(e) => onChangeHandle(e)} value={event} type="text" className="form-control" placeholder="Write Task" aria-label="First name" />
                    <br />

                    {isEdit == false ?
                        <button onClick={() => onClickHandle()} type="button" className="btn btn-sm btn-outline-info ">Add</button> :
                        <button onClick={() => onUpdateHandler(oldId)} type="button" className="btn btn-sm btn-outline-info ">Update</button>}

                    <br />
                    {loader == true ? "Loading.." : ""}
                </div>

                <div className="m-4"> {
                    toDoList.map((item) => {
                        return <li>{item.details}

                            <button onClick={() => onDeleteHandler(item)} type="button" className="btn btn-sm btn-outline-info ms-2 ">Del</button>
                            <button onClick={() => onEditHandler(item)} type="button" className="btn btn-sm btn-outline-info ms-2 ">Edit</button>

                        </li>
                    })
                }
                </div>

            </div>
        </div>
    )
}

export default Todo