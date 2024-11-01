let selectedbody = document.getElementById("movie");

fetch(
  "https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json"
)
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      console.log(data.name);
      const option = AddMovies(data.Title, data.Year, data.Price, data.Poster);
      selectedbody.appendChild(option);
    });
  });

export function AddMovies(Title, Year, Price, Poster) {
  let option = document.createElement("option");
  option.value = Price;
  option.innerHTML = `${Title} (${Year}) ${Price} kr`;
  return option;
}
