function useHelpModal() {
  const helpOverlay = document.getElementById('helpOverlay');
  const helpLink = document.querySelector('.header__help');

  if (!helpOverlay || !helpLink) {
    console.error("The Help overlay or link not found");
    return;
  }

  const closeButton = helpOverlay.querySelector('.close-btn');

  function openHelp() {
    helpOverlay.classList.add('active');
  }

  function closeHelp() {
    helpOverlay.classList.remove('active');
  }

  helpLink.addEventListener('click', (event) => {
    event.preventDefault();
    openHelp();
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeHelp);
  }
}

export default useHelpModal;
