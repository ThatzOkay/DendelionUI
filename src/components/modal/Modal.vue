<template>
    <dialog ref="modal" :class="classes" aria-modal="true" aria-hidden="true" role="dialog" @close="(e) => emit('close', e)" >
        <div className="modal-box">
            <form v-if="closeButton" method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <slot></slot>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ModalProps } from './interface';
import classNames from 'classnames';

const modal = ref<HTMLDialogElement | null>(null);

const emit = defineEmits(['close']);

const props = withDefaults(defineProps<ModalProps>(), {
    closeButton: true,
    overflow: false
});

const classes = ref(classNames('modal', {
    'overflow-visible': props.overflow
}));

const showModal = () => {
    modal.value?.showModal();
}

const closeModal = () => {
    modal.value?.close();
}

defineExpose({
    showModal,
    closeModal
})
</script>