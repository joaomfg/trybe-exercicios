const cryptoURL = `https://api.coincap.io/v2/assets`;

const makeMessage = (data) => {
  const list = data.data;
  return list
    .filter((element, i) => i <= 9)
    .map(
      element =>
        (`${element.id} (${element.symbol}): ${element.priceUsd}`)
    );
};

const buildList = (list) => {
  const ol = document.getElementById("cryptoList");

  list.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    ol.appendChild(li);
  });
};

const cryptoArr = () => {
  const ol = document.getElementById("cryptoList");

  fetch(cryptoURL)
    .then((response) => response.json())
    .then((data) => {
        buildList(makeMessage(data));
    });
};

window.onload = () => cryptoArr();
