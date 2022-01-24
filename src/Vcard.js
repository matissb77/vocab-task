import React, { useState } from "react";
import "./Vcard.css";

const VocabCard = (props) => {
    const { id, answer, setTotalPoints, totalPoints, extraClues } = props;

    const [points, setPoints] = useState(3);

    const [clues, setClues] = useState(props.clues);

    const keyDownPress = (event) => {
        const input = document.getElementById("input" + id);
        const clueBox = document.getElementById("clue" + id);
        const label = document.getElementById("label" + id);
        if (event.key === "Enter" && input.readOnly === false) {
            console.log(points);
            if (points === 3) {
                if (checkAnswer(input, input.value)) {
                    setTotalPoints(totalPoints + 3);
                    clueBox.classList.add("green");
                    label.classList.add("rightAns");
                } else {
                    setPoints(2);
                    setClues([...clues, extraClues[0]]);
                    clueBox.classList.add("yellow");
                    input.value = "";
                }
            } else if (points === 2) {
                if (checkAnswer(input, input.value)) {
                    setTotalPoints(totalPoints + 2);
                    label.classList.add("rightAns");
                } else {
                    setPoints(1);
                    setClues([...clues, extraClues[1]]);
                    clueBox.classList.add("orange");
                    input.value = "";
                }
            } else if (points === 1) {
                if (checkAnswer(input, input.value)) {
                    setTotalPoints(totalPoints + 1);
                    label.classList.add("rightAns");
                } else {
                    setPoints(0);
                    setClues([answer]);
                    clueBox.classList.add("red");
                    input.readOnly = true;
                }
            }
        }
    };

    const checkAnswer = (input, inpAns) => {
        if (inpAns.toLowerCase() === answer) {
            console.log("right answer");
            input.readOnly = true;
            console.log(points);
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="card">
            <div id={"clue" + id} className="clues">
                {clues.map((clue) => {
                    return <p key={clue}>{clue}</p>;
                })}
            </div>
            <div className="form">
                <input
                    id={"input" + id}
                    type="text"
                    name="name"
                    autoComplete="off"
                    required
                    onKeyDown={keyDownPress}
                />
                <label htmlFor="name" className="label-name">
                    <span id={"label" + id} className="content-name">
                        Answer
                    </span>
                </label>
            </div>
        </div>
    );
};

export default VocabCard;
