//   import axios from 'axios'

const state = {
todos:[
    {
        "id": 1,
        "title": "delectus aut autem",
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
      },
]

};

const getters = {allTodos:(state)=>state.todos};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
