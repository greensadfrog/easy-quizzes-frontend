import React, {useState} from "react";

import {useParams} from "react-router-dom";
import ConnectApi from "../api/ConnectApi";



export const RandomQuestionsQuiz = () => {
    const {topic} = useParams();
    const API_HOST = 'https://easy-quizzes-api.herokuapp.com/'
    const API_URL = `${API_HOST}quiz/${topic}/random/1`;
    const [dataState] = ConnectApi(API_URL);
    const questionText = dataState.data.flatMap((question) => question.question_text);
    const answersArray = dataState.data.flatMap((question) => question.answer);

    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
    const [incorrectMessage, setIncorrectMessage] = useState('')

    const handleAnswer = (answer) => {
        if (answer) {
            setIsCorrectAnswer(answer)
        } else {
            setIncorrectMessage("Incorrect.Try again.")
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }

    // https://stackoverflow.com/a/2450976
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    return (
        <React.Fragment>
            {/*<Header/>*/}
            <div className="quiz_section">
                <div className="question_section">
                    <div className="question_text">
                        <span>{questionText}</span>
                    </div>
                </div>
                <div className="answer_section">
                    {shuffle(answersArray).map(item => (

                        <button

                            onClick={() => handleAnswer(item.is_right)}
                        >
                            {item.answer_text}
                        </button>
                    ))}
                </div>
                <div className="result_section">
                    {
                        isCorrectAnswer
                            ? <div>
                                Correct.
                                <button className="next_question" onClick={() => refreshPage()}>Next Question</button>
                            </div>


                            : incorrectMessage ? <div>{incorrectMessage}</div> : <div></div>
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default RandomQuestionsQuiz;