<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const token = ref('')
const VITE_GOOGLE_AUTH_CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID

const tmpToken = localStorage.getItem('token')
if (tmpToken) {
  token.value = tmpToken
}

const getToken = (event: StorageEvent) => {
  console.log(event)
  const newLocalStorage = event.newValue
  const oldLocalStorage = event.oldValue
  if (event.key === 'token') {
    token.value = newLocalStorage!
  }
  // const tmpToken = localStorage.getItem('token')
  // if (tmpToken) {
  //   token.value = tmpToken
  // }
}

const handleCredentialResponse = (response: any) => {
  localStorage.setItem('token', response.credential)
  console.log('Encoded JWT ID token: ' + response.credential)
  console.log(response)
  // if (localStorage.getItem('token')) {
  //   location.reload()
  // }
}

onMounted(() => {
  window.addEventListener('storage', getToken)
})

onUnmounted(() => {
  window.removeEventListener('storage', getToken)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
