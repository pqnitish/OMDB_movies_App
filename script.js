let moiveName = document.getElementById("movie-name");
//console.log(moiveName);
let serachButton = document.getElementById("btn");
let containter = document.getElementById("container");
let API_KEY = "271e1c0c";
serachButton.addEventListener("click", function () {
  let name = moiveName.value;
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      diplayData(data);
    });
  //console.log(name);
});
function diplayData(data) {
  console.log(data);
  let title = document.createElement("h2");
  let year = document.createElement("h3");
  let poster = document.createElement("img");
  title.innerHTML = `Movie:${data.Title}`;
  year.innerHTML = `Release Year:${data.Year}`;
  poster.setAttribute("class", "poster");
  poster.src = data.Poster;
  containter.append(title, year, poster);
}
