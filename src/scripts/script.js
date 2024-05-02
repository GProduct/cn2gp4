let currentQuestionIndex = 0;

//TABLEAU DES REFERENCES
//nom : nom de la référence
//quantité : quantité de la référence
//unitéQuantité : unité de la quantité
//valeur : valeur de la référence
//unitéValeur : unité de la valeur

let references = [
    {
        "nom": "Diesel en 1 an.",
        "quantité": "1",
        "unitéQuantité": "Litre(s)",
        "valeur": "2.640",
        "unitéValeur": "Kg CO2",
    },
    {
        nom: "plastique(s) depuis leur(s) fabrication",
        quantité: "1",
        unitéQuantité: "sac(s)",
        valeur: "0.25",
        unitéValeur: "Kg CO2",
    },
    {
        nom: "cigarette",
        quantité: "1",
        unitéQuantité: "Mégot(s)",
        valeur: "0.14",
        unitéValeur: "Kg CO2",
    },
];

//PILE DES ACTIONS
//c'est une pile qui enregiste les pages par lesquelles l'utilisateur est passé pour que 
//l'utilisateur puisse revenir en arrière
let path = [];

//TABLEAU DES REPONSES
//c'est un tableau qui enregistre les réponses de l'utilisateur à la fin
let answers = [];

//TABLEAU DES QUESTIONS
//id : identifiant de la question
//minimum : valeur minimale de la réponse
//question : question posée
//options : options de réponse
//answerType : type de réponse (number, button, checkbox)
//grandeur : grandeur de la réponse (Heures, Go, etc.)
//getAnswer : si la réponse est demandée
//answer : réponse
//formule : formule de calcul
//approx : valeur approximative de la réponse
//placeholder : texte dans l'input (affiché en gris)
//subQuestion : questions suivantes

