<template>
  <div
    :class="[
      $style['datepicker-container'],
      $style[`size-${size}`],
      {
        [$style['is-expanded']]: isExpanded,
        [$style['is-disabled']]: disabled,
      }
    ]"
    ref="containerRef"
  >
    <!-- Trigger input -->
    <div
      :class="[
        $style['datepicker-trigger'],
        {
          [$style['is-focused']]: isExpanded,
        }
      ]"
      tabindex="0"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
    >
      <div :class="$style['input-wrapper']">
        <input
          v-if="type === 'date'"
          type="text"
          :value="displayValue"
          :placeholder="placeholder as string"
          :disabled="isDisabled"
          readonly
          :class="$style['datepicker-input']"
        />
        <div v-else :class="$style['range-input-wrapper']">
          <div :class="[$style['range-input-box'], { [$style['is-active']]: activeRangeInput === 'start' }]" @click.stop="setActiveRangeInput('start')">
            <input
              type="text"
              :value="(displayValue as [string, string])[0]"
              :placeholder="(placeholder as [string, string])[0] || '开始日期'"
              :disabled="isStartDisabled"
              readonly
              :class="[$style['datepicker-input'], $style['range-input']]"
            />
          </div>
          <span :class="$style['range-separator']">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9H14L10 5" stroke="#8F8F8F" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div :class="[$style['range-input-box'], { [$style['is-active']]: activeRangeInput === 'end' }]" @click.stop="setActiveRangeInput('end')">
            <input
              type="text"
              :value="(displayValue as [string, string])[1]"
              :placeholder="(placeholder as [string, string])[1] || '结束日期'"
              :disabled="isEndDisabled"
              readonly
              :class="[$style['datepicker-input'], $style['range-input']]"
            />
          </div>
        </div>
      </div>

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
        <span :class="$style['calendar-icon']">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6667 1.33334V4.00001" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33331 1.33334V4.00001" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 6.66666H14" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </div>

    <!-- Dropdown Calendar -->
    <Teleport to="body">
      <transition name="fade-down">
        <div
          v-if="isExpanded"
          ref="dropdownRef"
          :class="$style['datepicker-dropdown']"
          :style="dropdownStyle"
        >
          <!-- Range Unified Header -->
          <div v-if="type === 'range'" :class="[$style['calendar-header'], $style['range-header']]">
            <button v-show="currentView === 'date' || currentView === 'month' || currentView === 'year'" :class="$style['header-btn']" @click.stop="changeYear(-1)">&laquo;</button>
            <button v-show="currentView === 'date'" :class="$style['header-btn']" @click.stop="changeMonth(-1)">&lsaquo;</button>
            
            <div :class="$style['range-header-titles']">
              <span :class="$style['header-title']">
                <template v-if="currentView === 'year'">
                  <span :class="$style['header-title-year']">{{ Math.floor(currentYear / 10) * 10 }}年 - {{ Math.floor(currentYear / 10) * 10 + 9 }}年</span>
                </template>
                <template v-else>
                  <span :class="$style['header-title-year']" @click.stop="currentView = 'year'">{{ currentYear }}年</span>
                  <span v-show="currentView === 'date'" :class="$style['header-title-month']" @click.stop="currentView = 'month'"> {{ currentMonth + 1 }}月</span>
                </template>
              </span>
              
              <span :class="$style['header-title']">
                <template v-if="rightCurrentView === 'year'">
                  <span :class="$style['header-title-year']">{{ Math.floor(rightCurrentYear / 10) * 10 }}年 - {{ Math.floor(rightCurrentYear / 10) * 10 + 9 }}年</span>
                </template>
                <template v-else>
                  <span :class="$style['header-title-year']" @click.stop="rightCurrentView = 'year'">{{ rightCurrentYear }}年</span>
                  <span v-show="rightCurrentView === 'date'" :class="$style['header-title-month']" @click.stop="rightCurrentView = 'month'"> {{ rightCurrentMonth + 1 }}月</span>
                </template>
              </span>
            </div>

            <button v-show="rightCurrentView === 'date'" :class="$style['header-btn']" @click.stop="changeRightMonth(1)">&rsaquo;</button>
            <button v-show="rightCurrentView === 'date' || rightCurrentView === 'month' || rightCurrentView === 'year'" :class="$style['header-btn']" @click.stop="changeRightYear(1)">&raquo;</button>
          </div>

          <!-- Main Content (Header + Body + TimePanel) -->
          <div :class="$style['calendar-main']">
            <!-- Left Side (Date/Month/Year) -->
            <div :class="$style['calendar-left']">
              <!-- Header -->
              <div v-if="type !== 'range'" :class="$style['calendar-header']">
                <button v-show="currentView === 'date' || currentView === 'month' || currentView === 'year'" :class="$style['header-btn']" @click.stop="changeYear(-1)">&laquo;</button>
                <button v-show="currentView === 'date'" :class="$style['header-btn']" @click.stop="changeMonth(-1)">&lsaquo;</button>
                <span :class="$style['header-title']">
                <template v-if="currentView === 'year'">
                  <span :class="$style['header-title-year']">{{ Math.floor(currentYear / 10) * 10 }}年 - {{ Math.floor(currentYear / 10) * 10 + 9 }}年</span>
                </template>
                <template v-else>
                  <span :class="$style['header-title-year']" @click.stop="currentView = 'year'">{{ currentYear }}年</span>
                  <span v-show="currentView === 'date'" :class="$style['header-title-month']" @click.stop="currentView = 'month'"> {{ currentMonth + 1 }}月</span>
                </template>
              </span>
                <button v-show="currentView === 'date'" :class="$style['header-btn']" @click.stop="changeMonth(1)">&rsaquo;</button>
                <button v-show="currentView === 'date' || currentView === 'month' || currentView === 'year'" :class="$style['header-btn']" @click.stop="changeYear(1)">&raquo;</button>
              </div>

              <!-- Body -->
              <div :class="$style['calendar-body']">
                <!-- Date Panel -->
                <div v-show="currentView === 'date'" :class="$style['date-panel']">
                  <div :class="$style['calendar-weekdays']">
                    <span v-for="day in weekdays" :key="day" :class="$style['weekday']">{{ day }}</span>
                  </div>
                  <div :class="$style['calendar-days']" @mouseleave="hoverDate = null">
                    <div
                      v-for="(dateObj, index) in calendarDays"
                      :key="index"
                      :class="[
                        $style['day-cell-wrapper'],
                        {
                          [$style['is-in-range']]: dateObj.isInRange,
                          [$style['is-range-start']]: dateObj.isRangeStart,
                          [$style['is-range-end']]: dateObj.isRangeEnd
                        }
                      ]"
                    >
                      <span
                        :class="[
                          $style['day-cell'],
                          {
                            [$style['is-other-month']]: !dateObj.isCurrentMonth,
                            [$style['is-today']]: dateObj.isToday,
                            [$style['is-selected']]: dateObj.isSelected || dateObj.isRangeStart || dateObj.isRangeEnd,
                            [$style['is-disabled']]: isDateDisabled(dateObj)
                          }
                        ]"
                        @click.stop="!isDateDisabled(dateObj) && selectDate(dateObj)"
                        @mouseenter="!isDateDisabled(dateObj) && (hoverDate = dateObj.date)"
                      >
                        {{ dateObj.date.getDate() }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Month Panel -->
                <div v-show="currentView === 'month'" :class="$style['month-panel']">
                  <span
                    v-for="(month, index) in months"
                    :key="index"
                    :class="[
                      $style['month-cell'],
                      {
                        [$style['is-current']]: index === currentMonth && currentYear === new Date().getFullYear(),
                        [$style['is-selected']]: selectedDate && index === selectedDate.getMonth() && currentYear === selectedDate.getFullYear()
                      }
                    ]"
                    @click.stop="selectMonthPanel(index)"
                  >
                    {{ month }}
                  </span>
                </div>

                <!-- Year Panel -->
                <div v-show="currentView === 'year'" :class="$style['year-panel']">
                  <span
                    v-for="yearObj in yearRange"
                    :key="yearObj.year"
                    :class="[
                      $style['year-cell'],
                      {
                        [$style['is-other-decade']]: yearObj.isOther,
                        [$style['is-current']]: yearObj.year === new Date().getFullYear(),
                        [$style['is-selected']]: selectedDate && yearObj.year === selectedDate.getFullYear()
                      }
                    ]"
                    @click.stop="selectYearPanel(yearObj.year)"
                  >
                    {{ yearObj.year }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Side (Time Panel or Second Date Panel) -->
          <div v-if="showTime && type === 'date'" :class="$style['time-panel']">
              <!-- Time Header -->
              <div :class="$style['time-header']">
                <span v-if="selectedDate || hasInteractedWithTime">{{ formatPad(currentHour) }} : {{ formatPad(currentMinute) }} : {{ formatPad(currentSecond) }}</span>
              </div>
              <div :class="$style['time-body']">
                <div :class="$style['time-column']" ref="hourListRef">
                  <ul :class="$style['time-list']">
                    <li
                      v-for="h in 24"
                      :key="'h'+(h-1)"
                      :class="[$style['time-item'], { [$style['is-selected']]: (selectedDate || hasInteractedWithTime) && currentHour === h - 1 }]"
                      @click.stop="selectHour(h - 1)"
                    >
                      {{ formatPad(h - 1) }}
                    </li>
                  </ul>
                </div>
                <div :class="$style['time-column']" ref="minuteListRef">
                  <ul :class="$style['time-list']">
                    <li
                      v-for="m in 60"
                      :key="'m'+(m-1)"
                      :class="[$style['time-item'], { [$style['is-selected']]: (selectedDate || hasInteractedWithTime) && currentMinute === m - 1 }]"
                      @click.stop="selectMinute(m - 1)"
                    >
                      {{ formatPad(m - 1) }}
                    </li>
                  </ul>
                </div>
                <div :class="$style['time-column']" ref="secondListRef">
                  <ul :class="$style['time-list']">
                    <li
                      v-for="s in 60"
                      :key="'s'+(s-1)"
                      :class="[$style['time-item'], { [$style['is-selected']]: (selectedDate || hasInteractedWithTime) && currentSecond === s - 1 }]"
                      @click.stop="selectSecond(s - 1)"
                    >
                      {{ formatPad(s - 1) }}
                    </li>
                  </ul>
                </div>
              </div>
          </div>
          <div v-else-if="type === 'range'" :class="$style['calendar-right']">
              <!-- Second Calendar Body -->
              <div :class="$style['calendar-body']">
                <!-- Date Panel -->
                <div v-show="rightCurrentView === 'date'" :class="$style['date-panel']">
                  <div :class="$style['calendar-weekdays']">
                    <span v-for="day in weekdays" :key="day" :class="$style['weekday']">{{ day }}</span>
                  </div>
                  <div :class="$style['calendar-days']" @mouseleave="hoverDate = null">
                    <div
                      v-for="(dateObj, index) in rightCalendarDays"
                      :key="index"
                      :class="[
                        $style['day-cell-wrapper'],
                        {
                          [$style['is-in-range']]: dateObj.isInRange,
                          [$style['is-range-start']]: dateObj.isRangeStart,
                          [$style['is-range-end']]: dateObj.isRangeEnd
                        }
                      ]"
                    >
                      <span
                        :class="[
                          $style['day-cell'],
                          {
                            [$style['is-other-month']]: !dateObj.isCurrentMonth,
                            [$style['is-today']]: dateObj.isToday,
                            [$style['is-selected']]: dateObj.isSelected || dateObj.isRangeStart || dateObj.isRangeEnd,
                            [$style['is-disabled']]: isDateDisabled(dateObj)
                          }
                        ]"
                        @click.stop="!isDateDisabled(dateObj) && selectRightDate(dateObj)"
                        @mouseenter="!isDateDisabled(dateObj) && (hoverDate = dateObj.date)"
                      >
                        {{ dateObj.date.getDate() }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Month Panel -->
                <div v-show="rightCurrentView === 'month'" :class="$style['month-panel']">
                  <span
                    v-for="(month, index) in months"
                    :key="index"
                    :class="[
                      $style['month-cell'],
                      {
                        [$style['is-current']]: index === rightCurrentMonth && rightCurrentYear === new Date().getFullYear(),
                        [$style['is-selected']]: rangeEndDate && index === rangeEndDate.getMonth() && rightCurrentYear === rangeEndDate.getFullYear()
                      }
                    ]"
                    @click.stop="selectRightMonthPanel(index)"
                  >
                    {{ month }}
                  </span>
                </div>

                <!-- Year Panel -->
                <div v-show="rightCurrentView === 'year'" :class="$style['year-panel']">
                  <span
                    v-for="yearObj in rightYearRange"
                    :key="yearObj.year"
                    :class="[
                      $style['year-cell'],
                      {
                        [$style['is-other-decade']]: yearObj.isOther,
                        [$style['is-current']]: yearObj.year === new Date().getFullYear(),
                        [$style['is-selected']]: rangeEndDate && yearObj.year === rangeEndDate.getFullYear()
                      }
                    ]"
                    @click.stop="selectRightYearPanel(yearObj.year)"
                  >
                    {{ yearObj.year }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div v-show="currentView === 'date' && type === 'date'" :class="$style['calendar-footer']">
             <span :class="$style['today-btn']" @click.stop="selectToday">
               {{ showTime ? '此刻' : '今天' }}
             </span>
             <button v-if="showTime" :class="[$style['confirm-btn'], { [$style['is-disabled']]: !selectedDate }]" :disabled="!selectedDate" @click.stop="confirmSelection">确定</button>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import type { DatePickerProps, DatePickerEmits } from './DatePicker.types';

defineOptions({
  name: 'TraeDatePicker',
});

const props = withDefaults(defineProps<DatePickerProps>(), {
  modelValue: '',
  type: 'date',
  placeholder: '请选择日期',
  size: 'medium',
  disabled: false,
  clearable: false,
  format: 'YYYY-MM-DD',
});

const emit = defineEmits<DatePickerEmits>();

// State
const isExpanded = ref(false);
const currentView = ref<'date' | 'month' | 'year'>('date');
const rightCurrentView = ref<'date' | 'month' | 'year'>('date');
const containerRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref({});

const currentDate = ref(new Date()); // Date being viewed in left calendar
const rightCurrentDate = ref(new Date()); // Date being viewed in right calendar
const selectedDate = ref<Date | null>(null);

// Time selection state
const currentHour = ref(0);
const currentMinute = ref(0);
const currentSecond = ref(0);
const hourListRef = ref<HTMLElement | null>(null);
const minuteListRef = ref<HTMLElement | null>(null);
const secondListRef = ref<HTMLElement | null>(null);
const hasInteractedWithTime = ref(false);

// Range selection state
const rangeStartDate = ref<Date | null>(null);
const rangeEndDate = ref<Date | null>(null);
const hoverDate = ref<Date | null>(null);
const manualActiveRangeInput = ref<'start' | 'end' | null>(null);

// Initialize selectedDate from props
const initDateFromProps = () => {
  if (props.type === 'range') {
    if (Array.isArray(props.modelValue) && props.modelValue.length === 2) {
      const d1 = new Date(props.modelValue[0]);
      const d2 = new Date(props.modelValue[1]);
      if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
        rangeStartDate.value = d1;
        rangeEndDate.value = d2;
        currentDate.value = new Date(d1);
        
        const rd = new Date(d2);
        // If start and end are in same month, push right calendar to next month
        if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth()) {
          rd.setMonth(rd.getMonth() + 1);
        }
        rightCurrentDate.value = rd;
      }
    } else {
      rangeStartDate.value = null;
      rangeEndDate.value = null;
      const now = new Date();
      currentDate.value = now;
      const nextMonth = new Date(now);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      rightCurrentDate.value = nextMonth;
    }
  } else {
    if (props.modelValue && !Array.isArray(props.modelValue)) {
      const d = new Date(props.modelValue as string);
      if (!isNaN(d.getTime())) {
        selectedDate.value = d;
        currentDate.value = new Date(d);
        currentHour.value = d.getHours();
        currentMinute.value = d.getMinutes();
        currentSecond.value = d.getSeconds();
      }
    } else {
      selectedDate.value = null;
      currentDate.value = new Date();
      currentHour.value = 0;
      currentMinute.value = 0;
      currentSecond.value = 0;
    }
  }
};

