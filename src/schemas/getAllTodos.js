const todos = require('./todos')
const getAllTodos = {
    schema: {
        response: {
            200:{
                type: 'array',
                products: todos
            },
            
        },
    }
  }


  module.exports = getAllTodos