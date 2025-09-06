import React from 'react'

export async function GetData(city) {
    let data=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
    data=await data.json();
    let {latitude ,longitude}=data.results[0];
    let res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,rain,snowfall,showers`)
    res=await res.json();
    console.log(res);
    return res;
    


}