watch(() => props.modelValue, initDateFromProps, { immediate: true });

// Computed
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());
const rightCurrentYear = computed(() => rightCurrentDate.value.getFullYear());
const rightCurrentMonth = computed(() => rightCurrentDate.value.getMonth());

const activeRangeInput = computed(() => {
  if (props.type !== 'range' || !isExpanded.value) return null;
  if (manualActiveRangeInput.value) return manualActiveRangeInput.value;
  if (rangeStartDate.value && !rangeEndDate.value) return 'end';
  return 'start';
});

const setActiveRangeInput = (type: 'start' | 'end') => {
  if (props.type !== 'range') return;
  manualActiveRangeInput.value = type;
  if (!isExpanded.value) {
    toggleDropdown();
  }
};

const hasValue = computed(() => {
  if (props.type === 'range') {
    return rangeStartDate.value !== null && rangeEndDate.value !== null;
  }
  return selectedDate.value !== null;
});

const isDisabled = computed(() => {
  if (Array.isArray(props.disabled)) return props.disabled[0];
  return props.disabled;
});

const isStartDisabled = computed(() => {
  if (Array.isArray(props.disabled)) return props.disabled[0];
  return props.disabled;
});

  const isEndDisabled = computed(() => {
    let baseDisabled = false;
    if (Array.isArray(props.disabled)) baseDisabled = props.disabled[1];
    else baseDisabled = props.disabled;
    return baseDisabled;
  });

  const isDateDisabled = (dateObj: CalendarDay) => {
    if (props.type === 'range') {
       if (activeRangeInput.value === 'end' && rangeStartDate.value) {
         // When picking end date, cannot pick before start date
         return dateObj.date < rangeStartDate.value;
       }
    }
    return false;
  };

