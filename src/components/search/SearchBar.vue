<template>
	<div class="hidden w-full max-w-sm lg:flex">
		<label class="relative mx-3 w-full">
			<svg
				class="pointer-events-none absolute z-10 my-3.5 ms-4 text-base-content opacity-60"
				aria-hidden="true"
				width="16"
				height="16"
				viewBox="0.48 0.48 23.04 23.04"
				fill="currentColor"
			>
				<path fill="none" d="M0 0h24v24H0z"></path>
				<path
					d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
				></path>
			</svg>
			<div class="relative w-full max-w-full">
				<form>
					<input
						ref="searchInput"
						type="search"
						placeholder="Zoeken..."
						:value="props.modelValue"
						@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
						class="color-[inherit] w-full rounded-xl border-[2px] border-solid border-transparent bg-transparent px-3 py-2 ps-10 focus:border-[2px] focus:border-base-200 focus:outline-none"
					/>
				</form>
			</div>
			<div class="pointer-events-none absolute end-10 top-2.5 hidden gap-1 opacity-50 lg:flex rtl:flex-row-reverse">
				<kbd class="kbd kbd-sm">ctrl</kbd>
				<kbd class="kbd kbd-sm">K</kbd>
			</div>
		</label>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps(['modelValue']);

const searchInput = ref<HTMLInputElement | null>(null);

const emit = defineEmits(['update:modelValue']);

const handleKeyPress = (event: KeyboardEvent) => {
	if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
		event.preventDefault();
		if (searchInput.value) {
			searchInput.value.focus();
		}
	}
};

onMounted(() => {
	document.addEventListener('keydown', handleKeyPress);
});

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeyPress);
});
</script>
