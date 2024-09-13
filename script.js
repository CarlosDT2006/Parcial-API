const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_personaje')
    let valor = inputTexto.value
    peticionApi(valor)
}

const peticionApi = (name) => {
    const baseUrl = 'https://rickandmortyapi.com/api/';
    const endpoint = `character/?name=${name}`;
    const url = `${baseUrl}${endpoint}`;

    axios.get(url)
        .then(res => printData(res.data))
        .catch(err => console.log(err))
}

const printData = (data) => {
    let respuesta = document.getElementById('show-character');
    const character = data.results[0];

    respuesta.innerHTML = `
         <div class="character-card">
            
            <img src="${character.image}" alt="${character.name}" style="width: 150px; height: auto;" />
            <h2>${character.name}</h2>
            <p><strong>Status:</strong> ${character.status}</p>
            <p><strong>Species:</strong> ${character.species}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Origin:</strong> ${character.origin.name}</p>
            <p><strong>Location:</strong> ${character.location.name}</p>
        </div>
    `;
}