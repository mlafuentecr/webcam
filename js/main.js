   /* Import another CSS file */
   import '../styles.scss'

   //Selector for your <video> element
   const video = document.querySelector('#myVidPlayer');

   //Core
   window.navigator.mediaDevices.getUserMedia({ video: true })
       .then(stream => {
           video.srcObject = stream;
           video.onloadedmetadata = (e) => {
               video.play();
           };
       })
       .catch( () => {
           alert('You have give browser the permission to run Webcam and mic ;( ');
       });

var front = false;
document.getElementById('flip-button').onclick = function() { front = !front; };

var constraints = { video: { facingMode: (front? "user" : "environment") } };