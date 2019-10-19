play();

function play() {
  var current_frame = 0;
  var total_frames = 60;
  var path = new Array();
  var length = new Array();
  
  for(var i=0; i<7;i++){
    path[i] = document.getElementById('i'+i);
    l = path[i].getTotalLength();
    length[i] = l;
    path[i].style.strokeDasharray = l + ' ' + l; 
    path[i].style.strokeDashoffset = l;
    path[i].style.fill = "none";
  }
  
  var handle = 0;
  
  var draw = function() {
     var progress = current_frame/total_frames;
    
     if (progress > 1) {
       for(var j=0; j<path.length; j++){
         path[j].setAttribute("class", "fadein");
       } 
       window.cancelAnimationFrame(handle);
     } else {
       current_frame++;
       for(var j=0; j<path.length;j++){
         path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
         path[j].setAttribute("class", "");
       }
       handle = window.requestAnimationFrame(draw);
     }
  };
  draw();
  
}