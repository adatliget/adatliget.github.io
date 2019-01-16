var lastCode = "";
var video = document.createElement("video");
var canvasElement = document.getElementById("canvas");
var canvasvisibleElement = document.getElementById("canvasvisible");
var canvas = canvasElement.getContext("2d");
var canvasvisible = canvasElement.getContext("2d");

Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; 
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };

  Date.prototype.hhmm = function() {
    var hh = this.getHours() ; 
    var mm = this.getMinutes();
  
    return [(hh>9 ? '' : '0') + hh,
            (mm>9 ? '' : '0') + mm
           ].join(':');
  };

  let d = new Date();
  var today=d.yyyymmdd();
  

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
    video.srcObject = stream;
    video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    video.play();
    setInterval(tick,25);
    //requestAnimationFrame(tick);
  });


function setUsed(code) {
    let d = new Date();
    let time = d.hhmm();
    let key=code+'_'+today;
    localStorage.setItem(key,time)
}

function checkCode(code,d = today) {
    let key=code+"_"+d;
    return localStorage.getItem(key); 
}

function setColor(state) {
    let c=$('#maincont');
    if (c.hasClass('ok')) { c.removeClass('ok')}
    if (c.hasClass('wrong')) { c.removeClass('wrong')}
    if (c.hasClass('used')) { c.removeClass('used')}
    c.addClass(state);
}

function newCode(code) {
    let t = $('#eredmeny');
    let result=checkCode(code);
    switch (result) {
        case 'N/A' :
            t.text('Jó étvágyat ('+code+')');
            setColor('ok');
            setUsed(code);
            break;
        case null:
            t.text('Nem érvényes ('+code+')');
            setColor('wrong');
            break;
        default: 
            t.text(' Ma Felhasznált: '+result+'('+code+')');
            setColor('used');
            
    }  
}



function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {        
        //draw visible 
        // canvasvisibleElement.height = video.videoHeight;
        // canvasvisbleElement.width = video.videoWidth;
        // canvasvisible.drawImage(video, 0, 0, canvasvisibleElement.width, canvasvisibleElement.height);
        canvasElement.hidden = false;
        canvasElement.height = video.videoHeight/2;
        canvasElement.width = video.videoWidth/2;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        var code = jsQR(imageData.data, imageData.width, imageData.height, {inversionAttempts: "dontInvert",});
        if (code) {
          if (lastCode != code.data) {
              newCode(code.data);
          }  
          lastCode = code.data;          
        } 
      }
}

