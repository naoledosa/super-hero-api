const SUPERHERO_TOKEN = '2324051697760385'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const getHero = document.getElementById('getNewHero')
const heroImageDiv = document.getElementById('heroImageDiv')

const search = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')

const names = document.getElementById('heroName')
const details = document.getElementById('additionalInfo')

const showHeroInfo = (json) => {
  const name = `<h1>${json.name}</h1>`
        const getStats = (char) => {
          const stats = Object.keys(char.powerstats).map(stat => {
             return `<p>${stat.toUpperCase()}: ${json.powerstats[stat]}</p>`})
          return stats.join('')
        }

        heroImageDiv.innerHTML = `${name}<img src='${json.image.url}' height=200 width=350 /> ${getStats(json)}`
}

const getSuperHeroById = (id) => {
        fetch(`${BASE_URL}/${id}`)
      .then(response => response.json())
      .then(json =>  showHeroInfo(json))       
}

const getSuperHeroByName = (name) => {
         fetch(`${BASE_URL}/search/${name}`)
      .then(response => response.json())
      .then(json =>  showHeroInfo(json.results[0]))  
}

const randomId = () => {
  let random = Math.ceil(Math.random() * 731)
  return random
}

getHero.onclick = () => {
  let id = randomId()
  getSuperHeroById(id)
}

searchButton.onclick = () => getSuperHeroByName(search.value)




