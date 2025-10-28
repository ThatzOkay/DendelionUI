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
      <div class="tab-content p-6" :class="tab.disabled ? 'tab-disabled' : ''">
        <slot :name="tab.slot" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Size, TabsSizeUtils } from '../../types';
import { TabsProps } from './interface';

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

const tabsClasses = computed(() => [
  'tabs',
  props.placement === 'top' ? 'tabs-top' : 'tabs-bottom',
  `${TabsSizeUtils.toClassName(props.size)}`,
  {
    'tabs-box': props.box,
    'tabs-border': props.border,
    'tabs-lift': props.lift,
  },
]);

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
