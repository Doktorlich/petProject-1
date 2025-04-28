"use strict";
//временная сортировка
const headList = document.querySelector(".table-menu__head-list");
const tableBL = document.querySelector(".table-menu__body-list");
const titleCurrentDate = document.querySelector(".current-date");

let clickCount = 0;
//вызов ajax  запроса и передача его в промис
const url = "https://www.cbr-xml-daily.ru/daily_json.js";
const options = [];
const promiseFetch = fetch(url, [options]);

promiseFetch
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        //получение свойств из обьекта который приходит с сервера
        const objectValutes = Object.entries(data.Valute);
        // генерация текущей даты и её переформатирвоание
        let date = new Date(data.Date);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        titleCurrentDate.insertAdjacentHTML("beforeend", `${day}.${month}.${year}`);
        //создание нового массива
        let voluteList = [];
        objectValutes.forEach(valute => {
            voluteList.push(valute[1]);
        });
        //пробная сортировка

        // рассчет процента от текущего значения  стоимости валюты, условияе для вставки класса "стрелки"
        voluteList.forEach((valute, index) => {
            let currencyDiff = (valute.Value / valute.Previous) * 100;
            let percent = 100 - currencyDiff;
            let currentArrow = "";
            if (percent > 0) {
                currentArrow = "arrow-vl-up";
            } else if (percent < 0) {
                currentArrow = "arrow-vl-down";
            } else {
                return "";
            }
            // генерация html кода из нового массива
            tableBL.innerHTML += `
        <tr class="table-menu__row">
            <td class="table-menu__col">${index + 1}</td>
            <td class="table-menu__col">${valute.CharCode}</td>
            <td class="table-menu__col">${valute.Name}</td>
           
            <td class="table-menu__col">${valute.Nominal}</td>
            <td class="table-menu__col">${valute.NumCode}</td>
            <td class="table-menu__col">${valute.Value}<span class="arrow-vl ${currentArrow}">${percent.toFixed(3)}%</span></td>
        </tr>
        `;
        });
    })
    .then(() => {
        headList.addEventListener("click", function (e) {
            e.preventDefault();
            clickCount++;

            // Создаем функцию для сортировки по стоимости валюты
            const rows = Array.from(document.querySelectorAll(".table-menu__row"));
            // function sortRowsByValue() {
            //     rows.sort((a, b) => {
            //         if (e.target.dataset.position == 1 || e.target.dataset.position == 2) {
            //             const aValue = a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
            //             const bValue = b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
            //             return aValue.localeCompare(bValue);
            //         } else {
            //             const aValue = parseFloat(a.getElementsByClassName("table-menu__col")[e.target.dataset.position].innerText);
            //             const bValue = parseFloat(b.getElementsByClassName("table-menu__col")[e.target.dataset.position].innerText);
            //             return aValue - bValue;
            //         }
            //     });

            //     const tableBody = document.querySelector(".table-menu__body-list");
            //     rows.forEach(row => tableBody.appendChild(row));
            // }
            if (clickCount % 2 === 0) {
                rows.sort((a, b) => {
                    if (e.target.dataset.position == 1 || e.target.dataset.position == 2) {
                        const aValue = a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
                        const bValue = b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
                        return aValue.localeCompare(bValue);
                    } else {
                        const aValue = parseFloat(a.getElementsByClassName("table-menu__col")[e.target.dataset.position].innerText);
                        const bValue = parseFloat(b.getElementsByClassName("table-menu__col")[e.target.dataset.position].innerText);
                        return aValue - bValue;
                    }
                });
            } else {
                rows.sort((a, b) => {
                    if (e.target.dataset.position == 1 || e.target.dataset.position == 2) {
                        const aValue = a.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
                        const bValue = b.querySelectorAll(".table-menu__col")[e.target.dataset.position].innerText;
                        return bValue.localeCompare(aValue);
                    } else {
                        const aValue = parseFloat(a.getElementsByClassName("table-menu__col")[e.target.dataset.position].innerText);
                        const bValue = parseFloat(b.getElementsByClassName("table-menu__col")[e.target.dataset.position].innerText);
                        return bValue - aValue;
                    }
                });
            }
            const tableBody = document.querySelector(".table-menu__body-list");
            rows.forEach(row => tableBody.appendChild(row));
        });
    })
    .catch(error => {
        console.error("Error", error);
    });
