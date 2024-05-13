let currentQuestionIndex = 0;

//TABLEAU DES REFERENCES
//nom : nom de la référence
//quantité : quantité de la référence
//unitéQuantité : unité de la quantité
//valeur : valeur de la référence
//unitéValeur : unité de la valeur

let references = [
    {
        nom: "trajet[plural] Genève-Paris pour en avion pour 1 personne.",
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

//ILLUSTRATIONS, LES EXEMPLES NE SONT PAS REELS
let activities = [
    {
        activiyType: "sport",
        activityName : "fitness",
        activityLink : "https://vie-de-campus.unige.ch/catalogue/321-fitness-abonnement?structureIds=3",
        activityIllustration : "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    },
    {
        activiyType: "sport",
        activityName : "Padel",
        activityLink : "https://vie-de-campus.unige.ch/catalogue/252-padel--terrain?structureIds=3",
    },
    {
        activiyType: "sport",
        activityName : "escalade",
        activityLink: "https://fraude.com", 
    },
    {
        activiyType: "politique",
        activityName : "participation à une manifestation",
        activityLink: "https://adlen.com",
    }
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
        category: "📨 messagerie",
        question: "En moyenne, combien d'e-mails envoyez-vous par semaine ?",
        advice: "Quand j'envoie des e-mails, des pièces jointes...<br> Si j'envoie un mail à 10 personnes, cela compte pour 10 e-mails.",
        resultsAdvices: "Pour réduire l'impact de mes e-mails: <br> - zipper les pièces jointes <br> - limiter au maximum le nombre de destinataires et de pièces jointes <br> - Au lieu d'envoyer un mail à la personne à coté de moi, je privilégie les transferts USB <br> - supprimer régulièrement les e-mails inutiles (spam, newsletters...)",
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
        category: "📼 streaming vidéo",
        question: "En moyenne, combien d'heures par semaine passez-vous à regarder des vidéos en streaming ?",
        advice: "Quand je regarde des films sur Netflix, Amazon Prime ou alors des vidéos sur Youtube, TikTok, Instagram, etc... Si vous ne pouvez pas répondre, faites une estimation, l'essentiel c'est d'apprendre !",
        resultsAdvices : "Pour regarder des émissions en direct, il est préférable de privilégier la TNT à l'ADSL (votre box internet). En effet, regarder une émission en streaming HD via sa box ADSL émet autant de gaz à effet de serre que de fabriquer, transporter et lire un DVD ! <br> Essayez d'activer dès que possible le mode économie d'énergie sur vos appareils.",
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
        category: "🛜 transfert de données",
        question: "En moyenne, combien de Go de données transférez-vous par semaine ?",
        advice: "Quand je télécharge des fichiers, des photos, des vidéos, des musiques, Ou alors quand j'envoie des fichiers, des vidéos... Si vous ne pouvez pas répondre, faites une estimation, l'essentiel c'est d'apprendre !",
        resultsAdvices: "Essayer de compresser les fichiers avant de les envoyer, cela réduit la taille des fichiers et donc la consommation d'énergie.",
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
        category: "☁️ stockage de données dans le cloud",
        question: "Quelle quantité de données stockez-vous dans le cloud (via iCloud, Google Drive, OneDrive, etc.) ?",
        advice: "Quand je stocke des fichiers, des photos, des vidéos sur iCloud, Google Drive, OneDrive... Si vous ne pouvez pas répondre, faites une estimation, l'essentiel c'est d'apprendre !",
        resultsAdvices:"Avant de stocker des données dans le cloud, il est préférable de les compresser pour réduire la taille des fichiers et donc la consommation d'énergie. Il est également important de choisir des hébergeur avec une politique environnementale claire, comme des centres de données alimentés par des énergies renouvelables",
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
        question: "Participez-vous à des visioconférences?",
        advice: "Quand je participe à des réunions, des cours, des conférences en ligne, grace à Zoom, Teams, Skype..",
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
        category: "📹 visioconférence avec caméra allumée",
        question: "En moyenne, combien de fois par semaine participez-vous à des visioconférences ?",
        advice: null,
        resultsAdvices: "Il y a quelques mesures simples: <br>- essayez de regrouper les réunions lorsque cela est possible <br>- de désactiver la vidéo lorsqu'elle n'est pas nécessaire <br>- utiliser des plateformes de visioconférence avec des fonctionnalités d'économie d'énergie.",
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
        category: "🔊 visioconférence avec caméra éteinte",
        question: "En moyenne, combien de fois par semaine participez-vous à des visioconférences ?",
        advice: null,
        resultsAdvices: "Il y a quelques mesures simples: <br>- essayez de regrouper les réunions lorsque cela est possible <br>- utiliser des plateformes de visioconférence avec des fonctionnalités d'économie d'énergie.",
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
        category: "💻 recherche sur le web",
        question: "En moyenne, combien de recherches sur le web faites-vous par semaine ?",
        advice: "Quand je fais des recherches sur Google, Bing, Qwant... Si vous ne pouvez pas répondre, faites une estimation, l'essentiel c'est d'apprendre !",
        resultsAdvices: "Encouragez l'utilisation de moteurs de recherche écologiques qui plantent des arbres pour chaque recherche effectuée.<br> Enregistrez en favoris les sites recherchés régulièrement plutôt que de laisser de nombreux onglets ouverts en permanence.<br> On peut également rechercher mieux en utilisant des mots-clés précis, en utilisants les raccourcis des différents navigateurs tels que la recherche avancée.",
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
        category: "⚡ Appareils électroniques",
        question: "Lesquels de ces appareils possédez-vous ?",
        exactVal: true,
        options: [
            `<span class="material-symbols-outlined">smartphone</span> smartphone`,
            `<span class="material-symbols-outlined">laptop_mac</span> ordinateur portable`,
            `<span class="material-symbols-outlined">settop_component</span> ordinateur fixe`,
            `<span class="material-symbols-outlined">desktop_windows</span> écran d'ordinateur`,
            `<span class="material-symbols-outlined">phone_iphone</span> tablette`,
            `<span class="material-symbols-outlined">tv</span> télévision`,
            `<span class="material-symbols-outlined">router</span> box internet`,
            `<span class="material-symbols-outlined">usb</span> clé USB`,
            `<span class="material-symbols-outlined">database</span> disque dur externe`
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
    document.getElementById('divToDelete').style.display = 'none'; //Cache le bouton de démarrage
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

        //Affichage de l'advice
        if(question.advice != null) {
            displayAdvice(question.advice, questionArea);
        }

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
                //console.log("valeur exacte");
            } else {
                question.exactVal = false;
                //console.log("valeur approximative");
            }
        });
        let label = document.createElement('label')
        label.innerHTML = "Cocher la case si la valeur entrée est exacte et non approximative";
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

        //Affichage de l'advice
        if(question.advice != null) {
            displayAdvice(question.advice, questionArea);
        }

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
                //console.log("clicked");
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

        //Affichage de l'advice
        if(question.advice != null) {
            displayAdvice(question.advice, questionArea);
        }

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

            //creation d'une checkbox
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
                //console.log("Veuillez entrer une valeur valide");
                return;
            } else {
                //console.log("Valeur valide");
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

function displayAdvice(advice, questionArea) {
    let adviceDiv = document.createElement('div');
    adviceDiv.className = 'advice-container';
    questionArea.appendChild(adviceDiv);

    let adviceText = document.createElement('p');
    adviceText.innerHTML = `<div><span class="material-symbols-outlined">info</span></div>`;
    adviceText.className = 'advice-icon';
    adviceDiv.appendChild(adviceText);

    let adviceContent = document.createElement('p');
    adviceContent.innerHTML = `<div>${advice}</div>`;
    adviceContent.className = 'advice-content';
    adviceDiv.appendChild(adviceContent);
}

//Fonction pour passer à la question suivante
//Masque la question actuelle et affiche la question suivante
function nextQuestion(actualId, nextId) {
    path.push(actualId);    //On ajoute l'id de la question actuelle dans la pile path pour savoir quelle question afficher en cas de retour
    //console.log("question actuelle : " + actualId);
    //console.log("prochaine question : " + nextId);
    const valid = fetchAnswers(actualId);
    if(!valid) {
        //console.log("Veuillez entrer une valeur valide");
        return;
    } else {
        //console.log("Valeur valide");
        document.getElementById(actualId).style.display = 'none';
        document.getElementById(nextId).style.display = 'flex';
        progressBar(nextId);
        return;
    }
}

//Fonction pour revenir à la question précédente
//Masque la question actuelle et affiche la question précédente
function previousQuestion(actualId, previousId) {
    //console.log(path)
    //console.log("question précédente : " + previousId);
    //console.log("question actuelle : " + actualId);
    progressBar(previousId);
    document.getElementById(actualId).style.display = 'none';
    document.getElementById(previousId).style.display = 'flex';
}

function progressBar(id) {
    let index = (questions.findIndex(q => q.id === id) * 100)/questions.length;
    //console.log(index);
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
            correctedAnswer = (userAnswer*question.approx).toFixed(2)
            ;
            definitiveAnswer = (correctedAnswer*question.formule).toFixed(2);
        } else {    //Sinon, on applique la formule exacte
            definitiveAnswer = (userAnswer*question.formule).toFixed(2);
        }
        if(definitiveAnswer < question.minimum) {   //Si la réponse est inférieure à la valeur minimale, on affiche une alerte
            alert(`La valeur entrée est inférieure à ${question.minimum}, veuillez entrer une valeur positive`);
        } else {
            question.answer = definitiveAnswer;    //on faiot la multiplication par 52 pour avoir la valeur annuelle
            //console.log("réponse donnée par l'utilisateur : " + userAnswer);
            //console.log("réponse avec approximation : " + correctedAnswer);
            //console.log("réponse définitive en KgCo2: " + definitiveAnswer);
            //console.log(questions);
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
                //console.log("réponse donnée par l'utilisateur : " + userAnswer);
                //console.log("réponse avec approximation : " + correctedAnswer);
                //console.log("réponse définitive en KgCo2: " + definitiveAnswer);
                //console.log(questions);
                valid = true;
            }
        }
    } else if(!question.getAnswer) {
        //console.log("pas de réponse à récupérer");
        valid = true;
    } else {
        //console.log("erreur");
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
            //console.log("dans la boucle des checkbox");
            questions[i].answer.forEach(answer => {
                subtotal = subtotal + parseInt(answer);
                //console.log("subtotal : " + subtotal);
            });
        }
    }
    //console.log("total : " + total);
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

    //Affichage du chiffre total
    let totalText = document.createElement('p');
    totalText.innerHTML = `${total.toLocaleString()} Kg de CO2`;
    totalText.className = 'major-text';
    resultsArea.appendChild(totalText);

    //Création de la phrase pour afficher les résultats
    let questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.innerHTML = `En maintenant ces habitudes de consomation chaque semaine, votre empreinte carbone liée au numérique pourrait s'élever à ${total.toLocaleString()} Kg de CO2 par an`;
    resultsArea.appendChild(questionText);

    //Création de la phrase pour afficher les références
    if(total1 != 0) {
        let title = document.createElement('p');
        title.className = 'reference-title';
        title.innerHTML = "Cela équivaut à ...";
        resultsArea.appendChild(title);
        references.forEach(reference => {
            displayReferences(reference, resultsArea, total1);
        });
        displayStats(resultsGlobal, total1, total2);
    }

    //Création du bouton pour recommencer le questionnaire
    let resetBtn = document.createElement('button');
    resetBtn.innerHTML = `<span class="material-symbols-outlined">restart_alt</span>Recommencer le questionnaire`;
    resetBtn.className = "reset-btn";
    resetBtn.onclick = function () {
        location.reload(); //On recharge la page pour recommencer le questionnaire
    };
    resultsArea.appendChild(resetBtn);

    //Création du bouton pour télécharger les résultats
    let downloadBtn = document.createElement('button');
    downloadBtn.innerHTML = `<span class="material-symbols-outlined">download</span>Télécharger les résultats`;
    downloadBtn.className = "download-btn";
    downloadBtn.onclick = function () {
        downloadResults();
    };
    resultsArea.appendChild(downloadBtn);
}

