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

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>

    <form @submit.prevent="handleSubmit" class="form">

      <div class="form-group">
      <label for="name">{{ t('userForm.name') }}</label>
      <input
      id="name"
      v-model="name"
      type="text"
      :placeholder=" t('userForm.name')"
      :class="{ error: errors.name}"
       />
       <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
       </div>

      <div class="form-group">
      <label for="lastName">{{ t('userForm.lastName') }}</label>
      <input
      id="lastName"
      v-model="lastName"
      type="text"
      :placeholder=" t('userForm.lastName')"
      :class="{ error: errors.lastName}"
       />
       <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
       </div>


      <div class="form-group">
      <label for="birthDate">{{ t('userForm.birthDate') }}</label>
      <input
      id="birthDate"
      v-model="birthDate"
      type="date"
      :placeholder=" t('userForm.birthDate')"
      :class="{ error: errors.birthDate}"
       />
       <span v-if="errors.birthDate" class="error-message">{{ errors.birthDate }}</span>
       </div>

       <div class="form-actions">
        <button 
          type="button" 
          @click="handleCancel"
          class="btn-cancel"
        >
          {{ t('userForm.cancel') }}
        </button>
        <button 
          type="submit" 
          class="btn-submit"
          :disabled="loading"
        >
          {{ loading ? t('userList.loading') : t('userForm.submit') }}
        </button>
      </div>
    </form>

  </div>
</template>

<style lang="scss" scoped>
.create-user {
  max-width: 37rem;
  margin: 0 auto;

  .success-message {
    color: $success;
    background: lighten($success, 35);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    border: 2px solid $success;
    text-align: center;
    font-weight: 600;
  }

  .form {
    background: $white;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 2px solid $gray;

    &-group {
      margin-bottom: 1.5rem;

      label {
        @include label()
      }

      input {
        @include input()
      }

      .error-message {
        display: block;
        color: $error;
        font-size: 0.875rem;
        margin-top: 0.5rem;
      }
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 2rem;

      button {
        @include btn()
      }

      .btn-cancel {
        background: transparent;
        border: 2px solid $gray;
        color: $dark-gray;

        &:hover:not(:disabled) {
          border-color: $dark-gray;
        }
      }

      .btn-submit {
        @include button($primary);
        border: none;
      }
    }
  }
}
</style>