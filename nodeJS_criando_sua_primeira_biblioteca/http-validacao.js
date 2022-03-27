const fetch = require('node-fetch');

async function checaStatus(arrayURLs) {
    // promise async await
    const arrayStatus = await Promise.all(arrayLinks.map(url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}

function geraArrayDeURLs(arrayLinks) {
    // loop para cada {chave : valor}
    // objeto -> [valor]
    //Object.values(objeto)
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks);
}    

module.exports = validaURLs;