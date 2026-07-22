<template>
  <div role="tablist" :class="tabsClasses">
    <template v-for="(tab, index) in props.items" :key="index">
      <label
        class="tab"
        :style="props.fullWidth ? { width: widthPercentage + '%' } : {}"
      >
        <input
          type="radio"
          :name="id"
          :value="index"
          v-model="activeIndex"
        />
        {{ tab.label }}
      </label>
      <div :class="tabItemClasses(tab)">
        <slot :name="tab.slot" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Size, TabsSizeUtils } from '../../types';
import { TabsProps, type TabItem } from './interface';
import { classNames } from '../../utils/classNames';

const id = Math.random().toString(36).substring(2, 15);

const props = withDefaults(defineProps<TabsProps>(), {
  box: false,
  border: false,
  lift: false,
  fullWidth: false,
  placement: 'top',
  size: Size.MD,
  activeTab: 0,
});

const widthPercentage = computed(() => 100 / props.items.length);

const tabItemClasses = computed(() => (tab: TabItem) => classNames([
  'tab-content',
  {
    'tab-disabled': tab.disabled,
    'p-6': !tab.disablePadding,
  },
]));

const tabsClasses = computed(() => classNames([
  'tabs',
  props.placement === 'top' ? 'tabs-top' : 'tabs-bottom',
  `${TabsSizeUtils.toClassName(props.size)}`,
  {
    'tabs-box': props.box,
    'tabs-border': props.border,
    'tabs-lift': props.lift,
  },
]));

const activeIndex = ref(props.activeTab ?? 0);

const setActiveTab = (index: number) => {
  activeIndex.value = index;
};

watch(() => props.activeTab, (newVal) => {
  activeIndex.value = newVal;
});

defineExpose({
  activeIndex,
  setActiveTab,
});
</script>
