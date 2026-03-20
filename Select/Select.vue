<template>
  <div
    :class="[
      $style['select-container'],
      $style[`size-${size}`],
      {
        [$style['is-expanded']]: isExpanded,
        [$style['is-disabled']]: disabled,
        [$style['is-filled']]: filled,
        [$style['has-prefix']]: $slots.prefix || prefixIcon,
      }
    ]"
    ref="selectRef"
    @keydown.esc="closeDropdown"
  >
    <!-- Trigger area -->
    <div
      :class="[
        $style['select-trigger'],
        {
          [$style['is-focused']]: isExpanded,
        }
      ]"
      tabindex="0"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
    >
      <!-- Prefix Icon -->
      <span v-if="$slots.prefix || prefixIcon" :class="$style['prefix']">
        <slot name="prefix">
          <!-- Placeholder SVG if prefixIcon is true but no slot provided -->
          <svg v-if="prefixIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </slot>
      </span>

      <!-- Value / Placeholder -->
      <div :class="$style['select-value']">
        <template v-if="multiple && Array.isArray(modelValue) && modelValue.length">
          <div :class="$style['tags']">
            <span
              v-for="val in modelValue"
              :key="val"
              :class="$style['tag']"
              @click.stop="removeValue(val)"
            >
              {{ getLabel(val) }}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="$style['tag-close']">
                <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </template>
        <template v-else-if="!multiple && modelValue !== undefined && modelValue !== ''">
          <span :class="$style['single-value']">{{ getLabel(modelValue as string | number) }}</span>
        </template>
        <span v-else :class="$style['placeholder']">{{ placeholder }}</span>
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
        <div v-if="isExpanded" ref="dropdownRef" :class="$style['select-dropdown']" :style="dropdownStyle">
          <ul :class="$style['select-menu']">
          <template v-if="options && options.length">
            <template v-for="(item, index) in options" :key="index">
              <!-- Group Option -->
              <template v-if="'options' in item">
                <li :class="$style['select-group-title']">{{ item.label }}</li>
                <li
                  v-for="option in item.options"
                  :key="option.value"
                  :class="[
                    $style['select-option'],
                    {
                      [$style['is-selected']]: isSelected(option.value),
                      [$style['is-disabled']]: option.disabled
                    }
                  ]"
                  @click="handleSelect(option)"
                >
                  <div :class="$style['option-content']">
                    <span :class="$style['option-label']">{{ option.label }}</span>
                    <span v-if="multiple && isSelected(option.value)" :class="$style['check-icon']">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33334 8L6.66668 11.3333L13.3333 4.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </li>
                <!-- Optional Divider between groups if not the last item -->
                <li v-if="index < options.length - 1" :class="$style['select-group-divider']"></li>
              </template>

              <!-- Single Option -->
              <template v-else>
                <li
                  :class="[
                    $style['select-option'],
                    {
                      [$style['is-selected']]: isSelected(item.value),
                      [$style['is-disabled']]: item.disabled
                    }
                  ]"
                  @click="handleSelect(item)"
                >
                  <div :class="$style['option-content']">
                    <span :class="$style['option-label']">{{ item.label }}</span>
                    <span v-if="multiple && isSelected(item.value)" :class="$style['check-icon']">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33334 8L6.66668 11.3333L13.3333 4.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </li>
              </template>
            </template>
          </template>
          <template v-else>
            <li :class="$style['select-empty']">无数据</li>
          </template>
        </ul>
      </div>
    </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import type { SelectProps, SelectEmits, SelectOption } from './Select.types';

defineOptions({
  name: 'TraeSelect',
});

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  options: () => [],
  placeholder: '请选择内容',
  size: 'medium',
  disabled: false,
  multiple: false,
  clearable: false,
  searchable: false,
  filled: false,
  prefixIcon: false,
});

const emit = defineEmits<SelectEmits>();

const isExpanded = ref(false);
const selectRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref({});

const updatePosition = () => {
  if (!selectRef.value || !isExpanded.value) return;
  const rect = selectRef.value.getBoundingClientRect();
  dropdownStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    zIndex: 9999,
  };
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
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', handleScroll, true);
  } else {
    window.removeEventListener('resize', updatePosition);
    window.removeEventListener('scroll', handleScroll, true);
  }
});

const hasValue = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0;
  }
  return props.modelValue !== undefined && props.modelValue !== '';
});

const getLabel = (val: string | number) => {
  for (const item of props.options) {
    if ('options' in item) {
      const option = item.options.find(opt => opt.value === val);
      if (option) return option.label;
    } else {
      if (item.value === val) return item.label;
    }
  }
  return val;
};

const isSelected = (val: string | number) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(val);
  }
  return props.modelValue === val;
};

const toggleDropdown = () => {
  if (props.disabled) return;
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value) {
    emit('focus', new FocusEvent('focus'));
  } else {
    emit('blur', new FocusEvent('blur'));
  }
};

const closeDropdown = () => {
  isExpanded.value = false;
  emit('blur', new FocusEvent('blur'));
};

const handleSelect = (option: SelectOption) => {
  if (option.disabled) return;

  if (props.multiple) {
    const currentValues = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = currentValues.indexOf(option.value);
    
    if (index > -1) {
      currentValues.splice(index, 1);
    } else {
      currentValues.push(option.value);
    }
    
    emit('update:modelValue', currentValues);
    emit('change', currentValues);
  } else {
    emit('update:modelValue', option.value);
    emit('change', option.value);
    closeDropdown();
  }
};

const removeValue = (val: string | number) => {
  if (props.disabled || !props.multiple) return;
  const currentValues = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
  const index = currentValues.indexOf(val);
  if (index > -1) {
    currentValues.splice(index, 1);
    emit('update:modelValue', currentValues);
    emit('change', currentValues);
  }
};

const handleClear = () => {
  if (props.disabled) return;
  const emptyValue = props.multiple ? [] : '';
  emit('update:modelValue', emptyValue);
  emit('change', emptyValue);
  emit('clear');
  closeDropdown();
};

const handleClickOutside = (event: MouseEvent) => {
  if (isExpanded.value) {
    const isClickInsideTrigger = selectRef.value && selectRef.value.contains(event.target as Node);
    const isClickInsideDropdown = dropdownRef.value && dropdownRef.value.contains(event.target as Node);
    
    if (!isClickInsideTrigger && !isClickInsideDropdown) {
      closeDropdown();
    }
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style module>
@import './Select.module.scss';
</style>

<style>
/* Global transition for dropdown */
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top center;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-8px) scaleY(0.9);
}
</style>