let questions = [
    {
        id: "0",
        minimum: "0",
        category: "messagerie",
        question: "En moyenne, combien d'e-mails envoyez-vous par semaine ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: "e-mails ",
        getAnswer: true,
        answer: null,
        userAnswer: 52,
        formule: 0.00364*52,
        approx: 1.086956522,
        placeholder: "Entrez une valeur",
        prevQuestion : null,
        subQuestion: ["1"]
    },
    {
        id: "1",
        minimum: "0",
        category: "streaming vidéo",
        question: "En moyenne, combien d'heures par semaine passez-vous à regarder des vidéos en streaming ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "heures",
        unité: "heures",
        getAnswer: true,
        answer: null,
        userAnswer: 52,
        formule: 0.0622*52,
        approx: 1.081081081,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["0"],
        subQuestion: ["2"]
    },
    {
        id: "2",
        minimum: "0",
        category: "transfert de données",
        question: "En moyenne, combien de Go de données transférez-vous par semaine ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "Go",
        unité: "Go",
        getAnswer: true,
        answer: null,
        userAnswer: 52,
        formule: 0.249*52,
        approx: 0.8103448276,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["1"],
        subQuestion: ["3"]
    },
    {
        id: "3",
        minimum: "0",
        category: "stockage de données dans le cloud",
        question: "Quelle quantité de données stockez-vous dans le cloud (via iCloud, Google Drive, OneDrive, etc.) ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "Go",
        unité: "Go de données stockées",
        getAnswer: true,
        answer: null,
        userAnswer: null,
        formule: 0.000525,
        approx: 1.267037037,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["2"],
        subQuestion: ["4"]
    },
    {
        id: "4",
        question: "Participez-vous à des visioconférences (Teams, Zoom, Meet, etc.) ?",
        options: ["oui", "non"],
        answerType: "button",
        getAnswer: false,
        answer: null,
        userAnswer: null,
        formule: null,
        approx: null,
        placeholder: null,
        subQuestion: ["4-1", "5"]
    },
    {
        id: "4-1",
        question: "Allumez-vous votre caméra lors de ces visioconférences ?",
        options: ["oui", "non"],
        answerType: "button",
        getAnswer: false,
        answer: null,
        userAnswer: null,
        formule: null,
        approx: null,
        placeholder: null,
        prevQuestion : ["4"],
        subQuestion: ["4-1-1", "4-1-2"]
    },
    {
        id: "4-1-1",
        minimum: "0",
        category: "visioconférence avec caméra allumée",
        question: "En moyenne, combien de fois par semaine participez-vous à des visioconférences ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: "visioconférences ",
        getAnswer: true,
        answer: null,
        userAnswer: 52,
        formule: 0.1*52, //A modifier
        approx: 0.8064516129,
        placeholder: "Entrez une valeur",
        prevQuestion : ["4-1"],
        subQuestion: ["5"]  
    },
    {
        id: "4-1-2",
        minimum: "0",
        category: "visioconférence avec caméra éteinte",
        question: "En moyenne, combien de fois par semaine participez-vous à des visioconférences ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: "visioconférences ",
        getAnswer: true,
        answer: null,
        userAnswer: 52,
        formule: 0.1*52, //A modifier
        approx: 0.8064516129,
        placeholder: "Entrez une valeur",
        prevQuestion : ["4-1"],
        subQuestion: ["5"]
    },
    {
        id: "5",
        minimum: "0",
        category: "recherche sur le web",
        question: "En moyenne, combien de recherches sur le web faites-vous par semaine (recherches Google, Bing, etc.) ?",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: "requêtes ",
        getAnswer: true,
        answer: null,
        userAnswer: 52,
        formule: 0.00123*52,
        approx: 6.039726027,
        placeholder: "Entrez une valeur",
        prevQuestion : ["4-1-1", "4-1-2"],
        subQuestion: ["6"]
    },
    {
        id: "6",
        minimum: "0",
        category: "Appareils électroniques",
        question: "Lesquels de ces appareils possédez-vous ?",
        exactVal: true,
        options: [
            "smartphone",
            "ordinateur portable",
            "ordinateur fixe",
            "écran d'ordinateur",
            "tablette",
            "télévision",
            "box internet",
            "clé USB",
            "disque dur externe"
        ],
        answerType: "checkbox",
        getAnswer: true,
        answer: [
            null, 
            null, 
            null, 
            null, 
            null, 
            null, 
            null, 
            null, 
            null
        ],
        userAnswer: [
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1
        ],
        formule: [
            33.6,
            35,
            46.1,
            9.81,
            25.3,
            45,
            7.22,
            1.25,
            3.16
        ],
        prevQuestion : ["5"],
        subQuestion: null
    }
];

/* ORGANISATION DES DIVs

    <div id="questionsContainer">
        <!-- Chaque question est représentée par une div avec la classe "column" -->
        <div class="column">
            <p>Question</p> <!-- Le texte de la question -->
            <input type="number"> <!-- L'input pour la réponse (si la question est de type "number") -->
            <!-- La div pour contenir les boutons Précédent et Suivant -->
            <div class="buttons-container-row">
                <button>Précédent</button> <!-- Le bouton pour revenir à la question précédente -->
                <button>Suivant</button> <!-- Le bouton pour passer à la question suivante -->
            </div>
        </div>
    </div>
*/

/*Fonction pour démarrer le questionnaire
  Affiche les questions une par une, 
  elles sont immédiatement cachées (sauf la question 0) par la suite dans la fonction displayQuestion();
*/
function startSurvey() {
    for (let i = 0; i < questions.length; i++) {
        displayQuestion(questions[i]);
    }
    document.getElementById('startSurveyBtn').style.display = 'none'; //Cache le bouton de démarrage
    document.getElementById('0').style.display = 'flex'; //Affiche la première question
    progressBar(0); 
}

