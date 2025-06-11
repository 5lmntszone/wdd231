const timeStamp = document.getElementById("timestamp");
if (timeStamp) {
    timeStamp.value = new Date().toISOString();
}