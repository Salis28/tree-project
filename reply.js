
window.onload = () => {
  const container = document.getElementById('messages');
  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  messages.forEach((msg, idx) => {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `
      <p>${msg.content}</p>
      <button onclick="edit(${msg.id})">编辑</button>
      <button onclick="remove(${msg.id})">删除</button>
    `;
    container.appendChild(div);
  });
};

function edit(id) {
  const messages = JSON.parse(localStorage.getItem('messages'));
  const index = messages.findIndex(m => m.id === id);
  const newContent = prompt("编辑你的留言：", messages[index].content);
  if (newContent !== null) {
    messages[index].content = newContent;
    localStorage.setItem('messages', JSON.stringify(messages));
    location.reload();
  }
}

function remove(id) {
  let messages = JSON.parse(localStorage.getItem('messages'));
  messages = messages.filter(m => m.id !== id);
  localStorage.setItem('messages', JSON.stringify(messages));
  location.reload();
}