//Fonction pour afficher les questions
//Insère les questions dans la div principales et les masques
function displayQuestion(question) {
    if(question.answerType == 'number') {
        let questionContainer = document.getElementById('questionsContainer');

        //Création de la div pour englober question et boutons
        let questionGlobal = document.createElement('div')
        questionGlobal.id = question.id;
        questionGlobal.className = "question-global";
        questionContainer.appendChild(questionGlobal);

        //Creation de la div pour la question
        let questionArea = document.createElement('div')
        questionArea.id = question.id;
        questionArea.className = 'column';
        questionGlobal.appendChild(questionArea);

        //Création de la phrase question
        let questionText = document.createElement('p')
        questionText.innerHTML = question.question;
        questionText.className = 'question-text';
        questionArea.appendChild(questionText);

        //creation d'une checkbox pour savoir si l'utilisateur entre une valeur exacte ou approximative
        let checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-container-row-b';
        questionArea.appendChild(checkboxDiv);
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = "exactVal" + question.id;
        checkbox.addEventListener("change", function() {
            if(checkbox.checked) {
                question.exactVal = true;
                console.log("valeur exacte");
            } else {
                question.exactVal = false;
                console.log("valeur approximative");
            }
        });
        let label = document.createElement('label')
        label.innerHTML = "J'entre une valeur exacte";
        label.htmlFor = "exactVal" + question.id;
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);


        //Création de la zone d'input pour la réponse
        let input = document.createElement('input')
        input.type = 'number';
        input.min = question.minimum;
        input.placeholder = question.placeholder + question.grandeur;
        input.id = "answer" + question.id;
        input.className = 'number-input';
        questionArea.appendChild(input);
        questionGlobal.style.display = 'none';

        displayButtons(questionGlobal, question);
        
    } else if(question.answerType == 'button') {
        let questionContainer = document.getElementById('questionsContainer');

        //Création de la div pour englober question et boutons
        let questionGlobal = document.createElement('div')
        questionGlobal.id = question.id;
        questionGlobal.className = "question-global";
        questionContainer.appendChild(questionGlobal);

        //Creation de la div pour la question
        let questionArea = document.createElement('div')
        questionArea.id = question.id;
        questionArea.className = 'column';
        questionGlobal.appendChild(questionArea);

        //Création de la phrase question
        let questionText = document.createElement('p')
        questionText.innerHTML = question.question;
        questionText.className = 'question-text';
        questionArea.appendChild(questionText);

        //On créé une div horizontale pour contenir les boutons
        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons-container-row';
        questionArea.appendChild(buttonsDiv);

        //Pour chaque option de réponse, on crée un bouton qui contient le texte de l'option
        for (let i = 0; i < question.options.length; i++) {
            let button = document.createElement('button')
            button.innerHTML = question.options[i];
            button.id = question.id + question.options[i];
            button.className = 'option-btn';
            buttonsDiv.appendChild(button);

            //On ajoute un event listener pour chaque bouton
            button.addEventListener("click", function () {
                console.log("clicked");
                nextQuestion(question.id, question.subQuestion[i]); //On passe à la question suivante en fonction de la réponse cliquée 
            });
        }

        //Création du bouton pour revenir à la question précédente
        let previousBtn = document.createElement('button');
        previousBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span>Précédent`;
        previousBtn.className = "nav-btn-left";
        previousBtn.addEventListener("click", function () {
            let actualId = question.id;
            let previousId = path.pop();   //On récupère l'id de la question précédente car path.pop() renvoie la dernière valeur du tableau path,c-à-d l'id de la question précédente
            previousQuestion(actualId, previousId); //On revient à la question précédente
        });
        questionGlobal.appendChild(previousBtn);
        
        questionGlobal.style.display = 'none';    //On masque la question pour l'instant
    } else if(question.answerType == 'checkbox') {
        let questionContainer = document.getElementById('questionsContainer');

        //Création de la div pour englober question et boutons
        let questionGlobal = document.createElement('div')
        questionGlobal.id = question.id;
        questionGlobal.className = "question-global";
        questionContainer.appendChild(questionGlobal);

        //Creation de la div pour la question
        let questionArea = document.createElement('div')
        questionArea.id = question.id;
        questionArea.className = 'column';
        questionGlobal.appendChild(questionArea);

        //Création de la phrase question
        let questionText = document.createElement('p')
        questionText.innerHTML = question.question;
        questionText.className = 'question-text';
        questionArea.appendChild(questionText);

        //creation d'une div verticale pour contenir toutes les checkbox
        let checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-container-column';
        questionArea.appendChild(checkboxDiv);

        //Pour chaque option de réponse, on crée une checkbox et un label
        for (let i = 0; i < question.options.length; i++) {
            //creation d'une div horizontale pour contenir checkboxes et labels
            let checkboxRow = document.createElement('div');
            checkboxRow.className = 'checkbox-container-row';
            checkboxDiv.appendChild(checkboxRow);

            let label = document.createElement('label')
            label.innerHTML = question.options[i];
            label.htmlFor = question.id + question.options[i];
            checkboxRow.appendChild(label);

            //Creation d'une div horizontale pour contenir le bouton +, l'input et le bouton -
            let addRemoveDiv = document.createElement('div');
            addRemoveDiv.className = 'add-remove-container-row';
            checkboxRow.appendChild(addRemoveDiv);

            //creation d'un bouton pour diminuer la valeur du nombre
            let removeBtn = document.createElement('button');
            removeBtn.innerHTML = `<span class="material-symbols-outlined">remove</span>`;
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener("click", function () {
                let input = document.getElementById(question.id + question.options[i]);
                if(input.value > question.minimum) {
                    input.value--;
                }
            });
            addRemoveDiv.appendChild(removeBtn);

            let input = document.createElement('input')
            input.type = 'number';
            input.min = question.minimum;
            input.value = 0;
            input.focus();
            input.id = question.id + question.options[i];
            input.className = 'number-input-b';
            addRemoveDiv.appendChild(input);

            //creation d'un bouton pour augmenter la valeur du nombre
            let addBtn = document.createElement('button');
            addBtn.innerHTML = `<span class="material-symbols-outlined">add</span>`;
            addBtn.className = "add-btn";
            addBtn.addEventListener("click", function () {
                let input = document.getElementById(question.id + question.options[i]);
                input.value++;
            });
            addRemoveDiv.appendChild(addBtn);
        }

        //Afficher les boutons suivant et précédent
        displayButtons(questionGlobal, question);

        questionGlobal.style.display = 'none';  //On masque la question pour l'instant
    }
}

//Fonction pour afficher les boutons suivant et précédent
function displayButtons(questionArea, question) {
    //Création d'une div horizontale pour habriter les boutons suivant et précédent
    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-container-row';
    questionArea.appendChild(buttonsDiv);

    //Création du bouton pour revenir à la question précédente
    if(question.prevQuestion != null) {  //Si la question a une question précédente, on affiche le bouton pour revenir à la question précédente
        let previousBtn = document.createElement('button');
        previousBtn.className = "nav-btn-left";
        previousBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span>Précédent`;
        previousBtn.addEventListener("click", function () {
            let actualId = question.id;
            let previousId = path.pop();    //On récupère l'id de la question précédente car path.pop() renvoie la dernière valeur du tableau path,c-à-d l'id de la question précédente
            previousQuestion(actualId, previousId); //On revient à la question précédente
        });
        buttonsDiv.appendChild(previousBtn);
    }

    //Création du bouton pour passer à la question suivante
    if(question.subQuestion == null) {  //Si la question n'a pas de question suivante, on affiche le bouton pour afficher les résultats 
        let nextBtn = document.createElement('button');
        nextBtn.innerHTML = `Découvrir les résultats`;
        nextBtn.onclick = function () {
            let valid = fetchAnswers(question.id);
            if(!valid) {
                console.log("Veuillez entrer une valeur valide");
                return;
            } else {
                console.log("Valeur valide");
                displayResults();
            }
        };
        nextBtn.type = "button";
        nextBtn.className = "nav-btn";

        buttonsDiv.appendChild(nextBtn);
    } else {
        let nextBtn = document.createElement('button');
        nextBtn.innerHTML = `Suivant<span class="material-symbols-outlined">arrow_forward</span>`;
        nextBtn.className = "nav-btn-right";
        nextBtn.addEventListener("click", function () {
            let subQuestionId = question.subQuestion[0]; //On récupère l'id de la question suivante
            let actualId = question.id;                  //On récupère l'id de la question actuelle
            nextQuestion(actualId, subQuestionId);
        });
        buttonsDiv.appendChild(nextBtn);
    }
}