//Fonction pour télécharger les résultats
function downloadResults() {
    // Créer un nouveau document PDF
    const doc = new jsPDF();

    // Ajouter un titre
    doc.setFontSize(20);
    doc.text("Résultats du questionnaire", 105, 15, { align: "center" });

    // Parcourir les questions et ajouter les résultats dans le PDF
    let yOffset = 30;
    questions.forEach((question, index) => {
        yOffset += 10; // Espacement entre chaque question

        // Ajouter le titre de la question
        doc.setFontSize(16);
        doc.text(`Question ${index + 1}: ${question.question}`, 10, yOffset);

        // Ajouter la réponse
        yOffset += 7;
        doc.setFontSize(12);
        doc.text(`Réponse: ${question.answer}`, 10, yOffset);
    });

    // Enregistrer le document PDF
    doc.save("resultats_questionnaire.pdf");
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
        referenceText.innerHTML = `
        <div class="references-container">
            <div>
                <h1>${convertion.toFixed(0).toLocaleString()}</h1>
            </div>
            <div>
                <h2 id="questionText">${convertion >= 2 ? reference.nom.replaceAll("[plural]", 's') : reference.nom.replaceAll("[plural]", '')}</h2>
            </div>
        </div>`;
        referenceDiv.appendChild(referenceText);
    }
}

