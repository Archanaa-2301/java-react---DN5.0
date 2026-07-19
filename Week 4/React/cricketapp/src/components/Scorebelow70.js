import React from "react";

function Scorebelow70() {

    const players = [
        { name: "Virat Kohli", score: 98 },
        { name: "Rohit Sharma", score: 76 },
        { name: "Shubman Gill", score: 45 },
        { name: "KL Rahul", score: 82 },
        { name: "Hardik Pandya", score: 69 },
        { name: "Ravindra Jadeja", score: 72 },
        { name: "Rishabh Pant", score: 55 },
        { name: "Jasprit Bumrah", score: 15 },
        { name: "Mohammed Siraj", score: 8 },
        { name: "Kuldeep Yadav", score: 27 },
        { name: "Mohammed Shami", score: 12 }
    ];

    return (
        <div>
            <h2>Players with Score Below 70</h2>

            <ul>
                {
                    players
                        .filter(player => player.score < 70)
                        .map((player, index) => (
                            <li key={index}>
                                {player.name} - {player.score}
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default Scorebelow70;