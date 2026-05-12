document.addEventListener('DOMContentLoaded', () => {
    // Dashboard Interactions
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.dashboard-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('logout-btn')) return;
            
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update Active Link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show Target Section
            sections.forEach(sec => {
                sec.style.display = sec.id === targetId ? 'block' : 'none';
            });
        });
    });

    // Logout Functionality
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Weather Widget (Mock)
    const weatherTemp = document.querySelector('.weather-temp');
    if (weatherTemp) {
        weatherTemp.innerText = '24°C';
    }
});
