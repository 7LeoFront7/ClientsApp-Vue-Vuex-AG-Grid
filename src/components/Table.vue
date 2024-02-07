<script setup>
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css" // Theme
import { AgGridVue } from "ag-grid-vue3" // Vue Grid Logic
import { ref } from 'vue'



const rowData = ref([
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
])

const colDefs = ref([
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
])




</script>

<template>
  <ag-grid-vue style="height: 500px" class="ag-theme-quartz" :rowData="rowData" :columnDefs="colDefs">
  </ag-grid-vue>
</template>