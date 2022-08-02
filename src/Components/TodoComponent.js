import React, { useState } from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import ListGroup from 'react-bootstrap/ListGroup';
import { ImBin } from "react-icons/im";
import Button from "react-bootstrap/Button";


const TodoComponent = () => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    
    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleAddClick = (e) => {
        const idx = {
            id: todo.length == 0 ? 1 : todo[todo.length - 1].id + 1,
            taskName: task,
          };
        setTodo((todo)=>[...todo,idx]);
       setTask("");
    }

    const handleRemClick = (id) => {
        setTodo(todo.filter((idx) => idx.id !== id));
      };

 
  return (
        <>
            <div className='container my-5'>
                <div className ="section-title">
                    <h2>Todo List</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                </div>
                <div className='d-flex justify-item-between align-items-center '>
                    <InputGroup className="">
                        <Form.Control
                        type="text"
                        placeholder="Enter you todo Task"
                        autoFocus
                        value={task}
                        onChange={handleChange}
                        />
                    </InputGroup>
                    <Button variant="danger" className="mx-2 my-3" onClick={handleAddClick}>
                AddtoList 
              </Button>
                </div>
                <h4>Task List</h4>
                <ListGroup>
                    {todo && todo.map((e, Index) => {
                                return(
                                    <ListGroup.Item className="m-1 d-flex justify-content-between align-item-center">{e.taskName}
                                    <ImBin type="button" style={{color:"#e03a3c"}} onClick={() => handleRemClick(e.id)} />
                                    </ListGroup.Item>
                                )
                            })}
                </ListGroup>
            </div>
       </>
  )
}

export default TodoComponent