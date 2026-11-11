// Remove secrets that older demo versions stored in this browser.
(() => {
  try {
    localStorage.removeItem('users');
    localStorage.removeItem('purchases');
  } catch {
    // Storage may be disabled; the updated pages still never collect these values.
  }
})();
