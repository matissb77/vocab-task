import React, { useState } from "react";
import "./App.css";
import vocabs from "./data";
import Card from "./Vcard";

function App() {
    const [totalPoints, setTotalPoints] = useState(0);
    const [percentage, setPercentage] = useState(0);

    return (
        <React.Fragment>
            <nav>VOCAB TASK</nav>
            <main>
                <section className="container">
                    {vocabs.map((vocab) => {
                        return (
                            <Card
                                key={vocab.id}
                                {...vocab}
                                totalPoints={totalPoints}
                                setTotalPoints={setTotalPoints}
                                percentage={percentage}
                                setPercentage={setPercentage}
                            />
                        );
                    })}
                </section>
            </main>
            <footer>
                <p id="totalPoints">{totalPoints}/36</p>
            </footer>
        </React.Fragment>
    );
}

export default App;
