export async function fetchWeather (city:string):
    Promise<{city:string; temperature:number}>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    city,
                    temperature:Math.floor(Math.random()*30)+10  // asumsi random nya dari 10-40
                });
            },1000)
        })
}






// function sederhana tanpa promise
// function weather (city){
//     return ({
//         city,
//         temperature: Math.floor(Math.random()*30)+10
//     })
// }