<template>
  <div
    :class="[
      $style['cascader-container'],
      $style[`size-${size}`],
      {
        [$style['is-expanded']]: isExpanded,
        [$style['is-disabled']]: disabled,
      }
    ]"
    ref="cascaderRef"
    @keydown.esc="closeDropdown"
  >
    <!-- Trigger area -->
    <div
      :class="[
        $style['cascader-trigger'],
        {
          [$style['is-focused']]: isExpanded,
          [$style['is-disabled']]: disabled,
        }
      ]"
      tabindex="0"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
    >
      <!-- Value / Placeholder / Search -->
      <div :class="$style['cascader-value']">
        <template v-if="multiple">
          <div v-if="selectedPaths.length > 0" :class="$style['tags']">
            <span v-for="(path, index) in displayTags" :key="index" :class="$style['tag']">
              {{ renderPath(path) }}
              <svg @click.stop="removeTag(path)" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$style['tag-close']">
                <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span v-if="restTagsCount > 0" :class="$style['tag']">+{{ restTagsCount }}</span>
          </div>
        </template>
        <template v-else-if="displayValue && !searchQuery">
          <span>{{ displayValue }}</span>
        </template>

        <!-- Search Input -->
        <input 
          v-if="filterable" 
          v-model="searchQuery" 
          :class="$style['search-input']"
          :placeholder="(!hasValue || (multiple && selectedPaths.length === 0)) ? placeholder : ''"
          @focus="isExpanded = true"
        />
        <span v-else-if="(!hasValue || (multiple && selectedPaths.length === 0)) && !searchQuery" :class="$style['placeholder']">
          {{ placeholder }}
        </span>
      </div>

      <!-- Suffix Icon (Arrow or Clear) -->
      <div :class="$style['suffix-group']">
        <span
          v-if="clearable && hasValue && !disabled"
          :class="$style['clear-icon']"
          @click.stop="handleClear"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#C5C5C5"/>
            <path d="M4.66669 4.66666L9.33335 9.33332M4.66669 9.33332L9.33335 4.66666" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span :class="[$style['arrow-icon'], { [$style['is-reverse']]: isExpanded }]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </div>

    <!-- Dropdown Menu -->
    <Teleport to="body">
      <transition name="fade-down">
        <div 
          v-if="isExpanded" 
          ref="dropdownRef" 
          :class="$style['cascader-dropdown']" 
          :style="dropdownStyle"
        >
          <!-- Flat Search List -->
          <template v-if="searchQuery">
            <ul :class="$style['cascader-menu-flat']">
              <li 
                v-for="(item, idx) in filteredOptions" 
                :key="idx" 
                :class="[$style['flat-option'], { [$style['is-active']]: isPathSelected(item.valuePath) }]"
                @click="handleFlatOptionClick(item)"
              >
                <Checkbox v-if="multiple" :model-value="isPathSelected(item.valuePath)" :class="$style['checkbox']" />
                {{ item.labelPath.join(separator) }}
              </li>
              <li v-if="filteredOptions.length === 0" :class="$style['cascader-menu-empty']">无匹配数据</li>
            </ul>
          </template>

          <!-- Normal Cascader List -->
          <template v-else-if="columns.length">
            <ul 
              v-for="(column, colIndex) in columns" 
              :key="colIndex"
              :class="$style['cascader-menu']"
            >
              <li
                v-for="option in column"
                :key="option.value"
                :class="[
                  $style['cascader-option'],
                  {
                    [$style['is-active']]: isActive(option, colIndex),
                    [$style['is-disabled']]: option.disabled
                  }
                ]"
                @click="handleOptionClick(option, colIndex)"
                @mouseenter="handleOptionMouseEnter(option, colIndex)"
              >
                <div :class="$style['option-content']">
                  <div :class="$style['option-content-inner']">
                    <div v-if="multiple" @click.stop="handleCheckboxClick(option, colIndex)" style="display: flex;">
                      <Checkbox :model-value="getOptionSelectionState(option, colIndex).isChecked" :indeterminate="getOptionSelectionState(option, colIndex).isIndeterminate" :class="$style['checkbox']" />
                    </div>
                    <span :class="$style['option-label']">{{ option.label }}</span>
                  </div>
                  <span v-if="!option.isLeaf && (option.children && option.children.length > 0 || option.isLeaf === false)" :class="$style['expand-icon']">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </template>
          <div v-else :class="$style['cascader-menu-empty']">
            无匹配数据
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import type { CascaderProps, CascaderEmits, CascaderOption } from './Cascader.types';
import Checkbox from '../Checkbox/Checkbox.vue';

