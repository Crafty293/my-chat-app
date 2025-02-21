<template>
  <main>
    <div :class="$style.container">
      <header :class="$style.header">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/chat">Chat</router-link>
        |
        <router-link to="/signup">Signup</router-link>
       
      </header>

      <router-view />
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>

<style module>
.container {
  max-width: fit-content;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
}
</style>
