
// zgodnie z dokumentacja axios 11:15
import axios from "axios";
// 11:16 import axios ale w Weather czemu ASK ?

import { StrictMode, useEffect, useState } from "react";

// 10: init
const Weather = () => {
    // 10:40 useState do tablicy .1
    
    const [weatherData, setWeatherData] = useState([]);
    //uzywamy 2-go useeffect hooka kiedy sie zaladuje 11:42 odpowiada za kontrole cyklu zycia naszego komponentu
    // 12:12 teoria: calback,tablica zaleznosci i ktorego stanu zmiana ma wywolac zmiane czy zawsze domyslnie 
    // pusta tabl zaleznosci wywola tylko raz po zaladowaniu komponentu
    //czy jak u nas na starcie
    // dokoncz : >> od 16:39 v1 pogoda warszt<<
    
    //16:36 REFAKTOR POBIERANIA
    //obsluga tego zapytania 16:48
    
    const getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop').then(res => {
            console.log("🚀 ~ file: Weather.js:25 ~ getWeatherData ~ res:", res)
        })
    }

        const staraFunkcja = () => {
            // useEffect(()=>{
                // test czy tak dziala 12:23
                //12:47 StrictMode z index.js powoduje double consol.log
                console.log('tylko raz zaladowanie komponentu to samo co zamontowanie?');
                // czemu u mnie 2x nie consologuje przez StrictMode?
                //13:16 pobieranie wybieramy metode opst wysyl get pobieranie
                // Api Json ? z opisu z sc: 3999 string czyli ma byc '' 13:40
                // podobnie jak featch bez .then automat
                axios.get('https://danepubliczne.imgw.pl/api/data/synop')
                //odpowiedzia jest funkcja
                .then(res=>{
                // zobacz co odpowiedzia jest 14:45
                console.log(res);
                // zapytanie typu xhr czyli xml-http-request ;metoda get status 200 ok
                // ja 
                setWeatherData(res);
                // nie wiem czy jest sens wyswietlac funkcje
                console.log("🚀 ~ file: Weather.js:36 ~ useEffect ~ setWeatherData(res):", setWeatherData(res))
                console.log('ale zmienna - obiekt ustawiony setterem to ok:', weatherData);
                })
            // },[])
        }
        //16:36 REFAKTOR POBIERANIA

    return(
        <div className="weather">
            pogoda
        </div>
    )
} 
export default Weather;