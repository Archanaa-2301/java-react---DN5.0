import React from "react";

function ListofIndianPlayers() {

    const T20players = ["Virat", "Rohit", "Surya"];
    const RanjiTrophyPlayers = ["Sarfaraz", "Pujara", "Rahane"];

    const IndianPlayers = [...T20players, ...RanjiTrophyPlayers];

    const [player1, player2, player3, player4, player5, player6] = IndianPlayers;

    return (
        <div>
            <h2>Indian Players</h2>

            <h3>Merged Players</h3>

            <ul>
                {IndianPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Destructured Players</h3>

            <ul>
                <li>{player1}</li>
                <li>{player2}</li>
                <li>{player3}</li>
                <li>{player4}</li>
                <li>{player5}</li>
                <li>{player6}</li>
            </ul>

        </div>
    );
}

export default ListofIndianPlayers;