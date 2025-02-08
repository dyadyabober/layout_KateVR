function useFaqModal() {
  const faqOverlay = document.getElementById('faqOverlay');
  const faqLink = document.querySelector('.header__faq');

  if (!faqOverlay || !faqLink) {
    console.error("FAQ overlay или ссылка не найдены");
    return;
  }

  const closeButton = faqOverlay.querySelector('.close-btn');
  const faqItems = faqOverlay.querySelectorAll('.faq-item');

  function openFaq() {
    faqOverlay.classList.add('active');
  }

  function closeFaq() {
    faqOverlay.classList.remove('active');
  }

  function toggleItem(elem) {
    const arrow = elem.querySelector('.arrow');
    elem.classList.toggle('open');
    if (elem.classList.contains('open')) {
      arrow.style.transform = 'rotate(90deg)'; // Повернуть стрелку вправо
    } else {
      arrow.style.transform = 'rotate(0deg)'; // Вернуть стрелку вверх
    }
  }

  faqLink.addEventListener('click', (event) => {
    event.preventDefault();
    openFaq();
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeFaq);
  }

  faqItems.forEach((item) => {
    item.addEventListener('click', () => toggleItem(item));
  });
}

export default useFaqModal;
