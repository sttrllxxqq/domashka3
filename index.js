// 1 частина

let yearOfBirth = prompt("Введіть рік Вашого народження:");
let city = prompt("Введіть місто, в якому Ви живете:");
let favoriteSport = prompt("Введіть свій улюблений вид спорту:");

if (yearOfBirth && city && favoriteSport) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - yearOfBirth;

  let message = "Ти живеш у місті " + city + ".";
  if (city === "Київ") {
    message = "Ти живеш у столиці України.";
  } else if (city === "Вашингтон") {
    message = "Ти живеш у столиці США.";
  } else if (city === "Лондон") {
    message = "Ти живеш у столиці Великої Британії.";
  }

  alert("Твій вік: " + age + "\n" + message + "\nТвій улюблений вид спорту: " + favoriteSport);
} else {
  let missingInfo = "";
  if (!yearOfBirth) {
    missingInfo = "рік народження";
  } else if (!city) {
    missingInfo = "місто";
  } else if (!favoriteSport) {
    missingInfo = "улюблений вид спорту";
  }
  alert("Шкода, що Ви не захотіли ввести свій(ю) " + missingInfo + ".");
}

// 2 частина

let sport = prompt("Введіть один із трьох видів спорту: футбол, баскетбол, теніс");
let championName;
let championSurname;

if (sport === "футбол") {
  championName = "Ліонель";
  championSurname = "Мессі";
} else if (sport === "баскетбол") {
  championName = "Леброн";
  championSurname = "Джеймс";
} else if (sport === "теніс") {
  championName = "Рафаель";
  championSurname = "Надаль";
} else if (sport === null) {
  alert("Шкода, що Ви не захотіли ввести свій(ю) вид спорту");
} else {
  alert("Введено невірний вид спорту");
}

if (championName && championSurname) {
  let message = `Круто! Хочеш стати ${championName} ${championSurname}?`;
  alert(message);
}
