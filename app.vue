<script setup lang="ts">
const {todos, addTodo, updateTodo, deleteTodo} = useTodos();
const input = ref("");

const handleClick = () =>{
  addTodo(input.value);
  input.value=''
}
</script>

<template>
  <div class="container">
    <NCard class="cards">
      <h1>My ToDos</h1>
      <div class="add-todo">
        <input v-model="input" placeholder="add new todo..." type="text">
        <NButton @click=" handleClick">Add</NButton>
      </div>
    </NCard>
    <NCard @click=" () => updateTodo(todo.id)" class="card" v-for="todo in todos " :key="todo.id">
      <h4 :class="todo.completed ?  'complete': null">{{todo.item}}</h4>
      <p @click="() => deleteTodo(todo.id)">x</p>
    </NCard>
  </div>
</template>

<style scoped>
.container{
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}
.cards{
  padding: 2rem;

}
input{
  outline: none;
}

.add-todo{
  display: flex;
justify-content: space-between;
}

.card{
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.complete{
  text-decoration: line-through;
}
</style>
