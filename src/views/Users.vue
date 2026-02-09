<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import { useUsers } from '@/composables/useUsers';
import UserCard from '@/components/UserCard.vue';

const { fetchUsers, users, loading, error} = useUsers()
const {t} = useI18n()

onMounted( async() => {
  await fetchUsers()
})

</script>

<template>
  <h1>{{t('userList.title')}}</h1>

  <section class="users">

    <div v-if="loading" class="users__loading">
      {{ t('userList.loading') }}
    </div>

    <div v-else-if="error" class="users__error">
      {{ error }}
    </div>

    <UserCard v-for="(user, index) in users" :key="index" :user="user"/>
  </section>

</template>

<style lang="scss" scoped>

.users {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;

  &__loading {
  text-align: center;
  color: $dark-gray;
  padding: 3rem;
  font-size: $font-size-base;  
}

&__error {
  text-align: center;
  color: $error;
  padding: 3rem;
  font-size: $font-size-base;  
}

}

</style>