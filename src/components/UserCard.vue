<script setup lang="ts">
import { useUsers } from '@/composables/useUsers';
import type {User} from '@/types/user'
import { useI18n } from 'vue-i18n';

interface Props {
  user: User
}

const {t} = useI18n()

const props = defineProps<Props>()
const { calculateAge } = useUsers()

const fullName = `${props.user.name} ${props.user.lastName}`
const age = calculateAge(props.user.birthDate)

</script>

<template>
  <div class="user-card">
    <div class="user-info">
      <h3>{{ fullName }}</h3>
      <p class="user-age">{{ age }} {{ t('userList.years') }}</p>
    </div>
  </div>    
  
</template>

<style lang="scss" scoped>

.user-card {
  background: $white;
  border: 2px solid $gray;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.2s ease;
 

  &:hover {
    border-color: $primary;
    transform: translateY(-2px);
  }

  &-info {
    h3 {
      font-size: 1.25rem;
      color: $dark-gray;
      margin-bottom: 0.5rem;
    }

    &-age {
      color: $dark-gray;
      font-size: 0.875rem;
    }
  }
}

</style>