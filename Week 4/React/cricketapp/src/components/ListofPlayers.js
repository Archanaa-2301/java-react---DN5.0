import React from "react";

function ListofPlayers() {

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
            <h2>List of Players</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListofPlayers;