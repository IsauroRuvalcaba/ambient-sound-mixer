export class SoundManager {
  constructor() {
    this.audioElement = new Map();
    this.isPlaying = false;
    console.log("Soundmanager created");
  }

  //  Load a sound file
  loadSound(soundId, filePath) {
    console.log(`Loading sound ${soundId} from ${filePath}`);
    return true;
  }
}
