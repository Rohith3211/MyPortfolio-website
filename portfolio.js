let btn = document.getElementById('checkElement');

let lists = document.getElementById('listItems')




btn.addEventListener('click', function(event) {

    if (event.target.checked) {
        lists.classList.add('show-bar')
    } else {
        lists.classList.remove('show-bar')
    }

})
