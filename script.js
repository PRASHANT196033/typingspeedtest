
        const setofWords = ["The quick brown fox jumped over the lazy dog.",
        "He found himself sitting at his computer, typing whatever came to mind.",
        "He was on a website entitled 10 fast fingers.",
        "Happiness is not something readymade. It comes from your own actions.",
        "Everything you've ever wanted is on the other side of fear.",
        "If I cannot do great things, I can do small things in a great way.",
        "You have the right to work, but never to the fruit of work.",
        "Change is the law of the universe. You can be a millionaire, or a pauper in an instant.",
        "Man is made by his belief. As he believes, so he is.",
        "We behold what we are,and we are what we behold."
    ];

    const msg = document.getElementById('msg');
    const typeWords = document.getElementById('mywords');
    const btn = document.getElementById('btn');
    let startTime, endtime;

    const playGame = () => {
        typeWords.value = ''
        let randomNumber = Math.floor(Math.random() * setofWords.length);
        msg.innerText = setofWords[randomNumber];
        let date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";
    }

    const endPlay = () => {
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime - startTime) / 1000);
        console.log(totalTime);

        let totalstr = typeWords.value;
        let wordCount = wordCounter(totalstr);

        let speed = Math.round((wordCount / totalTime) * 60);
        let finalMsg = " YOU TYPED TOTAL AT " + speed + " WORDS PER MINUTES ";
        finalMsg += compareWords(msg.innerText, totalstr);
        msg.innerText = finalMsg;
    }

    const compareWords = (str1, str2) => {
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt = 0;

        words1.forEach(function (item, index) {
            if (item == words2[index]) {
                cnt++
            }
        })
        let errorWords = (words1.length - cnt);
        return cnt + " CORRECT OUT OF " + words1.length + " WORDS AND THE TOTAL NUMBER OF ERRORS ARE " + errorWords + ".";
    }

    const wordCounter = (str) => {
        let response = str.split(" ").length;
        return response;
    }

    btn.addEventListener('click', function () {
        console.log(this);
        if (this.innerText == 'Start') {
            typeWords.disabled = false;
            playGame();
        } else if (this.innerText == "Done") {
            typeWords.disabled = true;
            btn.innerText = "Start";
            endPlay();
        }
    })