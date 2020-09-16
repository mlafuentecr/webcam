import { config } from 'process';
   /* Import another CSS file */
   import '../styles.scss'

   //Selector for your <video> element
   const video = document.querySelector('#myVidPlayer');
   var front = false;
   document.getElementById('flip-button').onclick = function() { 
     front = !front;
    console.log(front);
    };

   //Core
   window.navigator.mediaDevices.getUserMedia({
     audio: false, 
     video:  { facingMode: (front ? "user" : "environment") } 
     })
       .then(stream => {
           video.srcObject = stream;
           video.onloadedmetadata = (e) => {
               video.play();
           };
       })
       .catch( () => {
           alert('You have give browser the permission to run Webcam and mic ;( ');
       });





if (navigator.mediaDevices.getSupportedConstraints().facingMode) {
  console.log(`facingmode Supported!`);
} else {
  console.log(`facingmode Not!`); 
}
