var song = 'MODERAT.mp3';

var _loopStart = 0;//2.95;
var _loopEnd = 17;//4.05;


let audioContext = new AudioContext();

function startLoop(audioBuffer, pan = 0, rate = 1) {
  let sourceNode = audioContext.createBufferSource();
  let pannerNode = audioContext.createStereoPanner();

  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.loopStart = _loopStart;
  sourceNode.loopEnd = _loopEnd;
  sourceNode.playbackRate.value = rate;
  pannerNode.pan.value = pan;
  
  sourceNode.connect(pannerNode);
  pannerNode.connect(audioContext.destination);
  
  sourceNode.start(0, sourceNode.loopStart);
}

fetch(song)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    //startLoop(audioBuffer, 0, 1);
    //startLoop(audioBuffer, 0, 1.0);
    startLoop(audioBuffer, 0, 1);
  })
  .catch(e => console.error(e));