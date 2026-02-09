<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'en', name: 'English', flag: 'EN' },
  { code: 'it', name: 'Italiano', flag: 'IT' },
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'de', name: 'Deutsch', flag: 'DE' },
]

const changeLanguage = (code: string) => {
  locale.value = code
}
</script>

<template>
  <div class="language-selector">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="[
        'language-selector__button',
        { 'language-selector__button--active': locale === lang.code },
      ]"
      :title="lang.name"
      @click="changeLanguage(lang.code)"
    >
      {{ lang.flag }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.language-selector {
  display: flex;
  gap: 0.5rem;

  &__button {
    @include button($dark-gray);

    &--active {
      background: $primary;
      color: $white;
      border-color: $primary;
    }
  }
}
</style>
