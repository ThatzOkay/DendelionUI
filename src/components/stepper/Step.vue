<template>
	<li class="step" :class="activeClass">
		<slot></slot>
	</li>
</template>

<script setup lang="ts">
import { inject, onMounted, ref, watch, type Ref } from 'vue';
import { StepperProps } from './interface';

const props = defineProps<StepperProps>();

const stepper = inject<{
	value: Ref<string>;
	updateValue: (value: string) => void;
}>('stepper');

const activeClass = ref('');

watch(
	() => stepper?.value.value,
	(value) => {
		if (value && props.value) {
			activeClass.value = Number(value) >= Number(props.value) ? 'step-primary' : '';
		}
	},
);

onMounted(() => {
	if (stepper) {
		activeClass.value = stepper.value.value === props.value ? 'step-primary' : '';
		if (Number(stepper.value.value) >= Number(props.value)) {
			activeClass.value = 'step-primary';
		}
	}
});
</script>
