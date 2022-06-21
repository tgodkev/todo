
import {db} from '../../db'
import {v4 as uuid} from   'uuid'
import {createError, sendError, useBody} from "h3";

export default  defineEventHandler(async (e) => {
    console.log({e})
    // extracting the method
    const method = e.req.method;

    if(method === 'GET'){
        return db.todos;
    }

    if(method === 'POST'){
        // composable to get body
        const body = await useBody(e);
        console.log(body)
        if(!body.item) {
            const NotFoundError = createError({
                statusCode: 400,
                statusMessage: "No Item Provided",
                data: {}
            })
            sendError(e, NotFoundError)
        }

        const newToDo = {
            id: uuid(),
            item: body.item,
            completed: false,
        }
        db.todos.push(newToDo)
        return  newToDo;
    }
})
