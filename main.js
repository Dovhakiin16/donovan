function slideFromLeft() {
    var elementArray = document.querySelectorAll('.fromLeft');
    for (var i = 0; i < elementArray.length; i++) {
        elementArray[i].classList.toggle('visible');
    }
}
document.querySelector('.slideButton').addEventListener('click', slideFromLeft);