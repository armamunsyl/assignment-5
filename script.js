let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function initHeartButtons() {
  document.querySelectorAll('.heartBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('loved')) {
        heartCount++;
        document.getElementById('heartCount').textContent = heartCount;
        btn.innerHTML = `<i class="fa-solid fa-heart text-red-500"></i>`;
        btn.classList.add('loved');
      }
    });
  });
}

function initCopyButtons() {
  document.querySelectorAll('.copyBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.bg-white');
      const number = card.querySelector('.serviceNumber').textContent;
      navigator.clipboard.writeText(number);
      alert(`Copied number: ${number}`);
      copyCount++;
      document.getElementById('copyCount').textContent = copyCount;
    });
  });
}

function initCallButtons() {
  document.querySelectorAll('.callBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.bg-white');
      const name = card.querySelector('.serviceName').textContent;
      const number = card.querySelector('.serviceNumber').textContent;

      if (coinCount >= 20) {
        coinCount -= 20;
        document.getElementById('coinCount').textContent = coinCount;
        alert(`Calling ${name} at ${number}`);

        const time = new Date().toLocaleTimeString();
        const li = document.createElement('li');
        li.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg";
        li.innerHTML =`
          <div>
            <p class="font-semibold">${name}</p>
            <p class="text-xs text-gray-600">${number}</p>
          </div>
          <span class="text-xs text-gray-500">${time}</span>
        `;
        document.getElementById('historyList').appendChild(li);
      } else {
        alert("Not enough coins to make a call!");
      }
    });
  });
}



function initClearButton() {
   document.getElementById('clearHistory').addEventListener('click', () => {
    document.getElementById('historyList').innerHTML = "";
  });
}

function initApp() {
  initHeartButtons();
  initCopyButtons();
  initCallButtons();
  initClearButton();
}

document.addEventListener('DOMContentLoaded', initApp);
