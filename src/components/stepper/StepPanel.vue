<template>
	<div v-if="value === stepperValue">
		<slot :activateCallback="activateCallback"></slot>
	</div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';
import { StepperProps } from './interface';

defineProps<StepperProps>();

const stepperValue = computed(() => stepper?.value.value);

const stepper = inject<{
	value: Ref<string>;
	updateValue: (value: string) => void;
}>('stepper');

const activateCallback = (index: number) => {
	if (stepper) {
		stepper.updateValue(index.toString());
	}
};

defineExpose({
	activateCallback,
});
</script>
