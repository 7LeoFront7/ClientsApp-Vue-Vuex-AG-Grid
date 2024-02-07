<script setup>
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css" // Theme
import { AgGridVue } from "ag-grid-vue3" // Vue Grid Logic
import axios from 'axios'
import { onMounted, ref } from 'vue'

const rowData = ref([])


const getClietnsFromBackend = async () => {
  const { data } = await axios.get('https://745031694d8e996f.mokky.dev/clients')
  rowData.value = data
}


const colDefs = ref([
  { field: 'id' },
  { field: 'FullName' },
  { field: 'Email' },
  { field: 'County' },
  { field: 'Phone' },
  { field: 'County' },
  { field: 'Birthday' }
])


const columnHoverHighlight = true

onMounted(() => {
  getClietnsFromBackend()

})

</script>

<template>
  <ag-grid-vue :columnHoverHighlight="columnHoverHighlight" style="height: 800px" class="ag-theme-quartz"
    :rowData="rowData" :columnDefs="colDefs">
  </ag-grid-vue>
</template>