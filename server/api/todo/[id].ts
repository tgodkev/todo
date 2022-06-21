
import {db} from '../../db'
import {createError, sendError} from 'h3'
export default defineEventHandler((e) => {
    const method = e.req.method;
    console.log(e)
    const context = e.context;
    // 1 extract path parameter.
    const {id}= context.params

    const findToDoById = (todoId) => {
        // 2 find todo in db
        let index ;
        const todo = db.todos.find((t, i) =>{
            if(t.id === todoId){
                index = i;
                return true;
            }
            return false
        })
        // 3 throw error if todo is not found.
        if(!todo) {
            const NotFoundError = createError({
                statusCode: 404,
                statusMessage: "Todo Not Found",
                data: {}
            });
            sendError(e, NotFoundError)
        }

        return {todo , index}
    }

    if(method === "PUT"){

            const {todo,index} = findToDoById(id)


        // 4 update the completed status.
        const updateTodo = {
            ...todo,
            completed: !todo.completed
        }
        db.todos[index] = updateTodo
        // 5 return updated todo.

        return updateTodo;

    }

    if(method === "DELETE"){
        const {index} = findToDoById(id)

        db.todos.splice(index, 1);
        return{
            message:"Item deleted",
        }

    }
})
