function mainCityList(state = [], action) {
  switch (action.type) {
    case "SAVE CITY-LIST":
      state = action.cityList;
      return state;
    default:
      return state;
  }
}

export default mainCityList;
