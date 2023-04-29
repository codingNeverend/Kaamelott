const url = 'https://kaamelott.chaudie.re/api/random';
const citation = document.querySelector('#citation');
const auteur = document.querySelector('#auteur');
const btn = document.querySelector('button');

axios.get(url)
    .then(res => {
        citation.textContent = res.data.citation.citation;
        auteur.style = 'font-size: 1.5rem';
        auteur.textContent = res.data.citation.infos.personnage;
        console.log(res.data.citation.infos.personnage);
    })
    .catch(err => {
        console.error(err); 
    })

btn.addEventListener('click', () => {

    axios.get(url)
    .then(res => {
        citation.textContent = res.data.citation.citation;
        auteur.style = 'font-size: 1.5rem';
        auteur.textContent = res.data.citation.infos.personnage;
        console.log(res.data.citation.infos.personnage);
    })
    .catch(err => {
        console.error(err); 
    })
    
});