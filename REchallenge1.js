function rechercheLineaire(tableau, element) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === element) {
      return `L'élément ${element} a été trouvé à l'index ${i}.`;
    }
  }
  return `L'élément ${element} n'a pas été trouvé.`;
}

let tabRecherche1 = [10, 50, 30, 70, 40];
console.log(rechercheLineaire(tabRecherche1, 30));
console.log(rechercheLineaire(tabRecherche1, 99));