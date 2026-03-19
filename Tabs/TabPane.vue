<template>
  <div
    v-show="isActive"
    :class="$style['tab-pane']"
    role="tabpanel"
    :aria-hidden="!isActive"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import type { TabPaneProps, TabsContext } from './Tabs.types';

defineOptions({
  name: 'TraeTabPane',
});

const props = defineProps<TabPaneProps>();

const tabsContext = inject<TabsContext>('TabsContext');

const isActive = computed(() => {
  return tabsContext?.activeKey.value === props.name;
});
</script>

<style module>
.tab-pane {
  width: 100%;
}
</style>
