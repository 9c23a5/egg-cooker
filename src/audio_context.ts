const audioContext = new AudioContext();

const soundMap: Record<string, string> = {
  mouse_down: "/sounds/mouse_down.ogg",
  mouse_up: "/sounds/mouse_up.ogg",
};

const buffers: Map<string, AudioBuffer> = new Map();

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

export { audioContext, initSounds, play };
