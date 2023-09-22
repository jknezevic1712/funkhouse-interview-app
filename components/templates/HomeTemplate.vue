<template>
  <div>
    <p>Template</p>
  </div>
</template>

<script setup lang="ts">
// types
import Data from '~/types/data';

const props = defineProps({
  data: {
    required: true,
  },
});
const data = props.data as Data;

console.log('DATA ', data);
</script>
