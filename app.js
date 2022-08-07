const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は？',
        answers: [
            'スーパーファミンコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS',
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: '痩せるためにお腹が減ったら？',
        answers: [
            '食べる',
            '食べない',
            '食べてから寝る',
            '食べてから食べる',
        ],
        correct: '食べない'
    }, {
        question: '左利きのフリーキッカーといえば？',
        answers: [
            '中村憲剛',
            '中田英寿',
            '吉田麻也',
            '中村俊輔',
        ],
        correct: '中村俊輔'
    }
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        alert('終了です！あなたの正解数は' + score + '/' + quizLength + 'です！')
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}