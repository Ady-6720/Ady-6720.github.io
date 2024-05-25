const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
});

document.addEventListener('mousemove', (e) => {
    const gridBg = document.querySelector('.grid-background');
    const { clientX: x, clientY: y } = e;
    gridBg.style.backgroundPosition = `${x / 10}px ${y / 10}px`;
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.wheel-and-hamster');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        loader.style.opacity = '0';
        mainContent.classList.add('visible');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
    gsap.to($bigBall, {
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15
    });
    gsap.to($smallBall, {
        duration: 0.1,
        x: e.pageX - 5,
        y: e.pageY - 7
    });
}

function onMouseHover() {
    gsap.to($bigBall, {
        duration: 0.3,
        scale: 4
    });
}

function onMouseHoverOut() {
    gsap.to($bigBall, {
        duration: 0.3,
        scale: 1
    });
}

const items = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.boxShadow = '0 0 20px rgba(255, 79, 129, 0.5)';
        } else {
            entry.target.style.opacity = '0.5';
            entry.target.style.transform = 'translateY(100px)';
            entry.target.style.boxShadow = 'none';
        }
    });
}, {
    threshold: 0.1
});

items.forEach(item => {
    observer.observe(item);
});
