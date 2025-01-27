<template>
    <dialog ref="modal" class="modal" aria-modal="true" aria-hidden="true" role="dialog" @close="(e) => emit('close', e)" >
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

const modal = ref<HTMLDialogElement | null>(null);

const emit = defineEmits(['close']);

withDefaults(defineProps<ModalProps>(), {
    closeButton: true,
})

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