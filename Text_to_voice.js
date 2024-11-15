let speech = new SpeechSynthesisUtterance();

let diffVoices=[];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
diffVoices = window.speechSynthesis.getVoices();
speech.voice = diffVoices[0];

diffVoices.forEach((voice , i)=>(voiceSelect.options[i] = new Option(voice.name , i)));
};

voiceSelect.addEventListener("change" , ()=>{
    speech.voice = diffVoices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});