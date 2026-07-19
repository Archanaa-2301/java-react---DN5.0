import React from "react";

function OddPlayers() {

    const oddPlayers = [
        "Virat Kohli",
        "Shubman Gill",
        "Hardik Pandya",
        "Rishabh Pant",
        "Mohammed Siraj"
    ];

    return (
        <div>
            <h2>Odd Team Players</h2>

            <ul>
                {
                    oddPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default OddPlayers;