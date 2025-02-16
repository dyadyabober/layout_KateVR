function useFaqModal() {
  const faqOverlay = document.getElementById('faqOverlay');
  const faqLink = document.querySelector('.header__faq');

  if (!faqOverlay || !faqLink) {
    console.error("The FAQ overlay or link not found");
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
      arrow.style.transform = 'rotate(90deg)';
    } else {
      arrow.style.transform = 'rotate(0deg)';
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
