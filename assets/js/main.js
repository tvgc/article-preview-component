const shareUserButton = document.querySelector('#shareUserButton')

const shareMediasButton = document.querySelector('#shareMediasButton')

const shareMediasComponent = document.querySelector('.share-medias');

const shareUserComponent = document.querySelector('.user')

shareUserButton.addEventListener('click', e => {
    shareMediasComponent.classList.toggle('show-flex');
    shareUserComponent.classList.toggle('hide-grid');

})

shareMediasButton.addEventListener('click', e => {
    shareMediasComponent.classList.toggle('show-flex');
    shareUserComponent.classList.toggle('hide-grid');

})

console.log(shareMedias)