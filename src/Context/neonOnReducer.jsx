const NeonOnReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        neonOn: !state.neonOn
      }
    }
    default:
      return state
  }
}

export default NeonOnReducer