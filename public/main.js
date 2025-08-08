document.getElementById('ping').addEventListener('click', async () => {
  const out = document.getElementById('output');
  try {
    const res = await fetch('/health');
    const json = await res.json();
    out.textContent = JSON.stringify(json, null, 2);
  } catch (e) {
    out.textContent = 'Error: ' + e.message;
  }
});
