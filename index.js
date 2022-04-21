/*fetch("https://api.tvmaze.com/search/shows?q=batman")
.then((response) => {
  console.log(response)
  return response.json()
})
.then((jsonData) => {
  console.log(jsonData);
})*/

/*function searchShow(query) {
  let baseUrl = "https://api.tvmaze.com/search/shows?q=";

  fetch(baseUrl + query)
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
}*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'c491733ccdmshf324338ac60a5cbp10756cjsn8abae4d7c1b7'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=avengers', options)
	.then(response => response.json())
	.then(data => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src="${poster}"> <h2>${name}</h2>`;
      document.querySelector('.movies').innerHTML += movie;
    })
  })
	.catch(err => console.error(err));