const formatPad = (num: number) => num.toString().padStart(2, '0');

const displayValue = computed(() => {
  if (props.type === 'range') {
    if (!rangeStartDate.value && !rangeEndDate.value) return ['', ''];
    const formatDt = (d: Date | null) => d ? formatValue(d) : '';
    return [formatDt(rangeStartDate.value), formatDt(rangeEndDate.value)];
  }
  
  if (!selectedDate.value) return '';
  return formatValue(selectedDate.value);
});

// Calendar Logic
const weekdays = ['一', '二', '三', '四', '五', '六', '日'];
const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

const yearRange = computed(() => {
  const startYear = Math.floor(currentYear.value / 10) * 10;
  const years = [];
  years.push({ year: startYear - 1, isOther: true }); // Previous decade
  for (let i = 0; i < 10; i++) {
    years.push({ year: startYear + i, isOther: false });
  }
  years.push({ year: startYear + 10, isOther: true }); // Next decade
  return years;
});

const rightYearRange = computed(() => {
  const startYear = Math.floor(rightCurrentYear.value / 10) * 10;
  const years = [];
  years.push({ year: startYear - 1, isOther: true });
  for (let i = 0; i < 10; i++) {
    years.push({ year: startYear + i, isOther: false });
  }
  years.push({ year: startYear + 10, isOther: true });
  return years;
});

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
}

