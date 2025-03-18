<template>
  <button v-on:click="click ? click : undefined" :class="classes" :type="type" :disabled="disabled || loading">
    <span class="loading loading-spinner loading-md absolute hidden group-[.is-loading]:block"></span>
    <span class="group-[.is-loading]:text-transparent"><slot  /></span>
  </button>
</template>

<script setup lang="ts">
import { Color, ButtonColorUtils } from '@/types';
import { ButtonProps } from './interface';
import classNames from 'classnames';
import { computed } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  color: Color.Neutral,
  soft: false,
  outline: false,
})

const classes = computed(() => classNames('btn', 
  'group',
  ButtonColorUtils.toClassName(props.color),
  props.soft ? 'btn-soft' : '',
  props.outline ? 'btn-outline' : '',
  props.loading ? 'is-loading' : '',
  props.disabled ? 'disabled' : ''
))
</script>