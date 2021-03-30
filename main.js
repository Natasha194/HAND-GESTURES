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
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9RGJqC7ct/model.json", modelLoaded);







function check() {
    var img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
    console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();

        if (results[0].label == "Alien") {
            document.getElementById("update_gesture").innerHTML = "&#128406";
        }

        if (results[0].label == "Fist Bump") {
            document.getElementById("update_gesture").innerHTML = "&#9994";
        }

        if (results[0].label == "Thumbs Up") {
            document.getElementById("update_gesture").innerHTML = "&#128077";
        }

        if (results[0].label == "Peace") {
            document.getElementById("update_gesture").innerHTML = "&#9996";
        }

        if (results[0].label == "OK/Yes") {
            document.getElementById("update_gesture").innerHTML = "&#128076";
        }


        if (results[1].label == "Fist Bump") {
            document.getElementById("update_gesture2").innerHTML = "&#9994";
        }

        if (results[1].label == "Alien") {
            document.getElementById("update_gesture2").innerHTML = "&#128406";
        }

        if (results[1].label == "Thumbs Up") {
            document.getElementById("update_gesture2").innerHTML = "&#128077";
        }

        if (results[1].label == "Peace") {
            document.getElementById("update_gesture2").innerHTML = "&#9996";
        }

        if (results[1].label == "OK/Yes") {
            document.getElementById("update_gesture").innerHTML = "&#128076";
        }
    }
}