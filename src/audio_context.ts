const audioContext = new AudioContext();

const soundMap: Record<string, string> = {
  mouse_down: "/sounds/mouse_down.ogg",
  mouse_up: "/sounds/mouse_up.ogg",
  egg_cooking: "/sounds/alarm_ticking.ogg",
  egg_done: "/sounds/alarm.ogg",
};

const buffers: Map<string, AudioBuffer> = new Map();

type SoundPlayback = {
  source: AudioBufferSourceNode;
  gainNode: GainNode;
  startTime: number;
  isLoop: boolean;
};

const loops: Map<string, SoundPlayback> = new Map();

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

function createGainNode(gain = 1.0): GainNode {
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(gain, audioContext.currentTime);
  gainNode.connect(audioContext.destination);
  return gainNode;
}

function playSound(
  name: string,
  { loop = false, gain = 1.0 }: { loop?: boolean; gain?: number } = {}
) {
  const buffer = buffers.get(name);
  if (!buffer) return;

  const source = audioContext.createBufferSource();
  const gainNode = createGainNode(gain);

  source.buffer = buffer;
  source.loop = loop;
  source.connect(gainNode);

  const startTime = audioContext.currentTime;
  source.start(startTime);

  if (loop) {
    const existing = loops.get(name);
    if (existing) {
      existing.source.stop();
      loops.delete(name);
    }

    loops.set(name, {
      source,
      gainNode,
      startTime,
      isLoop: true,
    });
  }

  if (name === "mouse_down") {
    console.log("mouse_down sound played");
    console.log("gain:", gain, "loop:", loop, "startTime:", startTime);
  }
}

function play_loop(name: string, gain = 1.0) {
  playSound(name, { loop: true, gain });
}

function stop_loop(name: string) {
  const playback = loops.get(name);
  if (!playback) return;

  playback.source.stop();
  loops.delete(name);
}

export { audioContext, initSounds, playSound as play, play_loop, stop_loop };
