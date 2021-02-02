const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0c5d525be176f640f891f171cc8ce871&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, {body}) =>{
        if (error){
            callback('Unable to connect to Weather service!', undefined)
        } else if(body.error){
            callback('Unable to find Location!', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions + ". It is currenty " + body.current.temperature + " degrees out. There is a " + body.current.precip + "% chance of rain.")
        }
    })
}

module.exports = forecast