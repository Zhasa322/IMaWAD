const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/';


function findhero() {
  const heroId = parseInt(document.getElementById('hero-id').value);

  if (heroId < 1 || heroId > 731) {
    alert('Enter hero ID between 1 and 731');
    return;
  }

  if (heroId == 1) {
    fetch(url + '731.json')
      .then(res => res.json())
      .then(out => {
        document.getElementById('prev-hero').src = out.images.lg;
        document.getElementById('prev-hero').alt = out.name;
      })

    fetch(url + (heroId + 1) + '.json')
      .then(res => res.json())
      .then(out => {
        document.getElementById('next-hero').src = out.images.lg;
        document.getElementById('next-hero').alt = out.name;
      })
  } 


  else if (heroId == 731) {
    fetch(url + 1 + '.json')
      .then(res => res.json())
      .then(out => {
        document.getElementById('next-hero').src = out.images.lg;
        document.getElementById('next-hero').alt = out.name;
      })

    fetch(url + (heroId - 1) + '.json')
      .then(res => res.json())
      .then(out => {
        document.getElementById('prev-hero').src = out.images.lg;
        document.getElementById('prev-hero').alt = out.name;
      })
  } 
  
  
  else {
    fetch(url + (heroId - 1) + '.json')
      .then(res => res.json())
      .then(out => {
        document.getElementById('prev-hero').src = out.images.lg;
        document.getElementById('prev-hero').alt = out.name;
      })

    fetch(url + (heroId + 1) + '.json')
      .then(res => res.json())
      .then(out => {
        document.getElementById('next-hero').src = out.images.lg;
        document.getElementById('next-hero').alt = out.name;
      })
  }

  const display = url + heroId + '.json';
  fetch(display)
    .then(res => res.json())
    .then(out => {
      document.getElementById('cur-hero').src = out.images.lg;
      document.getElementById('name').textContent = 'Name: ' + out.name;
      document.getElementById('fullName').textContent = 'Full Name: ' + out.biography.fullName;
      document.getElementById('placeOfBirth').textContent = 'Place of Birth: ' + out.biography.placeOfBirth;
      document.getElementById('firstAppearance').textContent = 'First Appearance: ' + out.biography.firstAppearance;
      document.getElementById('alignment').textContent = 'Alignment: ' + out.biography.alignment;
      document.getElementById('intelligence').textContent = 'Intelligence: ' + out.powerstats.intelligence;
      document.getElementById('strength').textContent = 'Strength: ' + out.powerstats.strength;
      document.getElementById('speed').textContent = 'Speed: ' + out.powerstats.speed;
      document.getElementById('durability').textContent = 'Durability: ' + out.powerstats.durability;
      document.getElementById('power').textContent = 'Power: ' + out.powerstats.power;
      document.getElementById('combat').textContent = 'Combat: ' + out.powerstats.combat;
      document.getElementById('race').textContent = 'Race: ' + out.appearance.race;
      document.getElementById('height').textContent = 'Height: ' + out.appearance.height;
      document.getElementById('weight').textContent = 'Weight: ' + out.appearance.weight;

    })
}

function next() {
  const heroIdInput = document.getElementById('hero-id');
  let heroId = parseInt(heroIdInput.value);

  if (heroId < 731) {
    heroId += 1;
    heroIdInput.value = heroId;
    findhero();
  }
  else if (heroId==731){
    heroId = 1;
    heroIdInput.value = heroId;
    findhero();
  }
}

function prev() {
  const heroIdInput = document.getElementById('hero-id');
  let heroId = parseInt(heroIdInput.value);
  if (heroId > 1) {
    heroId -= 1;
    heroIdInput.value = heroId;
    findhero();
  }
  else if (heroId==1){
    heroId = 731;
    heroIdInput.value = heroId;
    findhero();
  }
}