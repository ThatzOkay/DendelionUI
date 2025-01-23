<template>
    <div class="card" :class="classes" >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import classNames from 'classnames';
import { ref } from 'vue';
import { CardProps } from './interface';
import { Color } from '@/types';

const props = withDefaults(defineProps<CardProps>(), {
    backgroundColor: Color.Primary,
    shadow: false,
    fullWidth: false,
});

const classes = ref(classNames('card',
    `bg-${props.backgroundColor}`,
    props.shadow ? 'shadow-lg' : '',
    props.fullWidth ? 'w-full' : '',
));
</script>