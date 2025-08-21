document.addEventListener('DOMContentLoaded', () => {
    const planetsGrid = document.getElementById('planets-grid');

    const fetchPlanets = async () => {
        try {
            const response = await fetch('https://dragonball-api.com/api/planets');
            const data = await response.json();
            
            data.items.forEach(planet => {
                const planetCard = document.createElement('div');
                planetCard.classList.add('planet-card');
                planetCard.innerHTML = `
                    <a href="detalle.html?id=${planet.id}">
                        <img src="${planet.image}" alt="${planet.name}">
                        <h3>${planet.name}</h3>
                    </a>
                `;
                planetsGrid.appendChild(planetCard);
            });
        } catch (error) {
            console.error('Error fetching planets:', error);
            planetsGrid.innerHTML = '<p>Error al cargar los planetas. Inténtalo de nuevo más tarde.</p>';
        }
    };

    fetchPlanets();
});