const generateCalendarDays = (year: number, month: number, isRightPanel: boolean = false) => {
  const days: CalendarDay[] = [];
  
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  let startDayOfWeek = firstDayOfMonth.getDay() - 1;
  if (startDayOfWeek === -1) startDayOfWeek = 6;
  
  const today = new Date();
  
  // Previous month days
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push(createCalendarDay(d, false, today));
  }
  
  // Current month days
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const d = new Date(year, month, i);
    days.push(createCalendarDay(d, true, today));
  }
  
  // Next month days
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    const d = new Date(year, month + 1, i);
    days.push(createCalendarDay(d, false, today));
  }
  
  return days;
};

const calendarDays = computed(() => generateCalendarDays(currentYear.value, currentMonth.value, false));
const rightCalendarDays = computed(() => generateCalendarDays(rightCurrentYear.value, rightCurrentMonth.value, true));

const isSameDate = (d1: Date | null, d2: Date | null) => {
  if (!d1 || !d2) return false;
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

const createCalendarDay = (d: Date, isCurrentMonth: boolean, today: Date): CalendarDay => {
  const isToday = isSameDate(d, today);
  let isSelected = false;
  let isInRange = false;
  let isRangeStart = false;
  let isRangeEnd = false;

  if (props.type === 'range') {
    isRangeStart = isSameDate(d, rangeStartDate.value);
    isRangeEnd = isSameDate(d, rangeEndDate.value);
    isSelected = isRangeStart || isRangeEnd;
    
    // We want all days in the range to have the background, even if they are in another month
    // The design shows the light green background connecting continuously
    if (rangeStartDate.value && rangeEndDate.value) {
      if (!isSameDate(rangeStartDate.value, rangeEndDate.value)) {
        isInRange = d > rangeStartDate.value && d < rangeEndDate.value;
      } else {
        // If start and end are the same, don't show any range background
        isRangeStart = true;
        isRangeEnd = true;
      }
    } else if (rangeStartDate.value && hoverDate.value) {
      // Only show hover range if hover date is different from start date
      if (!isSameDate(rangeStartDate.value, hoverDate.value)) {
        if (hoverDate.value > rangeStartDate.value) {
            isInRange = d > rangeStartDate.value && d < hoverDate.value;
            // The hovered date itself shouldn't just be 'in-range' but should act as a temporary end
            if (isSameDate(d, hoverDate.value)) {
              isRangeEnd = true;
              isSelected = true; // Make it look selected during hover
            }
          } else {
            isInRange = d > hoverDate.value && d < rangeStartDate.value;
            if (isSameDate(d, hoverDate.value)) {
              isRangeStart = true;
              isSelected = true;
            }
          }
      } else {
         // If hovering over the already selected start date, just treat it as start and end
         if (isSameDate(d, rangeStartDate.value)) {
            isRangeStart = true; // Ensure it still looks like a start node
            isRangeEnd = true;
            isInRange = false;
         }
      }
    } else if (!rangeStartDate.value && rangeEndDate.value && hoverDate.value) {
      // Hover logic when ONLY end date is selected (selecting backwards)
      if (!isSameDate(rangeEndDate.value, hoverDate.value)) {
        if (hoverDate.value < rangeEndDate.value) {
          isInRange = d > hoverDate.value && d < rangeEndDate.value;
          if (isSameDate(d, hoverDate.value)) {
            isRangeStart = true;
            isSelected = true;
          }
        } else {
          // Hovering after the end date (invalid selection but show visual feedback)
          isInRange = false; 
        }
      } else {
        if (isSameDate(d, rangeEndDate.value)) {
            isRangeEnd = true; // Fix: It should be a right-side end node to hide left tail
            isInRange = false;
         }
      }
    } else if (rangeStartDate.value && !rangeEndDate.value && !hoverDate.value) {
      // If only start date is selected and no hover, it should act as both start and end to hide the tail
      if (isSameDate(d, rangeStartDate.value)) {
          isRangeEnd = true;
      }
    } else if (!rangeStartDate.value && rangeEndDate.value && !hoverDate.value) {
      // If only end date is selected and no hover, it should act as both start and end to hide the tail
      if (isSameDate(d, rangeEndDate.value)) {
          isRangeStart = true;
      }
    }
  } else {
    isSelected = isSameDate(d, selectedDate.value);
  }

  return { date: d, isCurrentMonth, isToday, isSelected, isInRange, isRangeStart, isRangeEnd };
};

// Actions
const toggleDropdown = () => {
  if (props.disabled) return;
  isExpanded.value = !isExpanded.value;
  if (isExpanded.value && selectedDate.value) {
    currentDate.value = new Date(selectedDate.value);
    currentHour.value = selectedDate.value.getHours();
    currentMinute.value = selectedDate.value.getMinutes();
    currentSecond.value = selectedDate.value.getSeconds();
    scrollToTime();
  } else if (isExpanded.value && props.type === 'range') {
    if (rangeStartDate.value) {
      currentDate.value = new Date(rangeStartDate.value);
      const rd = new Date(rangeEndDate.value || rangeStartDate.value);
      if (!rangeEndDate.value || (rangeStartDate.value.getFullYear() === rd.getFullYear() && rangeStartDate.value.getMonth() === rd.getMonth())) {
        rd.setMonth(rd.getMonth() + 1);
      }
      rightCurrentDate.value = rd;
    } else {
      const now = new Date();
      currentDate.value = now;
      const nextMonth = new Date(now);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      rightCurrentDate.value = nextMonth;
    }
  } else if (isExpanded.value) {
    const now = new Date();
    currentDate.value = now;
    // Set default time to 00:00:00 when opening without selection
    currentHour.value = 0;
    currentMinute.value = 0;
    currentSecond.value = 0;
    hasInteractedWithTime.value = false; // Reset interaction flag
    scrollToTime();
  }
};

const closeDropdown = () => {
  isExpanded.value = false;
  manualActiveRangeInput.value = null; // Reset manual selection when closed
};

const selectDate = (dateObj: CalendarDay) => {
  const d = dateObj.date;
  
  if (props.type === 'range') {
    if (activeRangeInput.value === 'start') {
      // If the user selects a start date that is AFTER the already selected end date,
      // we should update the start date, but keep the end date empty.
      rangeStartDate.value = d;
      if (rangeEndDate.value && d > rangeEndDate.value) {
        rangeEndDate.value = null;
      } else if (rangeEndDate.value && isSameDate(d, rangeEndDate.value)) {
        // Prevent same date selection
        rangeEndDate.value = null;
      }
      manualActiveRangeInput.value = 'end'; // Always auto switch to end input after picking start
    } else if (activeRangeInput.value === 'end') {
      // Prevent selecting the exact same date as start date
      if (rangeStartDate.value && isSameDate(d, rangeStartDate.value)) {
        rangeStartDate.value = d;
        rangeEndDate.value = null;
        manualActiveRangeInput.value = 'end';
      } else if (rangeStartDate.value && d < rangeStartDate.value) {
        // If trying to select an end date that is before the start date, make it the new start date instead
        rangeStartDate.value = d;
        rangeEndDate.value = null;
        manualActiveRangeInput.value = 'end'; // Keep focus on end input so user can pick the real end
      } else {
        rangeEndDate.value = d;
        if (!props.showTime && rangeStartDate.value && rangeEndDate.value) {
          const valueStr1 = formatValue(rangeStartDate.value);
          const valueStr2 = formatValue(rangeEndDate.value);
          emit('update:modelValue', [valueStr1, valueStr2]);
          emit('change', [valueStr1, valueStr2], [rangeStartDate.value, rangeEndDate.value]);
          closeDropdown();
        } else if (!rangeStartDate.value) {
           // If we just picked an end date and there is NO start date yet
           manualActiveRangeInput.value = 'start'; // Auto switch back to start
        }
      }
    }
    return;
  }

  if (props.showTime) {
    d.setHours(currentHour.value);
    d.setMinutes(currentMinute.value);
    d.setSeconds(currentSecond.value);
    selectedDate.value = d;
    // Don't close immediately if time is shown
  } else {
    selectedDate.value = d;
    const valueStr = formatValue(d);
    emit('update:modelValue', valueStr);
    emit('change', valueStr, d);
    closeDropdown();
  }
};

const selectToday = () => {
  const today = new Date();
  if (props.showTime) {
    currentHour.value = today.getHours();
    currentMinute.value = today.getMinutes();
    currentSecond.value = today.getSeconds();
    scrollToTime();
  }
  selectDate({ date: today, isCurrentMonth: true, isToday: true, isSelected: false });
  if (!props.showTime) {
    closeDropdown();
  }
};

const selectMonthPanel = (monthIndex: number) => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(monthIndex);
  currentDate.value = newDate;
  currentView.value = 'date';
};

