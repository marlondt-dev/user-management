<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router'; 
import { ref } from 'vue';
import { useUsers } from '@/composables/useUsers';

const {t} = useI18n()
const router = useRouter()
const {createUser, loading} = useUsers()

const name = ref('')
const lastName = ref('')
const birthDate = ref('')
const successMessage = ref('')

const errors = ref({
    name:'',
    lastName: '',
    birthDate: ''
})

const validateForm = (): boolean => {
    errors.value = {
        name: '',
        lastName: '',
        birthDate: ''
    }

    let isValid = true

    if(!name.value.trim()) {
        errors.value.name = t('userForm.errors.nameRequired')
        isValid = false
    }
   
    if(!lastName.value.trim()) {
        errors.value.lastName = t('userForm.errors.lastNameRequired')
        isValid = false
    }

    if(!birthDate.value) {
        errors.value.birthDate = t('userForm.errors.birthDateRequired')
        isValid = false
    } else {
            const selectedDate = new Date(birthDate.value)
            const today = new Date()

            if (isNaN(selectedDate.getTime())) {
            errors.value.birthDate = t('userForm.errors.invalidBirthDate')
            isValid = false
        }
        else if (selectedDate > today) {
            errors.value.birthDate = t('userForm.errors.birthDateFuture')
            isValid = false
        }
        }
        return isValid
}

const handleSubmit = async () => {
    if(!validateForm()) {
        return
    }
    try {
        await createUser({
            name: name.value.trim(),
            lastName: lastName.value.trim(),
            birthDate: birthDate.value        
        })
        successMessage.value = t('userForm.success')

        name.value = ''
        lastName.value = ''
        birthDate.value = ''

        setTimeout(() => {
            router.push('/')
        }, 2000)
    } catch (error) {
        console.error('Error creating user:', error)
        
    }
}

const handleCancel = () => {
  router.push('/')
}

</script>
<template>
  <div class="create-user">
    <h1>{{ t('nav.createUsers') }}</h1>

    <div v-if="successMessage" class="create-user__success">
      {{ successMessage }}
    </div>

    <form @submit.prevent="handleSubmit" class="create-user__form">

      <div class="create-user__form-group">
      <label for="name">{{ t('userForm.name') }}</label>
      <input
      id="name"
      v-model="name"
      type="text"
      :placeholder=" t('userForm.name')"
      :class="{ 'create-user__input--error': errors.name }"
       />
       <span v-if="errors.name" class="create-user__error-message">{{ errors.name }}</span>
       </div>

      <div class="create-user__form-group">
      <label for="lastName">{{ t('userForm.lastName') }}</label>
      <input
      id="lastName"
      v-model="lastName"
      type="text"
      :placeholder=" t('userForm.lastName')"
      :class="{ 'create-user__input--error': errors.lastName }"
       />
       <span v-if="errors.lastName" class="create-user__error-message">{{ errors.lastName }}</span>
       </div>


      <div class="create-user__form-group">
      <label for="birthDate">{{ t('userForm.birthDate') }}</label>
      <input
      id="birthDate"
      v-model="birthDate"
      type="date"
      :placeholder=" t('userForm.birthDate')"
      :class="{ 'create-user__input--error': errors.birthDate }"
       />
       <span v-if="errors.birthDate" class="create-user__error-message">{{ errors.birthDate }}</span>
       </div>

       <div class="create-user__actions">
        <button 
          type="button" 
          @click="handleCancel"
          class="create-user__btn create-user__btn--cancel"
        >
          {{ t('userForm.cancel') }}
        </button>
        <button 
          type="submit" 
          class="create-user__btn create-user__btn--submit"
          :disabled="loading"
        >
          {{ loading ? t('userList.loading') : t('userForm.submit') }}
        </button>
      </div>
    </form>

  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
.create-user {
  max-width: 37rem;
  margin: 0 auto;

  &__success {
    color: $success;
    background: color.scale($success, $lightness: 50%);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    border: 2px solid $success;
    text-align: center;
    font-weight: $font-weight-semibold;
    font-size: $font-size-base;  
  }

  &__form {
    background: $white;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 2px solid $gray;
  }

  &__form-group {
    margin-bottom: 1.5rem;

    label {
      @include label()
    }

    input {
      @include input()
    }
  }

  &__error-message {
    display: block;
    color: $error;
    font-size: $font-size-sm;
    margin-top: 0.5rem;
  }

  &__input--error {
    border-color: $error;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  &__btn {
    @include btn()
  }

  &__btn--cancel {
    background: transparent;
    border: 2px solid $gray;
    color: $dark-gray;

    &:hover:not(:disabled) {
      border-color: $dark-gray;
    }
  }

  &__btn--submit {
    @include button($primary);
    border: none;
  }
}
</style>