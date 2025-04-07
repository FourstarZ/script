const cursor = document.getElementById('cursor');
const trailContainer = document.getElementById('trail-container');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    trailContainer.appendChild(trail);

    setTimeout(() => trail.remove(), 500);
});
