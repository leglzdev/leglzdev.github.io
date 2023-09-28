const mostRecentScore = localStorage.getItem("mostRecentScore");

if (mostRecentScore == 31) {
    finalMessage.innerText = "¡Felicidades!\nHas contestado correctamente todo el cuestionario.";
} else {
    containerFireworks.style.setProperty("display", "none");
    finalMessage.innerText = "Completaste el cuestionario\nsin haber contestado correctamente cada una de las preguntas.";
}