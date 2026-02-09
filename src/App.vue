<script setup lang="ts">
import { RouterView } from 'vue-router'
import LanguageSelector from '@/components/LanguageSelector.vue';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()

</script>

<template>
  <div id="app">
    <nav>
      <div class="nav-links">
      <RouterLink to="/">{{ t('nav.users') }}</RouterLink>
      <RouterLink to="/create">{{ t('nav.createUsers') }}</RouterLink>
      </div>
    
    <LanguageSelector />
    </nav>   
    <main>
    <RouterView />
    </main>
  </div>
  
</template>

<style lang="scss" scoped>
nav {
  background-color: $white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
  @include tablet {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
  }
  
  padding: 1rem 2rem;

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      color: $text-secondary;
      font-weight: $font-weight-semibold;
      font-size: $font-size-base; ;
      padding: 0.5rem 0;
      transition: color 0.2s;

      &:hover {
        color: $primary;
      }

      &.router-link-active {
        color: $primary;
        border-bottom: 2px solid $primary;
      }
    }
  }
}


main {
  max-width: 90rem;
  margin: 2rem auto;
  padding: 0 2rem;
}
</style>

