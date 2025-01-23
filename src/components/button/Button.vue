<template>
  <button v-on:click="click" class="btn" :class="classes" :type="type">
    <span v-if="loading" class="loading loading-spinner loading-md"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { Color, ColorUtils } from '@/types/color';
import { ButtonProps } from './interface';



const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  color: Color.Primary
})

const classes = props.color ? [`bg-${ColorUtils.toClassName(props.color)}`] : []
</script>