const yearBirth = Number(prompt("Введіть свій рік народження."));
const cityLive = prompt("Введіть місто, в якому ти проживаєте.");
const favoriteSport = prompt("Введіть свій улюблений вид спорту.");

const year = new Date().getFullYear();
let age;
let placeResidence;
let sportsInformation;

switch (yearBirth) {
    case !isNaN(yearBirth) || yearBirth:
        age = `Ти ввів недопустиме значення року нарождення`;
    case 0:
        age = `Шкода, що ти не захотів(ла) ввести свій рік народження.`;
        break;
    default:
        age = year - yearBirth;
        break;
}

switch (cityLive) {
    case "Київ":
        placeResidence = `Ти живеш у столиці України`;
        break;
    case "Вашингтон":
        placeResidence = `Ти живеш у столиці США`;
        break;
    case "Лондон":
        placeResidence = `Ти живеш у столиці Великобританії`;
        break;
    case null:
        placeResidence = `Шкода, що ти не захотів(ла) ввести своє місто`;
        break;
    default:
        placeResidence = `Ти живеш у місті: ${cityLive}`;
}

switch (favoriteSport) {
    case "Футбол":
        sportsInformation = `Круто! Хочеш стати футболістом`;
        break;
    case "Хокей":
        sportsInformation = `Круто! Хочеш стати хокеїстом`;
        break;
    case "Шахи":
        sportsInformation = `Круто! Хочеш стати шахістом`;
        break;
    case null:
        sportsInformation = `Шкода, що ти не захотів(ла) ввести свій улюблений вид спорту`;
        break;
    default:
        sportsInformation = `Твій улюблений вид спорту: ${favoriteSport}`;
}

alert(`
• ${age}
• ${placeResidence}
• ${sportsInformation}
`);
