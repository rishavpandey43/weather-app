function selectedCityList(state = [], action) {
  switch (action.type) {
    case "SELECTED CITY":
      let tempState = state;
      tempState.push(action.city);
      return tempState;
    default:
      return state;
  }
}

export default selectedCityList;