//Fonction pour passer à la question suivante
//Masque la question actuelle et affiche la question suivante
function nextQuestion(actualId, nextId) {
    path.push(actualId);    //On ajoute l'id de la question actuelle dans la pile path pour savoir quelle question afficher en cas de retour
    console.log("question actuelle : " + actualId);
    console.log("prochaine question : " + nextId);
    const valid = fetchAnswers(actualId);
    if(!valid) {
        console.log("Veuillez entrer une valeur valide");
        return;
    } else {
        console.log("Valeur valide");
        document.getElementById(actualId).style.display = 'none';
        document.getElementById(nextId).style.display = 'flex';
        progressBar(nextId);
        return;
    }
}

//Fonction pour revenir à la question précédente
//Masque la question actuelle et affiche la question précédente
function previousQuestion(actualId, previousId) {
    console.log(path)
    console.log("question précédente : " + previousId);
    console.log("question actuelle : " + actualId);
    progressBar(previousId);
    document.getElementById(actualId).style.display = 'none';
    document.getElementById(previousId).style.display = 'flex';
}

function progressBar(id) {
    let index = (questions.findIndex(q => q.id === id) * 100)/questions.length;
    console.log(index);
    document.getElementById("progressBarBg").style.height = '25px';
    document.getElementById("progressBarFg").style.width = `${index}%`;
}

