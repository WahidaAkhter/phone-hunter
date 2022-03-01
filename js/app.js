const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
//form event listener
searchForm.addEventListener('submit', e => {

    //get search term 
    const searchTerm = searchInput.value;
    //get limit
    const searchLimit = document.getElementById('limit').value;

    //check input
    if (searchTerm === '') {
        //show message
        showMessage('please put relevant name', 'alert-danger');
    }

    // Clear field
    searchInput.value = '';


    e.preventDefault();

});
// Show Message Function
function showMessage(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const searchContainer = document.getElementById('search-container');
    // Get form
    const search = document.getElementById('search');

    // Insert alert
    searchContainer.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}