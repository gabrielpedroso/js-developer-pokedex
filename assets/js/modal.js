const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const closeModal = document.querySelector('#close-modal');
const openModal = document.querySelector('#pokemonList');

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModal, closeModal].forEach((tag) => {
    tag.addEventListener('click', (element) => {
        toggleModal();

        if (element.target.closest('li')) {
            console.log(element.target.closest('li').querySelector('.name').textContent);
        }
    });
});