//fonction pour récupérer les réponses de l'utilisateur à chaque passage de question
function fetchAnswers(questionId) {
    var valid = false;
    let userAnswer;
    let definitiveAnswer;
    let correctedAnswer;

    let question = questions.find(q => q.id === questionId);
    if(question.getAnswer && question.answerType == 'number') {
        userAnswer = document.getElementById("answer" + questionId).value;
        question.userAnswer = question.userAnswer * userAnswer;
        if(question.exactVal == false) {    //Si l'utilisateur entre une valeur approximative, on applique la formule d'approximation
            correctedAnswer = (userAnswer*question.approx).toFixed(2);
            definitiveAnswer = (correctedAnswer*question.formule).toFixed(2);
        } else {    //Sinon, on applique la formule exacte
            definitiveAnswer = (userAnswer*question.formule).toFixed(2);
        }
        if(definitiveAnswer < question.minimum) {   //Si la réponse est inférieure à la valeur minimale, on affiche une alerte
            alert(`La valeur entrée est inférieure à ${question.minimum}, veuillez entrer une valeur positive`);
        } else {
            question.answer = definitiveAnswer;    //on faiot la multiplication par 52 pour avoir la valeur annuelle
            console.log("réponse donnée par l'utilisateur : " + userAnswer);
            console.log("réponse avec approximation : " + correctedAnswer);
            console.log("réponse définitive en KgCo2: " + definitiveAnswer);
            console.log(questions);
            valid = true;
        }
    } else if(question.getAnswer && question.answerType == 'checkbox') {
        for (let i = 0; i < question.options.length; i++) {
            userAnswer = document.getElementById(questionId+ question.options[i]).value;
            question.userAnswer[i] = question.userAnswer[i] * userAnswer;
            if(question.exactVal == false) {
                correctedAnswer = (userAnswer*question.approx[i]).toFixed(2);
                definitiveAnswer = (correctedAnswer*question.formule[i]).toFixed(2);
            } else {
                definitiveAnswer = (userAnswer*question.formule[i]).toFixed(2);
            }
            if(definitiveAnswer < question.minimum) {
                alert(`La valeur entrée est inférieure à ${question.minimum}, veuillez entrer une valeur positive`);    //Si la réponse est inférieure à la valeur minimale, on affiche une alerte
            } else {
                question.answer[i] = definitiveAnswer;
                console.log("réponse donnée par l'utilisateur : " + userAnswer);
                console.log("réponse avec approximation : " + correctedAnswer);
                console.log("réponse définitive en KgCo2: " + definitiveAnswer);
                console.log(questions);
                valid = true;
            }
        }
    } else if(!question.getAnswer) {
        console.log("pas de réponse à récupérer");
        valid = true;
    } else {
        console.log("erreur");
    }
    return valid;
}

