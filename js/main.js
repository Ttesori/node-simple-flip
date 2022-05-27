const fetchNum = async () => {
  try {
    const resp = await fetch('/api');
    const json = await resp.json();
    return json.winner;
  } catch (error) {
    console.error(error);
  }

};

const chooseWinner = async () => {
  const resultEl = document.querySelector('.txt-result');
  const winner = await fetchNum();
  resultEl.textContent = 'Generating winner...';
  setTimeout(() => {
    resultEl.textContent = `The winner is ${winner}`;
  }, 500);

};

document.querySelector('#btn-click').addEventListener('click', chooseWinner);