const selectYearPanel = (year: number) => {
  const newDate = new Date(currentDate.value);
  newDate.setFullYear(year);
  currentDate.value = newDate;
  currentView.value = 'month';
};

const selectHour = (h: number) => {
  currentHour.value = h;
  hasInteractedWithTime.value = true;
  if (selectedDate.value) {
    selectedDate.value.setHours(h);
  }
};

const selectMinute = (m: number) => {
  currentMinute.value = m;
  hasInteractedWithTime.value = true;
  if (selectedDate.value) {
    selectedDate.value.setMinutes(m);
  }
};

const selectSecond = (s: number) => {
  currentSecond.value = s;
  hasInteractedWithTime.value = true;
  if (selectedDate.value) {
    selectedDate.value.setSeconds(s);
  }
};

const confirmSelection = () => {
  let d: Date;
  if (selectedDate.value) {
    d = new Date(selectedDate.value);
  } else {
    d = new Date(currentDate.value);
  }
  
  d.setHours(currentHour.value);
  d.setMinutes(currentMinute.value);
  d.setSeconds(currentSecond.value);
  
  selectedDate.value = d;
  const valueStr = formatValue(d);
  emit('update:modelValue', valueStr);
  emit('change', valueStr, d);
  closeDropdown();
};

const scrollToTime = async () => {
  if (!props.showTime) return;
  await nextTick();
  const scrollTo = (refEl: HTMLElement | null, index: number) => {
    if (refEl) {
      const item = refEl.querySelectorAll('li')[index];
      if (item) {
        refEl.scrollTop = item.offsetTop - refEl.offsetTop - (refEl.clientHeight / 2) + (item.clientHeight / 2);
      }
    }
  };
  scrollTo(hourListRef.value, currentHour.value);
  scrollTo(minuteListRef.value, currentMinute.value);
  scrollTo(secondListRef.value, currentSecond.value);
};

