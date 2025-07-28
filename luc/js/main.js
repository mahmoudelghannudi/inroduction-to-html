document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const target = this.getAttribute('data-target');

            screens.forEach(screen => {
                if (screen.id === target) {
                    screen.style.display = 'block';
                } else {
                    screen.style.display = 'none';
                }
            });
        });
    });
});
