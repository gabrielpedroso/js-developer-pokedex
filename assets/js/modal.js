const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const openModal = document.querySelector('#pokemonList');

const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

function convertPokemonToModal(pokemon) {
    return `
        <div class="modal-content ${pokemon.type}">
            <div class="header">
                <svg 
                    onclick="toggleModal()"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="currentColor" 
                    class="bi bi-arrow-left-short arrow" 
                    viewBox="0 0 16 16"> 
                    <path 
                        fill-rule="evenodd" 
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" 
                        fill="white">
                    </path>
                </svg>
                <div class="info">
                    <div class="main">
                        <div class="title">${pokemon.name}</div>
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="number">#00${pokemon.number}</div>
                </div>
            </div>
            <div class="image">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <div class="bottom">
                <div class="about">
                    <div class="title">About</div>
                    <div class="detail">
                        <div class="container">
                            <div class="name">Species</div>
                            <div>${pokemon.type}</div>
                        </div>
                        <div class="container">
                            <div class="name">Height</div>
                            <div>${pokemon.height}</div>
                        </div>
                        <div class="container">
                            <div class="name">weight</div>
                            <div>${pokemon.weight}</div>
                        </div>
                        <div class="container">
                            <div class="name">Abilities</div>
                            <div>${pokemon.abilities.toString()}</div>
                        </div>
                    </div>
                </div>
                <div class="breeding">
                    <div class="title">Breeding</div>
                    <div class="detail">
                        <div class="container">
                            <div class="name">Gender</div>
                            <div class="gender">
                                <div>
                                    <i class="fa fa-mars male"></i>
                                    87.5%
                                </div>
                                <div> 
                                    <i class="fa fa-mercury female"></i> 
                                    12.5%
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="name">Egg Groups</div>
                            <div>Monster</div>
                        </div>
                        <div class="container">
                            <div class="name">Egg Cycle</div>
                            <div>${pokemon.type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

[openModal].forEach((tag) => {
    tag.addEventListener('click', (element) => {
        if (element.target.closest('li')) {
            const pokemon = element.target.closest('li').querySelector('.name').textContent;
            pokeApi.getPokemonByName(pokemon).then((response) => {
                const newHtml = convertPokemonToModal(response);
                modal.innerHTML = newHtml;
            })
        }

        toggleModal();
    });
});
