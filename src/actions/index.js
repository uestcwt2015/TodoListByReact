export const addTodo = (id, value) => ({
  type: 'ADD_TODO',
  id,
  value
});

export const setFilterStatus = value => ({
  type: 'SET_FILTER_STATUS',
  value
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};