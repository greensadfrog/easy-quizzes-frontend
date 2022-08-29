import React, {useState} from "react";
import styled from "styled-components";

import {useParams} from "react-router-dom";
import ConnectApi from "../api/ConnectApi";
import Header from "./framework/Header";


export const RandomQuestionsQuiz = () => {
    const {topic} = useParams();
    const API_URL = `https://easy-quizzes-api.herokuapp.com/quiz/${topic}/random/`;
    const [dataState] = ConnectApi(API_URL);
    const questionText = dataState.data.flatMap((question) => question.question_text);
    const answersArray = dataState.data.flatMap((question) => question.answer);

    // const theme = {
    //     standart: {
    //         default: '#f5f5f5'
    //     },
    //     correct: {
    //         default: '#b2ff59'
    //     }
    // }
    // const Button = styled.button`
    //   background-color: ${props => theme[props.theme].default};
    //   padding: 5px 15px;
    //   margin: 10px;
    //   outline: 0;
    //   cursor: pointer;
    //   border-radius: 5px;
    //   box-shadow: 0 1px 5px lightgray;
    // `;

    // Button.defaultProps = {
    //     theme: "standart"
    // };

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
                    {answersArray.map(item => (

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