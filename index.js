// Cosmos
let PARTICLE_NUM = 500;
let PARTICLE_BASE_RADIUS = 0.5;
let FL = 500;
let DEFAULT_SPEED = 2;
let BOOST_SPEED = 300;

let canvas;
let canvasWidth, canvasHeight;
let context;
let centerX, centerY;
let mouseX, mouseY;
let speed = DEFAULT_SPEED;
let targetSpeed = DEFAULT_SPEED;
let particles = [];

window.addEventListener('load', function() {
    canvas = document.getElementById('c');
    
    let resize = function() {
        canvasWidth  = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;
        centerX = canvasWidth * 0.5;
        centerY = canvasHeight * 0.5;
        context = canvas.getContext('2d');
        context.fillStyle = 'rgb(255, 255, 255)';
    };
    
    document.addEventListener('resize', resize);
    resize();
    
    mouseX = centerX;
    mouseY = centerY;
    
    for (let i = 0, p; i < PARTICLE_NUM; i++) {
        particles[i] = randomizeParticle(new Particle());
        particles[i].z -= 500 * Math.random();
    }
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, false);
    
    document.addEventListener('mousedown', function(e) {
        targetSpeed = BOOST_SPEED;
    }, false);
    
    document.addEventListener('mouseup', function(d) {
        targetSpeed = DEFAULT_SPEED;
    }, false);
    
    setInterval(loop, 1000 / 60);
}, false);

function loop() {
    context.save();
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore();
    
    speed += (targetSpeed - speed) * 0.01;
    
    let p;
    let cx, cy;
    let rx, ry;
    let f, x, y, r;
    let pf, px, py, pr;
    let a, a1, a2;
    
    let halfPi = Math.PI * 0.5;
    let atan2  = Math.atan2;
    let cos    = Math.cos;
    let sin    = Math.sin;
    
    context.beginPath();
    for (let i = 0; i < PARTICLE_NUM; i++) {
        p = particles[i];
        
        p.pastZ = p.z;
        p.z -= speed;
        
        if (p.z <= 0) {
            randomizeParticle(p);
            continue;
        }
        
        cx = centerX - (mouseX - centerX) * 1.25;
        cy = centerY - (mouseY - centerY) * 1.25;
        
        rx = p.x - cx;
        ry = p.y - cy;
        
        f = FL / p.z;
        x = cx + rx * f;
        y = cy + ry * f;
        r = PARTICLE_BASE_RADIUS * f;
        
        pf = FL / p.pastZ;
        px = cx + rx * pf;
        py = cy + ry * pf;
        pr = PARTICLE_BASE_RADIUS * pf;
        
        a  = atan2(py - y, px - x);
        a1 = a + halfPi;
        a2 = a - halfPi;
        
        context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
        context.arc(px, py, pr, a1, a2, true);
        context.lineTo(x + r * cos(a2), y + r * sin(a2));
        context.arc(x, y, r, a2, a1, true);
        context.closePath();
    }
    context.fill();
}

function randomizeParticle(p) {
    p.x = Math.random() * canvasWidth;
    p.y = Math.random() * canvasHeight;
    p.z = Math.random() * 1500 + 500;
    return p;
}
function Particle(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.pastZ = 0;
}

// TIME
function updateTimeAndDate() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let amPm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    let timeStr = hours.toString().padStart(2, '0') + minutes;
    if (timeStr.startsWith('0')) {
        timeStr = ' ' + timeStr.slice(1);
    }
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    if (month.startsWith('0')) {
        month = ' ' + month.slice(1);
    }
    if (day.startsWith('0')) {
        day = ' ' + day.slice(1);
    }
    const displayStr = timeStr + amPm + month + day + year;
    for (let i = 0; i < 12; i++) {
        document.getElementById('char' + i + '1').textContent = displayStr[i];
        document.getElementById('char' + i + '2').textContent = displayStr[i];
    }
}
updateTimeAndDate();
setInterval(updateTimeAndDate, 60000);
Resources

// PHOTO
const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
}) 
