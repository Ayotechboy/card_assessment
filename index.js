let url = 'https://randomuser.me/api/'
const fullName = document.getElementById('names')
const address = document.getElementById('address')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const dob = document.getElementById('dob')
const image = document.getElementById('image')

let contactCard = () => {
    fetch(url).then(response => {
        return response.json()

    }).then(data => {
        image.src = data.results[0].picture.large
        fullName.textContent = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
        address.textContent = 'Address: ' + data.results[0].location.street.number + ', ' + data.results[0].location.street.name + ', ' + data.results[0].location.city + ', ' + data.results[0].location.state + ', ' + data.results[0].location.country + '.'
        email.textContent = 'email: ' + data.results[0].email
        phone.textContent = 'phone number: ' + data.results[0].phone
        dob.textContent = 'DOB: ' + data.results[0].dob.date


    })
}
contactCard()