//Fonction pour afficher les résultats
function displayStats(resultsGlobal, total1, total2) {
    let row = document.createElement('div');
        row.id = "row";
        row.className = 'row';
        resultsGlobal.appendChild(row);
    if(total1 == 0) {
        return;
    } else {
        let statsArea = document.createElement('div');
        statsArea.id = "statsArea";
        statsArea.className = 'column';
        row.appendChild(statsArea);

        let title = document.createElement('p');
        title.className = 'reference-title';
        title.innerHTML = "Les émissions de votre consommation";
        statsArea.appendChild(title);

        questions.forEach(question => {
            if(question.answerType == 'number') {
                let value = question.answer;
                if (value == 0 || value == null) {
                    return;
                } else {
                    value = question.answer;
                    let percent = ((value * 100)/total1);
                    if(percent > 100) {
                        percent = 100;
                    }
                    let resultText = document.createElement('p');
                    resultText.innerHTML = `${question.category} : ${value.toLocaleString()} Kg de CO2 émi par an.`;
                    statsArea.appendChild(resultText);
                    displayProgressBar(statsArea, percent);
                }
            }
        });
    let alternativesDivs = document.createElement("div");
    alternativesDivs.className = "scrollmenu";
    displayAlternatives(alternativesDivs);  
    resultsGlobal.appendChild(alternativesDivs);
    }
    if(total2 == 0) {
        return;
    } else {
        let statsArea1 = document.createElement('div');
        statsArea1.id = "statsArea1";
        statsArea1.className = 'column';
        row.appendChild(statsArea1);

        let title = document.createElement('p');
        title.className = 'reference-title';
        title.innerHTML = "Les émissions de vos appareils.";
        statsArea1.appendChild(title);

        questions.forEach(question => {
            if(question.answerType == 'checkbox') {
                let i = 0;
                question.answer.forEach(answer => {
                    let value = answer;
                    if (value == 0 || value == null) {
                        return;
                    } else {
                        value = answer;
                        let percent = ((value * 100)/total2);
                        if(percent > 100) {
                            percent = 100;
                        }
                        let resultText = document.createElement('p');
                        resultText.innerHTML = `${question.options[i]} : ${value.toLocaleString(1)} Kg de CO2 émi par appareil`;
                        statsArea1.appendChild(resultText);
                        displayProgressBar(statsArea1, percent);
                    }
                    i++;
                });
            }
        });
    }
}

