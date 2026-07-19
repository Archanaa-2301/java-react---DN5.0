import React from "react";

function EvenPlayers() {

    const evenPlayers = [
        "Rohit Sharma",
        "KL Rahul",
        "Ravindra Jadeja",
        "Jasprit Bumrah",
        "Kuldeep Yadav",
        "Mohammed Shami"
    ];

    return (
        <div>
            <h2>Even Team Players</h2>

            <ul>
                {
                    evenPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default EvenPlayers;