defineOptions({
  name: 'TraeCascader',
});

const props = withDefaults(defineProps<CascaderProps>(), {
  modelValue: () => [],
  options: () => [],
  placeholder: 'Please select',
  size: 'medium',
  disabled: false,
  clearable: false,
  checkStrictly: false,
  showAllLevels: true,
  separator: ' / ',
  expandTrigger: 'click',
  multiple: false,
  filterable: false,
});

const emit = defineEmits<CascaderEmits>();

const isExpanded = ref(false);
const cascaderRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref({});
const searchQuery = ref('');

// Internal states
const activeValue = ref<(string | number)[]>([]);
const selectedValue = ref<(string | number)[]>([]);
const selectedPaths = ref<(string | number)[][]>([]);

watch(() => props.modelValue, (newVal) => {
  if (props.multiple) {
    selectedPaths.value = Array.isArray(newVal) && Array.isArray(newVal[0])
      ? [...(newVal as (string | number)[][])]
      : [];
  } else {
    selectedValue.value = newVal ? [...(newVal as (string | number)[])] : [];
    activeValue.value = [...selectedValue.value];
  }
}, { immediate: true, deep: true });

const hasValue = computed(() => {
  if (props.multiple) return selectedPaths.value.length > 0;
  return selectedValue.value.length > 0;
});

// For tags
const displayTags = computed(() => {
  if (!props.maxTagCount) return selectedPaths.value;
  return selectedPaths.value.slice(0, props.maxTagCount);
});
const restTagsCount = computed(() => {
  if (!props.maxTagCount) return 0;
  return Math.max(0, selectedPaths.value.length - props.maxTagCount);
});

const getOptionsByValue = (valArray: (string | number)[]) => {
  const result: CascaderOption[] = [];
  let currentOptions = props.options;
  for (const val of valArray) {
    if (!currentOptions) break;
    const opt = currentOptions.find(o => o.value === val);
    if (opt) {
      result.push(opt);
      currentOptions = opt.children || [];
    } else {
      break;
    }
  }
  return result;
};

const renderPath = (valArray: (string | number)[]) => {
  const opts = getOptionsByValue(valArray);
  const labels = opts.map(o => o.label);
  if (props.displayRender) return props.displayRender(labels, opts);
  if (!props.showAllLevels && labels.length > 0) return labels[labels.length - 1];
  return labels.join(props.separator);
};

const displayValue = computed(() => {
  if (selectedValue.value.length === 0) return '';
  return renderPath(selectedValue.value);
});

const columns = computed(() => {
  if (!props.options || props.options.length === 0) return [];
  const cols = [props.options];
  let currentOptions = props.options;
  
  for (let i = 0; i < activeValue.value.length; i++) {
    const val = activeValue.value[i];
    const opt = currentOptions.find(o => o.value === val);
    if (opt && opt.children && opt.children.length > 0) {
      cols.push(opt.children);
      currentOptions = opt.children;
    } else {
      break;
    }
  }
  return cols;
});

const isActive = (option: CascaderOption, colIndex: number) => {
  return activeValue.value[colIndex] === option.value;
};

// Check if a specific path is fully selected
const isPathSelected = (path: (string | number)[]) => {
  if (!props.multiple) return JSON.stringify(selectedValue.value) === JSON.stringify(path);
  return selectedPaths.value.some(p => JSON.stringify(p) === JSON.stringify(path));
};

