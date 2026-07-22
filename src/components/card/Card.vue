<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CardProps } from './interface';
import { Color, BackgroundColorUtils, RoundedSizeUtils } from '../../types';
import { classNames } from '../../utils/classNames';

const props = withDefaults(defineProps<CardProps>(), {
	backgroundColor: Color.Primary,
	shadow: false,
	fullWidth: false,
});

const classes = ref(
	classNames(
		'card',
		BackgroundColorUtils.toClassName(props.backgroundColor),
		props.shadow ? 'shadow-lg' : '',
		props.fullWidth ? 'w-full' : '',
		props.rounded && !props.roundedSize
			? 'rounded'
			: props.roundedSize
				? RoundedSizeUtils.toClassName(props.roundedSize)
				: '',
	),
);
</script>
