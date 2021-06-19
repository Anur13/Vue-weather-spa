export async function getHomeCities() {
  let cities = {}
  const london = await fetch(`http://api.weatherapi.com/v1/current.json?key= 32e77c8c6e3f43b5a9d141711212205&q=London&aqi=no`).then(data =>
    data.json()
  )
  const kiev = await fetch(`http://api.weatherapi.com/v1/current.json?key= 32e77c8c6e3f43b5a9d141711212205&q=Kiev&aqi=no`).then(data => data.json())
  const moscow = await fetch(`http://api.weatherapi.com/v1/current.json?key= 32e77c8c6e3f43b5a9d141711212205&q=Moscow&aqi=no`).then(data =>
    data.json()
  )
  const newYork = await fetch(`http://api.weatherapi.com/v1/current.json?key= 32e77c8c6e3f43b5a9d141711212205&q=New-York&aqi=no`).then(data =>
    data.json()
  )
  const Tokio = await fetch(`http://api.weatherapi.com/v1/current.json?key= 32e77c8c6e3f43b5a9d141711212205&q=Tokio&aqi=no`).then(data => data.json())
  cities = [london, kiev, newYork, moscow, Tokio]
  return cities
}

export async function getCities(input) {
  const info = await fetch(`http://api.weatherapi.com/v1/search.json?key= 32e77c8c6e3f43b5a9d141711212205&q=${input}`).then(data => data.json())
  return info
}
export async function getCityInfo(input) {
  const info = await fetch(`http://api.weatherapi.com/v1/current.json?key= 32e77c8c6e3f43b5a9d141711212205&q=${input}`).then(data => data.json())
  return info
}
