const planets = [
    {
      name: 'Mercury',
      color: '#9b9b9b',
      numMoons: 0
    },
    {
      name: 'Venus',
      color: '#f9c480',
      numMoons: 0
    },
    {
      name: 'Earth',
      color: '#00b8d4',
      numMoons: 1
    },
    {
      name: 'Mars',
      color: '#ff6f00',
      numMoons: 2
    },
    {
      name: 'Jupiter',
      color: '#ffa600',
      numMoons: 67
    },
    {
      name: 'Saturn',
      color: '#b2b2b2',
      numMoons: 62
    },
    {
      name: 'Uranus',
      color: '#74d0f1',
      numMoons: 27
    },
    {
      name: 'Neptune',
      color: '#0066ff',
      numMoons: 14
    }
  ];
  
  const listPlanets = document.querySelector('.listPlanets');
  
  planets.forEach(planet => {
    // create div element for planet
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerHTML = planet.name;

    // create div elements for moons
    for (let i = 0; i < planet.numMoons; i++) {
        const moon = document.createElement('div');
        moon.classList.add('moon');
        planetDiv.appendChild(moon);
    }
  
     // append planet div to listPlanets element
    listPlanets.appendChild(planetDiv);
});
