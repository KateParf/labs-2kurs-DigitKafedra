document.addEventListener("DOMContentLoaded", function () {
    alert("DOM готов!");
    function getQwerty() {
        console.log('QWERTY');
    }
    setTimeout(function () {
        getQwerty();
        clearInterval(intervalDescriptor);
    }, 5000);
    var sec = 0;
    var intervalDescriptor = setInterval(function () {
        console.log("Прошла(-о): " + sec + " секунд.");
    }, 1000);
});
