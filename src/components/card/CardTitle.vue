<template>
	<component :is="is" class="card-title">
		{{ text }}
	</component>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

withDefaults(
	defineProps<{
		is?: string | object | Component;
		text: string;
	}>(),
	{
		is: 'h1',
		text: '',
	},
);
</script>
