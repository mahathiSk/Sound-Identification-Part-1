function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5UVS-hYvP/model.json",modelReady)
}

function modelReady() {
classifier.classify(gotResults);
console.log("model is Loaded!")
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
console.log(results);
    }
}