// For multiple select checkbox UI indicator
const getLeafPaths = (opt: CascaderOption, currentPath: (string|number)[]): (string|number)[][] => {
  if (!opt.children || opt.children.length === 0) return [currentPath];
  let leaves: (string|number)[][] = [];
  for (const child of opt.children) {
    leaves = leaves.concat(getLeafPaths(child, [...currentPath, child.value]));
  }
  return leaves;
};

const getOptionSelectionState = (option: CascaderOption, colIndex: number) => {
  const currentPath = [...activeValue.value.slice(0, colIndex), option.value];
  if (props.checkStrictly || !option.children || option.children.length === 0) {
    const isSelected = isPathSelected(currentPath);
    return { isChecked: isSelected, isIndeterminate: false };
  }
  
  const leaves = getLeafPaths(option, currentPath);
  const selectedLeaves = leaves.filter(leaf => isPathSelected(leaf));
  
  const isChecked = selectedLeaves.length > 0 && selectedLeaves.length === leaves.length;
  const isIndeterminate = selectedLeaves.length > 0 && selectedLeaves.length < leaves.length;
  
  return { isChecked, isIndeterminate };
};

const handleOptionClick = (option: CascaderOption, colIndex: number) => {
  if (option.disabled) return;
  const newActiveValue = [...activeValue.value.slice(0, colIndex), option.value];
  activeValue.value = newActiveValue;

  const isLeaf = !option.children || option.children.length === 0;

  if (props.multiple) {
    if (isLeaf || props.checkStrictly) {
      const exists = selectedPaths.value.some(p => JSON.stringify(p) === JSON.stringify(newActiveValue));
      let newPaths;
      if (exists) {
        newPaths = selectedPaths.value.filter(p => JSON.stringify(p) !== JSON.stringify(newActiveValue));
      } else {
        newPaths = [...selectedPaths.value, newActiveValue];
      }
      selectedPaths.value = newPaths;
      emit('update:modelValue', newPaths);
      emit('change', newPaths, newPaths.map(p => getOptionsByValue(p)));
    }
  } else {
    if (isLeaf) {
      commitSelection(newActiveValue);
      closeDropdown();
    } else {
      if (props.checkStrictly) {
        commitSelection(newActiveValue);
      }
    }
  }
};

const handleCheckboxClick = (option: CascaderOption, colIndex: number) => {
  if (option.disabled) return;
  
  const newActiveValue = [...activeValue.value.slice(0, colIndex), option.value];
  
  if (props.checkStrictly || !option.children || option.children.length === 0) {
    // If checkStrictly is on, or it's a leaf node, just toggle it directly
    const exists = selectedPaths.value.some(p => JSON.stringify(p) === JSON.stringify(newActiveValue));
    let newPaths;
    if (exists) {
      newPaths = selectedPaths.value.filter(p => JSON.stringify(p) !== JSON.stringify(newActiveValue));
    } else {
      newPaths = [...selectedPaths.value, newActiveValue];
    }
    selectedPaths.value = newPaths;
    emit('update:modelValue', newPaths);
    emit('change', newPaths, newPaths.map(p => getOptionsByValue(p)));
  } else {
    // If it's a parent node and checkStrictly is off, toggle all its children
    const leaves = getLeafPaths(option, newActiveValue);
    const { isChecked } = getOptionSelectionState(option, colIndex);
    
    let newPaths = [...selectedPaths.value];
    
    if (isChecked) {
      // Uncheck all children
      newPaths = newPaths.filter(p => !leaves.some(leaf => JSON.stringify(leaf) === JSON.stringify(p)));
    } else {
      // Check all children
      for (const leaf of leaves) {
        if (!newPaths.some(p => JSON.stringify(p) === JSON.stringify(leaf))) {
          newPaths.push(leaf);
        }
      }
    }
    
    selectedPaths.value = newPaths;
    emit('update:modelValue', newPaths);
    emit('change', newPaths, newPaths.map(p => getOptionsByValue(p)));
  }
};

