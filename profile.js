
window.onload = () => {
  const container = document.getElementById('myMessages');
  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  if (messages.length === 0) {
    container.innerHTML = "<p>你还没有发布任何留言。</p>";
  } else {
    messages.forEach(msg => {
      const div = document.createElement('div');
      div.className = 'message';
      div.innerHTML = `<p>${msg.content}</p>`;
      container.appendChild(div);
    });
  }
};
