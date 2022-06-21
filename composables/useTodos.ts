const useTodos = () =>{
// fetching data that updates  on function call
    const {data: todos, refresh} = useAsyncData("todos",  () => {
        return $fetch("/api/todo")
    })



// function to add new todo.
    const addTodo = async (item) =>{
        if (!item) return ;
// post request, path then method options, and the payload.
        await $fetch('/api/todo', {method:"POST" , body:{item: item}})
        refresh()
    };

    const updateTodo = async (id) =>{
        await $fetch(`/api/todo/${id}`, {method:"put"})
        refresh()
    }

    const deleteTodo = async  (id) =>{
        await $fetch(`/api/todo/${id}`, {method:"DELETE"})
        refresh()
    }

    // returning all todo data and functions to be used elsewhere.
    return {todos , addTodo, updateTodo , deleteTodo}
}

export default useTodos;
