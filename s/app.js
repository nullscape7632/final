document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('trail-canvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        lastX = e.clientX;
        lastY = e.clientY;
    });

    canvas.addEventListener('mouseup', () => (drawing = false));

    canvas.addEventListener('mousemove', drawLine);

    function drawLine(e) {
        if (!drawing) return;

        ctx.strokeStyle = 'black'; // Color of the trail
        ctx.lineWidth = 5; // Adjust the line width as needed
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        lastX = e.clientX;
        lastY = e.clientY;
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(clearCanvas);
    }

    clearCanvas();
});
