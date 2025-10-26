function printMessage(msg){
	let div = document.createElement('div');
	div.textContent = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  const container = document.getElementById('messages');
  container.innerHTML = '';
}
