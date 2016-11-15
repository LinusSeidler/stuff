/*
let synth = new Tone.MonoSynth({
    oscillator: {type: 'sawtooth'},
    envelope: {
        attack: 0.1,
        release: 4,
        releaseCurve: 'linear'
    },
    filterEnvelope: {
        baseFrequency: 200,
        octaves: 2,
        attack: 0,
        decay: 0,
        release: 1000
    }
});
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
*/

let envelope = {
  attack: 0.1,
  release: 4,
  releaseCurve: 'linear'
};
let filterEnvelope = {
  baseFrequency: 200,
  octaves: 2,
  attack: 0,
  decay: 0,
  release: 1000
};

let synth = new Tone.DuoSynth({
    harmonicity: 1,
  voice0: {
    oscillator: {type: 'sawtooth'},
    envelope,
    filterEnvelope
  },
  voice1: {
    oscillator: {type: 'sine'},
    envelope,
    filterEnvelope
  }
});
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
//synth.triggerAttackRelease('C6', 1);