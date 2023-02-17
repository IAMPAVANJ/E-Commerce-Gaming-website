
let arr = [];


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd09cfc8f05msh707dc42b00e1450p12b003jsn300b5fb674f0',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
   .then(response =>  response.json())
   .then(data =>  arr=data)
   .catch(err => console.error(err));

   console.log(arr)