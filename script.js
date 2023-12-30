document.addEventListener('DOMContentLoaded', function() {
    const aboutBlorpDivs = document.querySelectorAll('.message .about-blorp');
    const message = document.querySelector('.message');

    let index = 0;
    const displayMember = () => {
        aboutBlorpDivs.forEach(div => {
            div.style.display = 'none';
        });

        switch(index) {
            case 0: // First div
                aboutBlorpDivs[index].style.display = 'block';
                break;
            case 1: // Second div, display 300px to the right for laptop screens
                aboutBlorpDivs[index].style.display = 'block';
                if (window.innerWidth > 1020) {
                    message.style.marginLeft = '40%';
                } else {
                    message.style.marginLeft = '0px';
                }
                break;
            case 2: // Third div, display at the same position as the first div
                aboutBlorpDivs[index].style.display = 'block';
                message.style.marginLeft = '0px';
                break;
            case 3: // Fourth div, display at the same position as the second div for laptop screens
                aboutBlorpDivs[index].style.display = 'block';
                if (window.innerWidth > 1020) {
                    message.style.marginLeft = '40%';
                } else {
                    message.style.marginLeft = '0px';
                }
                break;
            default:
                break;
        }

        index = (index + 1) % aboutBlorpDivs.length;
    };

    displayMember(); // Show the first member immediately

    setInterval(displayMember, 5000); // Switch to the next member every 8 seconds
});

function toggleNavbar() {
    const navbarModal = document.getElementById('navbarModal');
    navbarModal.classList.toggle('active');
}


function createBubble(xPos, yPos, size) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${xPos}px`;
    bubble.style.top = `${yPos}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    document.body.appendChild(bubble); // Append to the body

    bubble.animate(
        [
            { transform: 'translate(0, 0px) scale(0)' },
            { transform: 'translate(0, -100px) scale(1)' },
        ],
        {
            duration: Math.random() * 8000 + 4000,
            easing: 'linear',
            iterations: Infinity,
        }
    );
}

function createBubbles() {
    const positions = [
        { x: window.innerWidth / 2, y: window.innerHeight + 50 },
        { x: 50, y: window.innerHeight + 50 },
        { x: window.innerWidth - 50, y: window.innerHeight + 50 },
    ];

    positions.forEach(({ x, y }) => {
        createBubble(x, y, Math.random() * 30 + 10);
    });
}

createBubbles();
setInterval(createBubbles, 4000);