const handleClear = () => {
  if (props.disabled) return;
  selectedDate.value = null;
  emit('update:modelValue', '');
  emit('change', '', null);
  emit('clear');
  closeDropdown();
};

const formatValue = (d: Date) => {
  const year = d.getFullYear();
  const month = formatPad(d.getMonth() + 1);
  const day = formatPad(d.getDate());
  const hour = formatPad(d.getHours());
  const minute = formatPad(d.getMinutes());
  const second = formatPad(d.getSeconds());
  
  let result = props.format;
  result = result.replace('YYYY', year.toString());
  result = result.replace('MM', month);
  result = result.replace('DD', day);
  result = result.replace('HH', hour);
  result = result.replace('mm', minute);
  result = result.replace('ss', second);
  return result;
};

const changeMonth = (delta: number) => {
  const newDate = new Date(currentDate.value);
  // In range mode, single arrow switches 2 months
  const actualDelta = props.type === 'range' ? delta * 2 : delta;
  newDate.setMonth(newDate.getMonth() + actualDelta);
  currentDate.value = newDate;
  if (props.type === 'range') {
    const newRightDate = new Date(rightCurrentDate.value);
    newRightDate.setMonth(newRightDate.getMonth() + actualDelta);
    rightCurrentDate.value = newRightDate;
  }
};

