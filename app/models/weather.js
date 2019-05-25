export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.icon = data.weather[0].icon
  }
  tempConvert(temp) {
    let f = 1.8 * (temp - 273) + 32;
    return f.toFixed(0)
  }
  get Template() {
    let f = this.tempConvert(this.kelvin) + "°"

    return `
    <h6 class="text-right"><img src="http://openweathermap.org/img/w/${this.icon}.png">${f}</h6>
    <h4 class="text-right">${this.city}</h4>
    
    `
  }
}

