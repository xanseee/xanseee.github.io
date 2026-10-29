window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let button = document.getElementById("calculate-btn");
    let quantityInput = document.getElementById("quantity");
    let productSelect = document.getElementById("product");
    let resultDiv = document.getElementById("result");

    function calculateCost(event) {
        event.preventDefault();

        let quantityStr = quantityInput.value;
        let match = quantityStr.match(/^\d+$/);
        let quantity;
        let price;
        let total;

        // Если ввели буквы, спецсимволы, пробелы или отрицательные числа - выдаем ошибку
        if (match === null) {
            resultDiv.innerHTML = "Ошибка: недопустимые символы. Введите целое положительное число.";
            return;
        }

        quantity = parseInt(quantityStr, 10);
        price = parseInt(productSelect.value, 10);

        total = quantity * price;

        resultDiv.innerHTML = "Стоимость заказа: " + String(total) + " руб.";
    }

    button.addEventListener("click", calculateCost);
});
