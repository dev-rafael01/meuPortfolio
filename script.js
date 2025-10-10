 function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
  }

  // Fechar menu ao clicar em um link
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar a');
    const navbar = document.getElementById('navbar');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  });

  function toggleCertificadosMenu() {
  const container = document.getElementById('certificados-container');
  const icon = document.querySelector('.certificados-menu-icon');

  const aberto = container.classList.contains('certificados-aberto');

  if (aberto) {
    container.classList.remove('certificados-aberto');
    container.classList.add('certificados-fechado');
    icon.classList.remove('girado');
  } else {
    container.classList.remove('certificados-fechado');
    container.classList.add('certificados-aberto');
    icon.classList.add('girado');
  }
}

