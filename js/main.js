const fetchNum = async () => {
  try {
    const resp = await fetch('/api');
    const json = await resp.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }

};

document.querySelector('#btn-click').addEventListener('click', fetchNum);