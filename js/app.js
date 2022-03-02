

// search phone
const allPhones = () => {
    const searchField = document.getElementById("search-field").value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = phones => {
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border p-5">
            <div class="phone-pic">
                <img class="w-25" src="${phone.image}" alt="">
            </div>
            <h2>Name: '${phones.brand}' cool</h2>
            <h5>Model: </h5>
            <p></p>
            <div class="all-button">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-success">Details</button>
            </div>
       </div>`;
        parent.appendChild(div);
    }


};





