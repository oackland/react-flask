// First, ensure you have the appropriate library for speech recognition and that it supports the methods and properties being used.

// Assuming there's a speech recognition library that provides these methods
import SpeechRecognition from "path-to-speech-recognition-lib";

document.addEventListener("DOMContentLoaded", () => {
  // Define voice commands and their respective callbacks
  const commands = [
    {
      command: ["reset", "clear"], // Use an array to handle both 'reset' and 'clear' with the same function
      callback: (args: { resetTranscript: () => void }) => args.resetTranscript()
    },
    {
      command: "open *",
      callback: (site: string) => window.open("http://" + site)
    },
    {
      command: "increase text size",
      callback: () => {
        const content = document.getElementById("content");
        if (content) content.style.fontSize = "22px";
      }
    },
    {
      command: "decrease text size",
      callback: () => {
        const content = document.getElementById("content");
        if (content) content.style.fontSize = "16px";
      }
    },
    {
      command: "change text colour to *",
      callback: (color: string) => {
        const content = document.getElementById("content");
        if (content) content.style.color = color;
      }
    }
  ];

  // Ensure your speech recognition library accepts 'commands' as a parameter. If not, the commands need to be registered differently.
  SpeechRecognition.startListening({
    continuous: true,
    language: "en-IN",
    commands: commands
  }).catch((error: Error) => {
    console.error("Error starting speech recognition:", error);
  });

  window.onbeforeunload = () => {
    SpeechRecognition.stopListening();
  };
});
