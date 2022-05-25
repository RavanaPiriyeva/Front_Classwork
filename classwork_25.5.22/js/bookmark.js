let bookMarkStr = localStorage.getItem('bookmark');

let bookMarkItems;
if (!bookMarkStr) {
    bookMarkItems = [];
}
else {
    bookMarkItems = JSON.parse(bookMarkStr);
}
bookMarkItems.forEach(element => {
    let row = document.querySelector('.row');
    let colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 mb-3';
    row.appendChild(colDiv);

    let card = document.createElement('div');
    card.className = 'card';
    colDiv.appendChild(card)

    let img = document.createElement('img');
    img.setAttribute('src','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg');
    img.className = 'card-img-top';
    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body position-relative';
    card.appendChild(cardBody);

    let h4 = document.createElement('h4');
    h4.className = 'card-title';
    h4.innerText = element.title;
    cardBody.appendChild(h4);

    let pBody = document.createElement('p');
    pBody.className = 'card-text';
    pBody.innerText = element.body;
    cardBody.appendChild(pBody);

    let pUser = document.createElement('p');
    pUser.className = 'card-text';
    pUser.innerText = 'User id: ' +  element.userId;
    cardBody.appendChild(pUser);
    //location.reload();

})