<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ContainerProps } from './interface';


const props = withDefaults(defineProps<ContainerProps>(), {
    container: true,
    padding: true
});

const classes = ref([
    props.container ? 'container' : '', //To disable the max width in some cases
    props.padding ? 'p-6' : ''
]);
</script>