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
import { ref, watch } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  color: Color.Neutral
})

const classes = ref(classNames('btn', 
  'group',
  `btn-${ColorUtils.toClassName(props.color)}`,
  props.loading ? 'is-loading' : '',
))

watch(() => props.loading, (loading: boolean) => {
  classes.value = classNames('btn', 
    'group',
    `btn-${ColorUtils.toClassName(props.color)}`,
    loading ? 'is-loading' : '',
  )
})
</script>