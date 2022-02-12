import axios from 'axios'

const state = {
todos:[]

};

const getters = {allTodos:(state)=>state.todos};

const actions = {
  async fetchTodos(){
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response)
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
