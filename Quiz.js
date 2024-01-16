var rep = new Array;
var score = 0;

rep[1] = "b";

rep[2] = "d";

rep[3] = "b";

rep[4] = "a";

rep[5] = "b";

rep[6] = "a";

rep[7] = "b";

rep[8] = "a";

rep[9] = "c";

rep[10] = "a";




function Engine(question, reponse) {

    if (reponse != rep[question]) {

        

            alert("Faux !!   La bonne réponse était en - " + rep[question] + " -");

        }

    else {
            score++;

            alert("Bonne réponse !! ");

        }
}

      

    




function NextLevel() {

    

    if (score > 8 && score <= 10) {

        alert(score + "/10. " + "Un coup de maître !");

    }

    if (score > 6 && score <= 8) {

        alert(score + "/10. " + "Bien, mais... pas parfait.");

    }



    if (score >= 4 && score < 6) {

        alert(score + "/10. " + "Pas terrible... un autre essai ?");

    }

    if (score < 4) {

        alert(score + "/10. " + "Continuez à explorer! ");

    }






   



    document.quest.reset();

}