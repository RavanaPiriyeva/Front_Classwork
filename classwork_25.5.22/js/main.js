let userId = 1;

let bookMarkStr = localStorage.getItem('bookmark');

let bookMarkItems;
if (!bookMarkStr) {
    bookMarkItems = [];
}
else {
    bookMarkItems = JSON.parse(bookMarkStr);
}


loading(userId)

document.querySelector('button').addEventListener('click', function (e) {
    userId++;
    loading(userId)
})

function loading(userId) {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {

                let row = document.querySelector('.row');
                let colDiv = document.createElement('div');
                colDiv.className = 'col-md-4 mb-3';
                row.appendChild(colDiv);

                let card = document.createElement('div');
                card.className = 'card';
                colDiv.appendChild(card)

                let img = document.createElement('img');
                img.setAttribute('src', 'https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg');
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
                pUser.innerText = 'User id: ' + element.userId;
                cardBody.appendChild(pUser);


                let likeIcon = document.createElement('i')
                likeIcon.className = 'fa-regular fa-heart '
                likeIcon.style.fontSize = '30px'
                console.log(likeIcon)
                cardBody.appendChild(likeIcon)


                let deleteIcon = document.createElement('i')
                deleteIcon.className ='fa-solid fa-trash'
                deleteIcon.style.fontSize ='30px'
                deleteIcon.style.marginLeft ='310px'
                deleteIcon.style.cursor ='pointer'
                cardBody.appendChild(deleteIcon)

                likeIcon.addEventListener('click', function () {
                    let count= document.querySelector('.count')
                    count.innerText ="Count: "+" " +bookMarkItems.length;
                    likeIcon.classList.remove('fa-heart')
                    likeIcon.classList.remove('fa-regular')
                    likeIcon.className = 'fa-solid fa-heart'
                    likeIcon.style.color = 'red'
                    bookMarkItems.push(element);

                    localStorage.setItem('bookmark',JSON.stringify(bookMarkItems));
                })

                deleteIcon.addEventListener('click',function(){
                    let count= document.querySelector('.count')
                    let removeMark = [...bookMarkItems].indexOf(element);
                    console.log(removeMark);
            
                    bookMarkItems.splice(removeMark,1);
                    likeIcon.classList.remove('fa-heart')
                    likeIcon.classList.remove('fa-solid')
                    likeIcon.className = 'fa-regular fa-heart '
                    likeIcon.style.color = 'black'
                    localStorage.setItem('bookmark',JSON.stringify(bookMarkItems))
                    count.innerText ="Count: "+" " +bookMarkItems.length;
                })

            });
        })

}