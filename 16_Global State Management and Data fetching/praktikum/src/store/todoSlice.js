import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const initialValue =[
    {
        id:uuidv4(),
        title:"lorem 1",
        done: false
      },
      {
        id:uuidv4(),
        title:"lorem 2",
        done: true
      },
    ]



export const todoSlice = createSlice({
    name: "passenger",
    initialState: {
        passengers: initialValue
},
    reducers: {
        addtodo: (state, action) => {
            let id = uuidv4()
            let newTodo = {
                id:id,
                title:action.payload,
                done:false
            }
            state.passengers = [...state.passengers,newTodo ]
        },
        delettodo: (state, action) => {
            state.passengers = state.passengers.filter((item) => {return item.id !== action.payload;}) 
        },
        edittodo : (state, action) => {
            state.passengers = state.passengers.map((todo) => todo.id === action.payload ? ({...todo, done: !todo.done}) : todo)}
        }
    }
)

export const {addtodo,delettodo,edittodo} = todoSlice.actions;
export default todoSlice.reducer