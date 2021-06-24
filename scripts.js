         // const for all classes of key
         const keys = document.querySelectorAll(".key");
         // function that plays the sound
         function playDrum(e) {
            // const fo each key with the event of the pressed key putting in the keyCode
            const sound = document.querySelector(
               `audio[data-key="${e.keyCode}"]`
            );
            // selecting the whole key to add the border color on it
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

            // if a key doesn't have a data-key attached it is ignored
            if (!sound) {
               return;
            }
            // sets the audio time to 0 so if you hit a key before it's done playing it will stop and start again
            sound.currentTime = 0;
            // play the const sound
            sound.play();
            key.classList.add("playing");
         }

         //removes transition
         function removePlaying(e) {
            if (e.propertyName !== "transform") {
               return;
            }
            this.classList.remove("playing");
         }

         //Adds listener for transition end to each key and then removes the class
         keys.forEach(function (key) {
            key.addEventListener("transitionend", removePlaying);
         });

         // will run the playSound function any time a key is pressed on the page
         window.addEventListener("keydown", playDrum);