const changeYear = (delta: number) => {
  const newDate = new Date(currentDate.value);
  // In range mode, double arrow switches 2 years
  const actualDelta = props.type === 'range' ? delta * 2 : delta;
  if (currentView.value === 'year') {
    newDate.setFullYear(newDate.getFullYear() + actualDelta * 10);
  } else {
    newDate.setFullYear(newDate.getFullYear() + actualDelta);
  }
  currentDate.value = newDate;
  if (props.type === 'range') {
    const newRightDate = new Date(rightCurrentDate.value);
    if (rightCurrentView.value === 'year') {
      newRightDate.setFullYear(newRightDate.getFullYear() + actualDelta * 10);
    } else {
      newRightDate.setFullYear(newRightDate.getFullYear() + actualDelta);
    }
    rightCurrentDate.value = newRightDate;
  }
};

const changeRightMonth = (delta: number) => {
  const newDate = new Date(rightCurrentDate.value);
  // In range mode, single arrow switches 2 months
  const actualDelta = props.type === 'range' ? delta * 2 : delta;
  newDate.setMonth(newDate.getMonth() + actualDelta);
  rightCurrentDate.value = newDate;
  if (props.type === 'range') {
    const newLeftDate = new Date(currentDate.value);
    newLeftDate.setMonth(newLeftDate.getMonth() + actualDelta);
    currentDate.value = newLeftDate;
  }
};

