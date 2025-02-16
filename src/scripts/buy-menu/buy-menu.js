function usePaymentNavigation() {
  const placeOrderSection = document.getElementById('placeOrderSection');
  const paySection = document.getElementById('paySection');
  const completeSection = document.getElementById('completeSection');

  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');

  const buyNowButton = document.querySelector('.header__button.button');
  const modalOverlay = document.querySelector('.modal-overlay');

  if (!buyNowButton || !modalOverlay) {
    console.error("The Buy Now button or modalOverlay not found");
    return;
  }

  const closeButton = modalOverlay.querySelector('.close-btn');
  if (!closeButton) {
    console.error("The modal window close button not found");
    return;
  }

  function openModal() {
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  buyNowButton.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
  });

  closeButton.addEventListener('click', closeModal);

  function goToPay() {
    placeOrderSection.classList.add('hidden');
    paySection.classList.remove('hidden');
    step1.classList.remove('active');
    step2.classList.add('active');
  }

  function goToComplete() {
    paySection.classList.add('hidden');
    completeSection.classList.remove('hidden');
    step2.classList.remove('active');
    step3.classList.add('active');
  }

  return { goToPay, goToComplete };
}

export default usePaymentNavigation;