//Fonction pour calculer les résultats
function calculateResults() {
    var total = 0;
    let subtotal = 0;
    for (let i = 0; i < questions.length; i++) {
        if(questions[i].answerType == 'number' && questions[i].answer != null) {
            total = total + parseInt(questions[i].answer);
        } else if(questions[i].answerType == 'checkbox' && questions[i].answer != null) {
            console.log("dans la boucle des checkbox");
            questions[i].answer.forEach(answer => {
                subtotal = subtotal + parseInt(answer);
                console.log("subtotal : " + subtotal);
            });
        }
    }
    console.log("total : " + total);
    return [total, subtotal];
}

//Fonction pour afficher les résultats
function displayResults() {
    let total = calculateResults();
    let total1 = total[0];  //On récupère le total des réponses pour les habitudes de consommation
    let total2 = total[1];  //On récupère le total des réponses pour les appaireils
    let questionContainer = document.getElementById('questionsContainer');
    questionContainer.innerHTML = '';   //On vide la div pour afficher les résultats

    //Création de la div pour englober les résultats
    let resultsGlobal = document.createElement('div');
    resultsGlobal.id = "results";
    resultsGlobal.className = "results-global";
    questionContainer.appendChild(resultsGlobal);

    //Création de la div pour afficher les résultats
    let resultsArea = document.createElement('div');
    resultsArea.id = "resultsArea";
    resultsArea.className = 'column';
    resultsGlobal.appendChild(resultsArea);

    //Création de la phrase pour afficher les résultats
    let questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.innerHTML = `En maintenant ces habitudes de consomation chaque semaine, votre empreinte carbone liée au numérique pourrait s'élever à ${total} Kg de CO2 par an`;
    resultsArea.appendChild(questionText);

    //Création de la phrase pour afficher les références
    references.forEach(reference => {
        displayReferences(reference, resultsArea, total1);
    });
    displayStats(resultsGlobal, total1, total2);

    //Création du bouton pour recommencer le questionnaire
    let resetBtn = document.createElement('button');
    resetBtn.innerHTML = `<span class="material-symbols-outlined">restart_alt</span>Recommencer le questionnaire`;
    resetBtn.onclick = function () {
        location.reload(); //On recharge la page pour recommencer le questionnaire
    };
    resultsArea.appendChild(resetBtn);
}

//Fonction pour afficher les références
function displayReferences(reference, resultsArea, total) {
    if(total == 0) {
        return;
    } else {
        let convertion = total / reference.valeur;

        let referenceDiv = document.createElement('div');
        referenceDiv.className = 'reference';
        resultsArea.appendChild(referenceDiv);
        let referenceText = document.createElement('p');
        referenceText.innerHTML = `vous emmetez autant que ${convertion.toFixed(0)} ${reference.unitéQuantité} de ${reference.nom}`;
        referenceDiv.appendChild(referenceText);
    }
}

