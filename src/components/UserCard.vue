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
    <div class="user-card__info">
      <h3 class="user-card__title">{{ fullName }}</h3>
      <p class="user-card__age">{{ age }} {{ t('userList.years') }}</p>
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

  &__title {
     
      font-size: $font-size-lg; 
      font-weight: $font-weight-semibold;
      color: $dark-gray;
      margin-bottom: 0.5rem;
    
  }

  &__age {
    color: $dark-gray;
    font-size: $font-size-sm; 
    font-weight:  $font-weight-normal;
  }
}

</style>