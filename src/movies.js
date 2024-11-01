let selectedbody = document.getElementById("movie");

fetch("http://localhost:5173/javascriptmovieseatbookSTART-main/data.json")
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


