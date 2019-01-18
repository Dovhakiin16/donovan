function toggleTheme() {
	document.body.classList.toggle('dark');
}
document.querySelector('.themeButton').addeventListener('click',toggleTheme);

document.querySelector('.slideButton').on('click', function() {
    var elementArray = document.querySelectorAll('.fromLeft');
    for (var i = 0; i < elementArray.length; i++) {
        elementArray[i].classList.toggle('visible');
    }
});