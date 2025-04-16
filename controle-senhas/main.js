import { PasswordSystem } from './src/PasswordSystem';

const sistema = new PasswordSystem();

const currentEl = document.getElementById('current');
const pendingList = document.getElementById('pending-list');
const attendedList = document.getElementById('attended-list');

function updateUI() {
  // Atualiza senha atual
  currentEl.textContent = sistema.getCurrent() || 'Nenhuma';

  // Atualiza lista de pendentes
  pendingList.innerHTML = '';
  sistema.getPendingPasswords().forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    pendingList.appendChild(li);
  });

  // Atualiza lista de atendidas
  attendedList.innerHTML = '';
  sistema.getAttendedPasswords().forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    attendedList.appendChild(li);
  });
}

// Eventos
document.getElementById('generate').addEventListener('click', () => {
  sistema.generatePassword();
  updateUI();
});

document.getElementById('call').addEventListener('click', () => {
  sistema.callNext();
  updateUI();
});

document.getElementById('reset').addEventListener('click', () => {
  if (confirm('Tem certeza que deseja resetar o sistema?')) {
    sistema.reset();
    updateUI();
  }
});

// Inicializa
updateUI();
