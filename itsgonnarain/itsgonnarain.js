var song = 'MODERAT.mp3';



let audioContext = new AudioContext();

function startLoop(audioBuffer) {
  let sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.loopStart = 2.95;
  sourceNode.loopEnd = 4.05;
  sourceNode.connect(audioContext.destination);
  sourceNode.start(0, sourceNode.loopStart);
}

fetch(song)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    startLoop(audioBuffer);
  })
  .catch(e => console.error(e));