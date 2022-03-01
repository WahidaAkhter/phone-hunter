const allPhone = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => DisplayPhoneDetails(data.phone));

};
const DisplayPhoneDetails = (phones) => {
    console.log(phones);
};