const changeRightYear = (delta: number) => {
  const newDate = new Date(rightCurrentDate.value);
  // In range mode, double arrow switches 2 years
  const actualDelta = props.type === 'range' ? delta * 2 : delta;
  if (rightCurrentView.value === 'year') {
    newDate.setFullYear(newDate.getFullYear() + actualDelta * 10);
  } else {
    newDate.setFullYear(newDate.getFullYear() + actualDelta);
  }
  rightCurrentDate.value = newDate;
  if (props.type === 'range') {
    const newLeftDate = new Date(currentDate.value);
    if (currentView.value === 'year') {
      newLeftDate.setFullYear(newLeftDate.getFullYear() + actualDelta * 10);
    } else {
      newLeftDate.setFullYear(newLeftDate.getFullYear() + actualDelta);
    }
    currentDate.value = newLeftDate;
  }
};

const selectRightMonthPanel = (monthIndex: number) => {
  const newDate = new Date(rightCurrentDate.value);
  newDate.setMonth(monthIndex);
  rightCurrentDate.value = newDate;
  rightCurrentView.value = 'date';
};

const selectRightYearPanel = (year: number) => {
  const newDate = new Date(rightCurrentDate.value);
  newDate.setFullYear(year);
  rightCurrentDate.value = newDate;
  rightCurrentView.value = 'month';
};

const selectRightDate = (dateObj: CalendarDay) => {
  const d = dateObj.date;
  
  if (activeRangeInput.value === 'start') {
    rangeStartDate.value = d;
    if (rangeEndDate.value && d > rangeEndDate.value) {
      rangeEndDate.value = null; // Reset end date if start is after end
    } else if (rangeEndDate.value && isSameDate(d, rangeEndDate.value)) {
      rangeEndDate.value = null;
    }
    manualActiveRangeInput.value = 'end'; // Auto switch to end
  } else if (activeRangeInput.value === 'end') {
    // Prevent selecting the exact same date as start date
    if (rangeStartDate.value && isSameDate(d, rangeStartDate.value)) {
      rangeStartDate.value = d;
      rangeEndDate.value = null;
      manualActiveRangeInput.value = 'end';
    } else if (rangeStartDate.value && d < rangeStartDate.value) {
      // If trying to select an end date that is before the start date, make it the new start date instead
      rangeStartDate.value = d; // Set start to this date if end is before start
      rangeEndDate.value = null;
      manualActiveRangeInput.value = 'end';
    } else {
      rangeEndDate.value = d;
      // Both selected
      if (!props.showTime && rangeStartDate.value && rangeEndDate.value) {
        const valueStr1 = formatValue(rangeStartDate.value);
        const valueStr2 = formatValue(rangeEndDate.value);
        emit('update:modelValue', [valueStr1, valueStr2]);
        emit('change', [valueStr1, valueStr2], [rangeStartDate.value, rangeEndDate.value]);
        closeDropdown();
      } else if (!rangeStartDate.value) {
        manualActiveRangeInput.value = 'start'; // Auto switch back to start
      }
    }
  }
};

// Positioning
const updatePosition = () => {
  if (!containerRef.value || !isExpanded.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  dropdownStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    zIndex: 9999,
  };
};

const handleScroll = () => {
  if (isExpanded.value) {
    updatePosition();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (isExpanded.value) {
    const isClickInsideTrigger = containerRef.value && containerRef.value.contains(event.target as Node);
    const isClickInsideDropdown = dropdownRef.value && dropdownRef.value.contains(event.target as Node);
    
    if (!isClickInsideTrigger && !isClickInsideDropdown) {
      closeDropdown();
    }
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

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updatePosition);
  window.removeEventListener('scroll', handleScroll, true);
});
</script>

<style module>
@import './DatePicker.module.scss';
</style>

<style>
/* Global transition for dropdown */
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top left;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-8px) scaleY(0.9);
}
</style>
