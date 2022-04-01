Webcam.set({

width:300,
height:250,
image_format: 'png',
png_quality:100,

});

camera = document.getElementById("live");

Webcam.attach('#live');

function take_snapshot() {

 Webcam.snap(function(data_uri) {

  document.getElementById("result").innerHTML = '<img style = "width:300px;height:200;"id = "preview" src='+data_uri+'>';

 });

}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z_kAezu-n/model.json",modelLoaded);

function modelLoaded() {

 console.log("Model Loaded");

}

function Identify() {
 

 img = document.getElementById("preview");

 classifier.classify(img, gotResult);

}

function gotResult(error,results) {

 if (error) {

  console.error(error)

 } else {

  console.log(results);
 
  document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_object_acuracy").innerHTML = results[0].confidence.toFixed(3);
 
 }

} 