//Fonction pour afficher les résultats
function displayStats(resultsGlobal, total1, total2) {
    if(total1 == 0) {
        return;
    } else {
        let statsArea = document.createElement('div');
        statsArea.id = "statsArea";
        statsArea.className = 'column';
        resultsGlobal.appendChild(statsArea);

        questions.forEach(question => {
            if(question.answerType == 'number') {
                let value = question.answer;
                if (value == 0 || value == null) {
                    return;
                } else {
                    value = question.answer;
                    let percent = ((value * 100)/total1).toFixed(2);
                    if(percent > 100) {
                        percent = 100;
                    }
                    let resultText = document.createElement('p');
                    resultText.innerHTML = `${question.category} : ${percent}% avec ${value} Kg de CO2 émi pour ${question.userAnswer} ${question.unité} par an.`;
                    statsArea.appendChild(resultText);
                    displayProgressBar(statsArea, percent);
                }
            }
        });
    }
    if(total2 == 0) {
        return;
    } else {
        let statsArea1 = document.createElement('div');
        statsArea1.id = "statsArea1";
        statsArea1.className = 'column';
        resultsGlobal.appendChild(statsArea1);

        questions.forEach(question => {
            if(question.answerType == 'checkbox') {
                let i = 0;
                question.answer.forEach(answer => {
                    let value = answer;
                    if (value == 0 || value == null) {
                        return;
                    } else {
                        value = answer;
                        let percent = ((value * 100)/total2).toFixed(2);
                        if(percent > 100) {
                            percent = 100;
                        }
                        let resultText = document.createElement('p');
                        resultText.innerHTML = `${question.options[i]} : ${percent}% avec ${value} Kg de CO2 par an pour ${question.userAnswer[i]} appareil(s).`;
                        statsArea1.appendChild(resultText);
                        displayProgressBar(statsArea1, percent);
                    }
                    i++;
                });
            }
        });
    }
}

//Fonction pour afficher des barre de progression
function displayProgressBar(statsArea, percent) {
    if(percent == 0) {
        return;
    } else {
        let progressBarBg = document.createElement('div');
        progressBarBg.id = "progressBarBg";
        progressBarBg.style.height = '25px';
        progressBarBg.className = "progress-bar-bg-a";
        progressBarBg.style.width = '100%';
        document.body.appendChild(progressBarBg);
        statsArea.appendChild(progressBarBg);

        let progressBarFg = document.createElement('div');
        progressBarFg.id = "progressBarFg";
        progressBarFg.className = "progress-bar-fg-a";
        progressBarFg.style.width = `${percent}%`;
        progressBarBg.appendChild(progressBarFg);
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const bottomLogo = document.getElementById('bottomLogo');
    let btn = document.getElementById('toggleThemeBtn');
    btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_blanc_rvb.png`;
} else {
    const bottomLogo = document.getElementById('bottomLogo');
    let btn = document.getElementById('toggleThemeBtn');
    btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_noir_rvb.png`;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const bottomLogo = document.getElementById('bottomLogo');
    let btn = document.getElementById('toggleThemeBtn');
    if (e.matches) {
        bottomLogo.src = 'src/styles/icon/logo_cours_transversal_blanc_rvb.png';
        btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    } else {
        bottomLogo.src = 'src/styles/icon/logo_cours_transversal_blanc_rvb.png';
        btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    }
});

let bgImgUrl = [
    {
        img: "https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg",
        theme: "red-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2022/11/05/17/15/leaves-7572380_1280.jpg",
        theme: "green-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
        theme: "red-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/01/08/09/34/jellyfish-7704801_1280.jpg",
        theme: "blue-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg",
        theme: "green-theme",
    }
]

const randomIndex = Math.floor(Math.random() * bgImgUrl.length);
const randomElement = bgImgUrl[randomIndex];
document.getElementById("body").style.backgroundImage = `url(${randomElement.img})`;
document.documentElement.setAttribute('data-theme', randomElement.theme);

function toggleTheme() {
    const randomIndex = Math.floor(Math.random() * bgImgUrl.length);
    const randomElement = bgImgUrl[randomIndex];
    document.getElementById("body").style.backgroundImage = `url(${randomElement.img})`;
    document.documentElement.setAttribute('data-theme', randomElement.theme);
}