export const film = async() => {
  const promise = fetch("https://imdb8.p.rapidapi.com/auto-complete?q=lucifer", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "1c6e1f10cdmsh9e905f16c2cfc02p1d9e21jsn4054cd5b2d6f",
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
}

const stampa = (item) => {

//    console.log(item.titolo); 

  const div = document.createElement('div');
  const poster = document.createElement('img');
  const titolo = document.createElement('h4');
  const anno = document.createElement('h4');
  const genere = document.createElement('h4');
  const cont = document.getElementById('container');

  div.setAttribute("class", "card");
  poster.setAttribute("class", "poster");
  poster.setAttribute("src", item.Poster);
  titolo.setAttribute("class", "titolo");
  anno.setAttribute("class", "anno");
  genere.setAttribute("class", "genere");

  titolo.innerHTML = "Titolo: " + item.Title;
  anno.innerHTML = "Anno: " + item.Year;
  genere.innerHTML = "Genere: " + item.Type;

  if(item.Poster != "N/A") {
      div.appendChild(poster);
  }
  div.appendChild(titolo);
  div.appendChild(anno);
  div.appendChild(genere);
  cont.appendChild(div);
}