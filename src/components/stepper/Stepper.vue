<template>
	<slot :updateValue="updateValue"></slot>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { StepperProps } from './interface';

const props = defineProps<StepperProps>();

const stepperStep = ref(props.value);

const emit = defineEmits(['update:value']);

const updateValue = (value: string) => {
	stepperStep.value = value;
	emit('update:value', value);
};

provide('stepper', {
	value: stepperStep,
	updateValue,
});

watch(
	() => props.value,
	(value) => {
		stepperStep.value = value;
	},
);

defineExpose({
	updateValue,
});
</script>
