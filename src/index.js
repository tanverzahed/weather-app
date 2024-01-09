import './style.css';

const form = document.getElementById('city')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    formData.forEach(function(value, key){
        
    })
})


function updateInfo(city) {
    fetch()
}