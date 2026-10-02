// Actual fingerprint models extracted from the six reference captures.
svg=function(x,i){
  const y=-(currentFp*360+i*45);
  return '<div class="belt" style="transform:translateX('+x+'px)"><div class="fp actualfp" style="height:45px;background-image:url(fingerprints.svg);background-repeat:no-repeat;background-size:432px 2160px;background-position:0 '+y+'px"></div></div>';
};
pickFingerprint=function(){let n;do{n=Math.floor(Math.random()*6)}while(n===lastFp);currentFp=n;lastFp=n};
// Redraw the current round with one of the captured models without touching timer/tries.
pickFingerprint();random();draw();syncTime();renderTime();
