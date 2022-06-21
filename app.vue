<script setup lang="ts">
const {data: todos} = useFetch("/api/todo")
</script>

<template>
  <div class="container">
    <NCard class="cards">
      <h1>My ToDos</h1>
      <div class="add-todo">
        <input placeholder="add new todo..." type="text">
        <NButton>Add</NButton>
      </div>
    </NCard>
    <NCard class="card" v-for="todo in todos " :key="todo.id">
      <h4>{{todo.item}}</h4>
      <p>x</p>
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
</style>
