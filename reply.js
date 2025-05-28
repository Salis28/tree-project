
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
document.addEventListener("DOMContentLoaded", () => {
  const messagesContainer = document.getElementById("messages");

  fetch('https://raw.githubusercontent.com/Salis28/tree-project/main/messages.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("网络请求失败");
      }
      return response.json();
    })
    .then(data => {
      messagesContainer.innerHTML = ''; // 清空容器
      data.forEach((message, index) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        messageDiv.innerHTML = `
          <p><strong>匿名 #${index + 1}</strong></p >
          <p>${message.content}</p >
        `;

        messagesContainer.appendChild(messageDiv);
      });
    })
    .catch(error => {
      messagesContainer.innerHTML = "<p>加载留言失败，请稍后重试。</p >";
      console.error("出错啦：", error);
    });
});
