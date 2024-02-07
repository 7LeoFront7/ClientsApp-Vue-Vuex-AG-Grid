<script setup>
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css" // Theme
import { AgGridVue } from "ag-grid-vue3" // Vue Grid Logic
import axios from 'axios'
import { onMounted, ref } from 'vue'
import store from '../store'

const rowData = ref([])

const getClietnsFromBackend = async () => {
  const { data } = await axios.get('https://745031694d8e996f.mokky.dev/clients')
  rowData.value = data
}

const addIncrementCount = () => {
  store.commit('increment')
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



const showAlert = () => {

}




</script>

<template>
  <ag-grid-vue :columnHoverHighlight="columnHoverHighlight" style="height: 600px" class="ag-theme-quartz"
    :rowData="rowData" :columnDefs="colDefs">
  </ag-grid-vue>
  <button @click='addIncrementCount(), showAlert()'
    class='bg-rose-600 mt-10 text-gray-300 hover:bg-rose-700 hover:text-white rounded-md px-4 py-3 text-md font-medium'>Сохранить
    таблицу</button>
</template>