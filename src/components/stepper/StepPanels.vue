<template>
  <Transition name="fade" mode="out-in">
    <div v-if="stepper?.value">
      <slot :currentStep="stepper?.value"></slot>
    </div>
  </Transition>
</template>


<script setup lang="ts">
import { inject, type Ref } from 'vue';

const stepper = inject<{
  value: Ref<string>;
  updateValue: (value: string) => void;
}>('stepper');
</script>
