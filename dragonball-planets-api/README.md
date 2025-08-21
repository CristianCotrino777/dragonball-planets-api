# Dragon Ball Planets API - Taller Web

Este proyecto es una aplicación web que consume la API de Dragon Ball para mostrar información sobre los planetas del universo Dragon Ball.

## 🎯 Características

- **Página principal (planetas.html)**: Muestra todos los planetas en formato grid
- **Página de detalle (detalle.html)**: Muestra información detallada de cada planeta
- **Diseño responsive**: Se adapta a dispositivos móviles y desktop
- **JavaScript Vanilla**: Sin frameworks, solo JavaScript puro
- **API REST**: Consume la API de Dragon Ball (https://dragonball-api.com/api/planets)

## 📁 Estructura del Proyecto

```
dragonball-planets-api/
├── index.html          # Página de redirección
├── planetas.html       # Página principal con grid de planetas
├── detalle.html        # Página de detalle de planeta individual
├── css/
│   └── style.css       # Estilos CSS con diseño moderno y responsive
├── js/
│   ├── script.js       # JavaScript para la página principal
│   └── detail.js       # JavaScript para la página de detalle
└── README.md           # Este archivo
```

## 🚀 Cómo ejecutar localmente

1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd dragonball-planets-api
```

2. Inicia un servidor HTTP local:
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

3. Abre tu navegador en `http://localhost:8000`

## 🌐 API Utilizada

- **Base URL**: https://dragonball-api.com/api
- **Endpoint planetas**: `/planets` - Obtiene todos los planetas
- **Endpoint planeta individual**: `/planets/{id}` - Obtiene un planeta específico

### Ejemplo de respuesta de la API:

```json
{
  "items": [
    {
      "id": 1,
      "name": "Namek",
      "image": "https://dragonball-api.com/planetas/namek.webp",
      "description": "Planeta natal de los Namekianos...",
      "isDestroyed": true
    }
  ],
  "meta": {
    "totalItems": 20,
    "itemCount": 10,
    "itemsPerPage": 10,
    "totalPages": 2,
    "currentPage": 1
  }
}
```

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6+**: Fetch API, async/await, DOM manipulation
- **Responsive Design**: Media queries para adaptabilidad móvil

## 🎨 Características del Diseño

- **Gradientes modernos**: Colores vibrantes inspirados en Dragon Ball
- **Animaciones CSS**: Efectos hover y transiciones suaves
- **Grid Layout**: Diseño adaptable con CSS Grid
- **Tipografía moderna**: Fuentes web optimizadas
- **Sombras y efectos**: Diseño con profundidad visual

## 📱 Responsive Design

El sitio se adapta a diferentes tamaños de pantalla:
- **Desktop**: Grid de 3-4 columnas
- **Tablet**: Grid de 2-3 columnas  
- **Mobile**: Grid de 1 columna

## 🔧 Funcionalidades Implementadas

✅ Consumo correcto del endpoint GET /planets
✅ Uso de JavaScript Vanilla para obtener y renderizar datos
✅ Estructura HTML semántica
✅ Diseño responsive y moderno
✅ Navegación entre páginas (listado → detalle)
✅ Estilos organizados en archivos CSS
✅ Código limpio, organizado y comentado
✅ Manejo de errores en las peticiones API

## 🚀 Despliegue

Este proyecto puede ser desplegado en cualquier servicio de hosting estático como:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 👨‍💻 Autor

Proyecto desarrollado como parte del taller de consumo de APIs y maquetación web.

## 📄 Licencia

Este proyecto es de uso educativo.

