<template>
	<dialog
		ref="modal"
		:class="[classes, $attrs.class]"
		aria-modal="true"
		aria-hidden="true"
		role="dialog"
		@close="(e) => emit('close', e)"
	>
		<div :class="boxClasses">
			<form v-if="closeButton" method="dialog">
				<button :class="closeButtonClasses">✕</button>
			</form>
			<slot></slot>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ModalProps } from './interface';
import classNames from 'classnames';
import { Size, ButtonSizeUtils } from '../../types';

const modal = ref<HTMLDialogElement | null>(null);

const emit = defineEmits(['close']);

const props = withDefaults(defineProps<ModalProps>(), {
	closeButton: true,
	overflow: false,
	closeButtonSize: Size.SM,
});

const boxClasses = ref(classNames('modal-box', props.extraBoxClasses, {
		'overflow-visible': props.overflow,
	}));

const classes = ref(
	classNames('modal'),
);

const closeButtonClasses = ref(
	classNames(
		'btn',
		ButtonSizeUtils.toClassName(props.closeButtonSize),
		'btn-circle',
		'btn-ghost',
		'absolute',
		'right-2',
		'top-2',
	),
);

const showModal = () => {
	modal.value?.showModal();
};

const closeModal = () => {
	modal.value?.close();
};

defineExpose({
	showModal,
	closeModal,
});
</script>
