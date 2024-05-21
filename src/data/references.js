// TABLEAU DES REFERENCES
// nom : nom de la référence
// quantité : quantité de la référence
// unitéQuantité : unité de la quantité
// valeur : valeur de la référence
// unitéValeur : unité de la valeur

export const references = [
  {
    nom: "trajet[plural] Genève-Paris en avion pour 1 personne.",
    quantité: "1",
    unitéQuantité: "",
    valeur: "98",
    unitéValeur: "Kg CO2",
  },
  {
    nom: "sac[plural] plastique[plural].",
    quantité: "1",
    unitéQuantité: "",
    valeur: "0.25",
    unitéValeur: "Kg CO2",
  },
  {
    nom: "mégot[plural] de cigarette.",
    quantité: "1",
    unitéQuantité: "",
    valeur: "0.14",
    unitéValeur: "Kg CO2",
  },
];

export function displayReferences(reference, resultsArea, total) {
  if (total == 0) {
    return;
  } else {
    let convertion = total / reference.valeur;

    let referenceDiv = document.createElement("div");
    resultsArea.appendChild(referenceDiv);
    referenceDiv.innerHTML = `
            <div class="references-container">
                <div>
                    <h1>${convertion.toFixed(0).toLocaleString()}</h1>
                </div>
                <div>
                    <h2 id="questionText">${
                      convertion >= 2
                        ? reference.nom.replaceAll("[plural]", "s")
                        : reference.nom.replaceAll("[plural]", "")
                    }</h2>
                </div>
            </div>`;
  }
}