function displayAlternatives(alternativesDivs) {
    for (let i = 0; i < activities.length; i++) {
        let alternativesDiv = document.createElement('div');
        alternativesDiv.className = 'alternative';
        alternativesDiv.innerHTML = `
        <div class="alternative-container">
            <div>
                <h1>${activities[i].activityName}</h1>
            </div>
            <div>
                <button type="button" onclick="window.open('${activities[i].activityLink}')">Découvrir</h2>
            </div>
        </div>`;
        alternativesDivs.appendChild(alternativesDiv);
    }
}

//fonction pour afficher des alternatives

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
        statsArea.appendChild(progressBarBg); // Add progressBarBg to statsArea

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
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_blanc_rvb.png`;
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
        source: "https://pixabay.com/fr/photos/falaises-7579330/",
        theme: "red-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2022/11/05/17/15/leaves-7572380_1280.jpg",
        source: "https://pixabay.com/fr/photos/feuilles-7572380/",
        theme: "green-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
        source: "https://pixabay.com/fr/photos/route-1072821/",
        theme: "red-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/01/08/09/34/jellyfish-7704801_1280.jpg",
        source: "https://pixabay.com/fr/photos/meduse-7704801/",
        theme: "blue-theme",
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg",
        source: "https://pixabay.com/fr/photos/champ-d-orge-campagne-1684052/",
        theme: "kaki-theme",
    }
]

let randomIndex = Math.floor(Math.random() * bgImgUrl.length);
let randomElement = bgImgUrl[randomIndex];
document.getElementById("body").style.backgroundImage = `url(${randomElement.img})`;
document.documentElement.setAttribute('data-theme', randomElement.theme);

let source = randomIndex;

function toggleTheme() {
    randomIndex = Math.floor(Math.random() * bgImgUrl.length);
    source = randomIndex;
    const randomElement = bgImgUrl[randomIndex];
    document.getElementById("body").style.backgroundImage = `url(${randomElement.img})`;
    document.documentElement.setAttribute('data-theme', randomElement.theme);
}

document.getElementById('getImgReferenceBtn').addEventListener('click', function() {
    var r = confirm("Une nouvelle page va s'ouvrir pour vous rediriger vers la source de l'image. Voulez-vous continuer ?");
    if (r == true) {
        window.open(bgImgUrl[randomIndex].source);
    } else {
        return;
    }
});

function copyLink(){
    var copyText = window.location.href;
    navigator.clipboard.writeText(copyText);
    alert("Lien copié dans le presse-papier !")
}