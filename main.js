function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AATzjM7sZ/model.json",modelReady);
    
}

function modelReady(){
    classifier.classify(gotResults)
}


function gotResults(error,results){
    if (error) {
    console.log(error)
    }
    else {
    console.log(results)
     random_r= Math.floor(Math.random()* 256);
     random_g= Math.floor(Math.random()* 256);
     random_b= Math.floor(Math.random()* 256);
    
     document.getElementById("result_label").innerHTML="i can hear: "+results[0].label;
     document.getElementById("result_confidence").innerHTML="Accuracy "+(results[0].confidence * 100).toFixed(2)+"%";
    
     document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
     document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
   img_1=document.getElementById("image_display")
     if (results[0].label=="dog"){
        img_1.src='dog.jpg' 
 
    }
    else if (results[0].label=="cat"){
        img_1.src='cat.jpg'

    }
    else if (results[0].label=="background noise"){
        img_1.src='mic.jpg'
       
    }
    }}