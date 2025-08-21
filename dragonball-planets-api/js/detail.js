document.addEventListener("DOMContentLoaded", () => {
    const planetDetail = document.getElementById("planet-detail");

    const fetchPlanetDetail = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const planetId = urlParams.get("id");

        if (!planetId) {
            planetDetail.innerHTML = "<p>No se ha especificado un ID de planeta.</p>";
            return;
        }

        try {
            const response = await fetch(`https://dragonball-api.com/api/planets/${planetId}`);
            const planet = await response.json();

            if (planet) {
                planetDetail.innerHTML = `
                    <img src="${planet.image}" alt="${planet.name}">
                    <h2>${planet.name}</h2>
                    <p><strong>Descripción:</strong> ${planet.description}</p>
                    <p><strong>Destruido:</strong> ${planet.isDestroyed ? "Sí" : "No"}</p>
                    <a href="planetas.html">Volver a la lista de planetas</a>
                `;
            } else {
                planetDetail.innerHTML = "<p>Planeta no encontrado.</p>";
            }
        } catch (error) {
            console.error("Error fetching planet detail:", error);
            planetDetail.innerHTML = "<p>Error al cargar el detalle del planeta. Inténtalo de nuevo más tarde.</p>";
        }
    };

    fetchPlanetDetail();
});

