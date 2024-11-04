// beroende på film ändras texten längst ner med class text och id total
// om jag väljer ett seat så ska priset för den filmen stå där nere, summan går upp ju fler seat jag väljer
// men om jag klickar två gånger på ett seat så ska det också försvinna så att det subtraherar en seat
// det ska också stå hur många seats jag valt i text och id total längst ner
// när jag väljer ett seat så ska färgen ändras och ändras tillbaka när jag klickar igen
// occupied ska ej kunna väljas
// ändra selected filmerna till att ta från db istället
// länk finns https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json
// kom ihåg loggbok och readme

import { Seats, SelectedSeats } from "./seat.js";
import { AddMovies, CaclulateSeatCost } from "./movies.js";

SelectedSeats();
Seats();
AddMovies();
CaclulateSeatCost();
