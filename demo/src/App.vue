<template>
    <div>
        <SimpleButton />
        <SearchBar v-model="searchValue" />
        <Table :dataSource="dataSource" :columns="columns" :searchValue="searchValue" />
    </div>
</template>

<script setup lang="ts">

import { h, ref } from 'vue';
import { Table, SearchBar, Column } from '../../src/index'
import SimpleButton from '../../src/components/button/SimpleButton.vue';

const searchValue = ref<string>('')

const columns: Column<any>[] = [
    {
        title: 'Name',
        data: 'name',
    },
    {
        title: 'Age',
        data: 'age',
    },
    {
        title: 'Address',
        data: 'address',
    },
    {
        title: 'Action',
        data: '',
        render: () => {
            return renderButton();
        }
    }
]


const renderButton = () => {
  return h('div', 'Button');
};

const dataSource = ref([
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
])
</script>