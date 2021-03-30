function takeSnapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    });

    Webcam.set( {
        width: 300,
        height: 300,
        image_format: 'png',
        png_quality: 100
    });

}


var prediction1 = "";
var prediction2 = "";


function speak() {
    var synth = window.speechSynthesis;
    var speakData1 = "The first prediction is" + prediction1;
    var speakData2 = "And the second prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1, speakData2);
    synth.speak(utterThis);
}

function load() {
var webcam = document.getElementById('camera');
Webcam.attach('#camera');
}

function modelLoaded() {
    console.log("model loaded");
}


console.log(ml5.version);
classifier = ml5.imgClassifier("https://teachablemachine.withgoogle.com/models/aPGAY20bP/model.json", modelLoaded);



