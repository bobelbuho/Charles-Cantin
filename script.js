const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon = isOpen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

/*container */
function myFunction(smallImg){
    var fullImg = document.getElementById('imageBox');
    fullImg.src = smallImg.src;
}