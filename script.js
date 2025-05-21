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
        question.options.forEach((option) => {
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
// Начинаем игру при нажатии на любую кнопку
buttons.forEach(button => {
    button.addEventListener("click", function() {
        currentQuestionIndex = 0; // Сбрасываем индекс вопросов
        displayQuestion(); // Показываем первый вопрос
    });
});
