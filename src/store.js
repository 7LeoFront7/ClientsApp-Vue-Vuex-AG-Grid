import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			countTables: 0
		}
	},
	mutations: {
		increment(state) {

			state.countTables = state.countTables + 1
		},
	},
})

export default store