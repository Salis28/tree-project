
function submitMessage() {
  const textarea = document.getElementById('message');
  const content = textarea.value.trim();
  if (!content) return;

  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  const id = Date.now();
  messages.push({ id, content });
  localStorage.setItem('messages', JSON.stringify(messages));
  textarea.value = '';
  document.getElementById('confirmation').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('confirmation').classList.add('hidden');
  }, 2000);
}
