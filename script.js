let info = document.querySelector(".info");
let b1 = document.querySelector(".b-1");

let questions = [
    {
        question: "Это самое большое наземное животное на планете. Какое это животное?",
        options: ["Слон", "Жираф", "Бегемот"],
        answer: "Слон"
    },
    {
        question: "Это животное известно своим длинным языком, который помогает ему ловить муравьев.",
        options: ["Лемур", "Кенгуру", "Муравьед"],
        answer: "Муравьед"
    },
    {
        question: "Это животное может менять цвет своей кожи для маскировки.",
        options: ["Ящерица", "Уж", "Хамелеон"],
        answer: "Хамелеон"
    }

];

let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];
        info.innerHTML = `<h2>${question.question}</h2>`;
        question.options.forEach((option, index) => {
            info.innerHTML += `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`;
        });
    } else {
        info.innerHTML = "<h2>Игра окончена!</h2>";
    }
}

function checkAnswer(selectedOption) {
    let question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        info.innerHTML += `<p>Правильно! ${question.answer} — это правильный ответ.</p>`;
    } else {
        info.innerHTML += `<p>Неправильно! Правильный ответ — ${question.answer}.</p>`;
    }
    currentQuestionIndex++;
    setTimeout(() => {
        info.innerHTML = ""; // Очищаем предыдущий вопрос
        displayQuestion(); // Показываем следующий вопрос
    }, 3000); // Пауза перед показом следующего вопроса
}

// Начинаем игру при нажатии на первую кнопку
b1.addEventListener("click", function() {
    currentQuestionIndex = 0; // Сбрасываем индекс вопросов
    displayQuestion(); // Показываем первый вопрос
});
