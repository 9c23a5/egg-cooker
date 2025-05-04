const audioContext = new AudioContext();

const soundMap: Record<string, string> = {
  mouse_up: "/sounds/mouse_up.ogg",
  egg_cooking: "/sounds/alarm_ticking.ogg",
  egg_done: "/sounds/alarm.ogg",
};

const buffers: Map<string, AudioBuffer> = new Map();
type LoopPlayback = {
  source: AudioBufferSourceNode;
};

const loops: Map<string, LoopPlayback> = new Map();

async function loadSound(url: string): Promise<AudioBuffer> {
  const res = await fetch(url);
  const buf = await res.arrayBuffer();
  return audioContext.decodeAudioData(buf);
}

async function initSounds(): Promise<void> {
  const entries = Object.entries(soundMap);
  const results = await Promise.all(
    entries.map(([name, path]) =>
      loadSound(path).then((buffer) => [name, buffer] as const)
    )
  );
  results.forEach(([name, buffer]) => {
    buffers.set(name, buffer);
  });
}

function play(name: string) {
  const buffer = buffers.get(name);
  if (!buffer) return;

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
}

function play_loop(name: string) {
  if (loops.has(name)) return;

  const buffer = buffers.get(name);
  if (!buffer) return;

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  source.connect(audioContext.destination);
  source.start();

  loops.set(name, { source });
}

function stop_loop(name: string) {
  const playback = loops.get(name);
  if (!playback) return;

  playback.source.stop();
  loops.delete(name);
}

export { audioContext, initSounds, play, play_loop, stop_loop };
