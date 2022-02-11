function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// 1
function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let ul = document.getElementById("days");

  for (let i in dezDaysList) {
    let li = document.createElement("li");
    li.classList = "day";
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      li.innerText = dezDaysList[i];
      li.classList.add("holiday");
      ul.appendChild(li);
    } else if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18
    ) {
      li.innerText = dezDaysList[i];
      li.classList.add("friday");
      ul.appendChild(li);
    } else if (dezDaysList[i] === 25) {
      li.innerText = dezDaysList[i];
      li.className = "friday holiday";
      ul.appendChild(li);
    } else {
      li.innerText = dezDaysList[i];
      ul.appendChild(li);
    }
  }
}

createDays();

// 2
function createBtn(name) {
  let btnContainer = document.querySelector(".buttons-container");
  let btn = document.createElement("button");
  btn.classList = "btn-holiday";
  btn.innerText = name;
  btnContainer.appendChild(btn);
}
createBtn("Feriados");

// 3 *
function changeHolidays() {
  let btn = document.querySelector(".btn-holiday");
  let holidays = document.querySelectorAll(".holiday");
  let green = "green";
  let white = "rgb(238,238,238)";

  btn.addEventListener("click", function () {
    for (let i in holidays) {
      if (holidays[i].style.backgroundColor === green) {
        holidays[i].style.backgroundColor = white;
        holidays[i].style.color = "#777";
      } else {
        holidays[i].style.backgroundColor = green;
        holidays[i].style.color = white;
      }
    }
  });
}
changeHolidays();

// 4
function createSextouBtn(sextou) {
  let btnContainer = document.querySelector(".buttons-container");
  let btnSextou = document.createElement("button");
  btnSextou.classList = "btn-friday";
  btnSextou.innerText = sextou;
  btnContainer.appendChild(btnSextou);
}
createSextouBtn("Sexta-Feira");

// 5 *
function changeFridays(fridaysDays) {
  let btnSextou = document.querySelector(".btn-friday");
  let fridays = document.querySelectorAll(".friday");
  let text = "SEXTOU!!!";

  btnSextou.addEventListener("click", function () {
    for (let i in fridays) {
      if (fridays[i].innerText !== text) {
        fridays[i].style.backgroundColor = "green";
        fridays[i].innerText = text;
        fridays[i].style.color = "white";
      } else {
        fridays[i].style.backgroundColor = "rgb(238,238,238)";
        fridays[i].innerText = fridaysDays[i];
        fridays[i].style.color = "#777";
      }
    }
  });
}
changeFridays([4, 11, 18, 25]);

// 6 *
function zoomIn() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "x-large";
    event.target.style.fontWeight = "600";
  });
}

zoomIn();

function zoomOut() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
    event.target.style.cursor = "pointer";
  });
}

zoomOut();

// 7
function createTasks(task) {
  let myTasksList = document.querySelector(".my-tasks");
  let span = document.createElement("span");
  span.innerText = task;
  myTasksList.appendChild(span);
}
createTasks("cozinhar");

// 8 *
function addSubtitle(cor) {
  let myTasksList = document.querySelector(".my-tasks");
  let subtitleDiv = document.createElement("div");
  subtitleDiv.classList = "task";
  subtitleDiv.style.backgroundColor = cor;
  myTasksList.appendChild(subtitleDiv);
}
addSubtitle("lightgreen");

// 9 *
function addEvent() {
  let subtitleDiv = document.querySelector(".task");
  let subtitleClasses = subtitleDiv.classList;

  subtitleDiv.addEventListener("click", function (event) {
    if (subtitleClasses.length > 1) {
      event.target.classList.remove("selected");
      event.target.style.backgroundColor = "lightgreen";
    } else {
      event.target.classList.add("selected");
      event.target.style.backgroundColor = "green";
    }
  });
}
addEvent();

// 10
//****

//BONUS
function addCompromissos() {
    let ul = document.querySelector('.task-list');
    let compr = document.querySelector('#task-input');
    let btn = document.getElementById('btn-add');

    btn.addEventListener('click', function () {
        if (compr.value === '') {
            window.alert('ERRO! Campo de texto vazio!');
        } else {
            let il = document.createElement('li');
            il.innerText = compr.value
            ul.appendChild(il);
            compr.value = '';
        }
    })

    compr.addEventListener('keypress', function (event) {
        console.log(event.key);
        if (event.key === 'Enter') {
            if (compr.value === '') {
                window.alert('ERRO! Campo de texto vazio!');
            } else {
                let il = document.createElement('li');
                il.innerText = compr.value
                ul.appendChild(il);
                compr.value = '';
            }
        }
    })
}
addCompromissos()