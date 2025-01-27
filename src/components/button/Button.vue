<template>
  <button v-on:click="click" :class="classes" :type="type">
    <span class="loading loading-spinner loading-md absolute hidden group-[.is-loading]:block"></span>
    <span class="group-[.is-loading]:text-transparent"><slot  /></span>
  </button>
</template>

<script setup lang="ts">
import { Color, ColorUtils } from '@/types/color';
import { ButtonProps } from './interface';
import classNames from 'classnames';
import { ref } from 'vue';



const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  color: Color.Primary
})

const classes = ref(classNames('btn', 
  'group',
  `btn-${ColorUtils.toClassName(props.color)}`,
  props.loading ? 'is-loading' : '',
))
</script>