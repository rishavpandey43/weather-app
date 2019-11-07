
export function saveCityList(cityList) {
  return {
    type: "SAVE CITY-LIST",
    cityList: cityList
  }
}

export function saveSelectedCity(city) {
  return {
    type: "SELECTED CITY",
    city: city
  }
}
