<template>
    <table ref="table" :class="tableClasses">
        
    </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TableProps } from './interface';
import classNames from 'classnames';
import { Size, SizeUtils } from '@/types';

const table = ref<HTMLTableElement | null>(null)

const props = withDefaults(defineProps<TableProps>(), {
    size: Size.MD,
    zebra: false,
    pinRows: false,
    pinCols: false,
});

const tableClasses = ref(classNames('table', `table-${SizeUtils.toClassName(props.size)}`, {
    'table-zebra': props.zebra,
    'table-pin-rows': props.pinRows,
    'table-pin-cols	': props.pinCols,
}));
</script>