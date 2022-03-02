const errorHandle = document.getElementById("error-part")

// search phone
const allPhones = () => {
    const searchField = document.getElementById("search-field").value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = phones => {
    if (phones.length === 0) {
        error.textContent = 'No Result Found. Try Again'
        document.getElementById('error-msg').style.display = 'block';

    }
    else {
        for (const phone of phones) {
            const parent = document.getElementById('phone-container');
            const div = document.createElement('div');
            div.innerHTML = `
        <div class="col">
            <div class="card border p-5 card w-100">
                <div class="phone-pic">
                    <img class="w-25" src="${phone.image}" alt="">
                </div>
                <h2 class="text-dark">Name:${phone.brand}</h2>
                <h5 class="text-dark">Model:${phone.phone_name} </h5>
                <p></p>
                <div class="all-button">
                    <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
                </div>
            </div>
       </div>
       `;

            parent.appendChild(div);
        }
        document.getElementById('error-msg').style.display = 'none';
    }


};
// phone details part 
const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => setDetails(data.data));
}
const setDetails = info => {
    document.getElementById('details-container').innerHTML = `
   <div class='phone-details w-50 mx-auto my-5 p-5'>
        <img src="${info.image}" alt="">
        <h3>Name: ${info.name}</h3>
        <p>Released Date: ${info.releaseDate ? info.releaseDate : 'Not found'}</p>
        <p>chip Set: ${info.mainFeatures.chipSet}</p>
        <p>Memory: ${info.mainFeatures.memory}</p>
        <p>Storage: ${info.mainFeatures.storage}</p>
        <p>Sensor: ${info.mainFeatures.sensors}</p>
        <p>others: ${info?.others?.Bluetooth ? info.others?.Bluetooth : 'Not found'}</p>
    </div>
   `
}