const handleOptionMouseEnter = (option: CascaderOption, colIndex: number) => {
  if (props.expandTrigger === 'hover' && !option.disabled) {
    if (option.children && option.children.length > 0) {
      activeValue.value = [...activeValue.value.slice(0, colIndex), option.value];
    }
  }
};

const commitSelection = (valArray: (string | number)[]) => {
  selectedValue.value = [...valArray];
  const selectedOptions = getOptionsByValue(valArray);
  emit('update:modelValue', valArray);
  emit('change', valArray, selectedOptions);
};

const removeTag = (path: (string | number)[]) => {
  if (props.disabled) return;
  const newPaths = selectedPaths.value.filter(p => JSON.stringify(p) !== JSON.stringify(path));
  selectedPaths.value = newPaths;
  emit('update:modelValue', newPaths);
  emit('change', newPaths, newPaths.map(p => getOptionsByValue(p)));
};

const handleClear = () => {
  if (props.disabled) return;
  searchQuery.value = '';
  if (props.multiple) {
    selectedPaths.value = [];
    activeValue.value = [];
    emit('update:modelValue', []);
    emit('change', [], []);
  } else {
    selectedValue.value = [];
    activeValue.value = [];
    emit('update:modelValue', []);
    emit('change', [], []);
  }
};

// Filter Logic
const flatOptions = computed(() => {
  const flatten = (opts: CascaderOption[], valPath: (string|number)[] = [], labPath: string[] = []) => {
    let res: any[] = [];
    for (const opt of opts) {
      const vPath = [...valPath, opt.value];
      const lPath = [...labPath, opt.label];
      if (!opt.children || opt.children.length === 0) {
        res.push({ valuePath: vPath, labelPath: lPath, option: opt });
      } else {
        if (props.checkStrictly) {
          res.push({ valuePath: vPath, labelPath: lPath, option: opt });
        }
        res = res.concat(flatten(opt.children, vPath, lPath));
      }
    }
    return res;
  };
  return flatten(props.options || []);
});

const filteredOptions = computed(() => {
  if (!searchQuery.value) return [];
  return flatOptions.value.filter(item => 
    item.labelPath.join(props.separator).toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const handleFlatOptionClick = (item: any) => {
  if (item.option.disabled) return;
  if (props.multiple) {
    const exists = selectedPaths.value.some(p => JSON.stringify(p) === JSON.stringify(item.valuePath));
    let newPaths;
    if (exists) {
      newPaths = selectedPaths.value.filter(p => JSON.stringify(p) !== JSON.stringify(item.valuePath));
    } else {
      newPaths = [...selectedPaths.value, item.valuePath];
    }
    selectedPaths.value = newPaths;
    emit('update:modelValue', newPaths);
    emit('change', newPaths, newPaths.map(p => getOptionsByValue(p)));
  } else {
    commitSelection(item.valuePath);
    closeDropdown();
    searchQuery.value = '';
  }
};

const updatePosition = () => {
  if (!cascaderRef.value || !isExpanded.value) return;
  const rect = cascaderRef.value.getBoundingClientRect();
  dropdownStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    zIndex: 9999,
  };
};

const toggleDropdown = () => {
  if (props.disabled) return;
  if (isExpanded.value) {
    closeDropdown();
  } else {
    if (!props.multiple) {
      activeValue.value = [...selectedValue.value];
    }
    isExpanded.value = true;
  }
};

const closeDropdown = () => {
  isExpanded.value = false;
  searchQuery.value = '';
};

const handleClickOutside = (e: MouseEvent) => {
  if (
    cascaderRef.value && !cascaderRef.value.contains(e.target as Node) &&
    dropdownRef.value && !dropdownRef.value.contains(e.target as Node)
  ) {
    closeDropdown();
  }
};

const handleScroll = () => {
  if (isExpanded.value) {
    updatePosition();
  }
};

watch(isExpanded, async (val) => {
  if (val) {
    await nextTick();
    updatePosition();
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('scroll', handleScroll, true);
  window.addEventListener('resize', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', handleScroll, true);
  window.removeEventListener('resize', handleScroll);
});
</script>

<style module src="./Cascader.module.scss"></style>