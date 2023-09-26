import { useState } from "react"
import NavBar from "./NavBar"


const Quiz = () => {
    const questionList = [
        {
            text: "What game did Mario first appear in?",
            options: [
                {optionText: "Legend of Zelda", isCorrect: false },
                {optionText: "Super Mario bros.", isCorrect: false },
                {optionText: "Donkey Kong", isCorrect: true },
                {optionText: "Mario Kart", isCorrect: false }
            ]
        },
        {
            text: "What product did nintendo first start selling",
            options: [
                {optionText: "Washing machines", isCorrect: false },
                {optionText: "Playing cards", isCorrect: true },
                {optionText: "GameBoy", isCorrect: false },
                {optionText: "Nes", isCorrect: false }
            ]
        },
        {
            text: "What is the highest grossing arcade game of all time?",
            options: [
                {optionText: "Space Invaders", isCorrect: false },
                {optionText: "Frogger", isCorrect: false },
                {optionText: "Mortal Kombat", isCorrect: false },
                {optionText: "Pac-Man", isCorrect: true }
            ]
        },
        {
            text: "Who is the protagonist in Legend of Zelda?",
            options: [
                {optionText: "Link", isCorrect: true },
                {optionText: "Zelda", isCorrect: false },
                {optionText: "Ganon", isCorrect: false },
                {optionText: "Yuga", isCorrect: false }
            ]
        },
        {
            text: "Who was the mascot of Sega?",
            options: [
                {optionText: "Shadow the Hedgehog", isCorrect: false },
                {optionText: "Sonic", isCorrect: true },
                {optionText: "Alex Kidd", isCorrect: false },
                {optionText: "Yuga", isCorrect: false }
            ]
        },

    ]

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [displayScore, setDisplayScore] = useState(false);
    
    const selectedAnswer = (isCorrect) => {
        if(isCorrect) {
            setScore(prev => prev +1);
        }

        const nextQuestion = activeQuestion +1;
        if(nextQuestion < questionList.length) {
            setActiveQuestion(nextQuestion);
        } else {
            setDisplayScore(true)
        }
    }

    const handleRestart = () => {
        setDisplayScore(false)
        setScore(0)
        setActiveQuestion(0)
    }

    var answerContent = questionList[activeQuestion].options.map((option) => {
        return(
            <button className="answer-btn p-3 m-4" onClick={()=>selectedAnswer(option.isCorrect)}>{option.optionText}</button>
        )
    })

return(
    <>
        <NavBar />

        <div className="d-flex align-items-center mt-5 flex-column quiz-text">
            <h1 className="mb-5">GameQuiz</h1>
            {displayScore ? (
                <div>
                    <p>You got {score} of {questionList.length}</p>
                    <button className="answer-btn p-3 mt-4" onClick={handleRestart}>Try again?</button>
                </div>

            ) : (
                <div>
                    <div>
                        <p>Question {activeQuestion+1}</p>
                    </div>
                    <div>
                        {questionList[activeQuestion].text}
                    </div>
                    <div>
                        {answerContent}
                    </div>
                </div>

            )}
        </div>
    </>
);
}

export default Quiz;