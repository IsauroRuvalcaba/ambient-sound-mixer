import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";

class AmbientMixer {
  // Initilize dependencies and default state
  constructor() {
    this.soundManager = new SoundManager();
    this.ui = null;
    this.presetManager = null;
    this.timer = null;
    this.currentSoundState = {};
    this.isInitialized = false;
  }

  init() {
    try {
      this.soundManager.loadSound("rain", "audio/rain.mp3");
      this.isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize app: ", error);
    }
  }

  // Load all sound files
  loadAllSounds() {
    sounds.forEach((sound) => {
      const audioURL = `audio/${sound.file}`;
      const success = this.soundManager.loadSound(sound.id, audioURL);
      if (!success) {
        console.warn(`Could not load sound: ${sound.name} from ${audioURL}`);
      }
    });
  }
}

//  Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
