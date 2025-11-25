import React, { useState } from "react";
import { FaCut, FaHandPaper, FaHandRock, FaPencilAlt } from "react-icons/fa";

const choices = [
  { id: "stone", icon: <FaHandRock /> },
  { id: "paper", icon: <FaHandPaper /> },
  { id: "pencil", icon: <FaPencilAlt /> },
  { id: "scissor", icon: <FaCut /> },
];


const rules = {
  stone: ["scissor", "pencil"],
  paper: ["stone"],
  pencil: ["paper"],
  scissor: ["paper", "pencil"],
};

const StonePaperGame = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ win: 0, loss: 0, draw: 0 });

  const playStart = (choice) => {
    const comp = choices[Math.floor(Math.random() * choices.length)].id;

    setPlayerChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("Draw");
      setScore((s) => ({ ...s, draw: s.draw + 1 }));
    } else if (rules[choice].includes(comp)) {
      setResult("You Win");
      setScore((s) => ({ ...s, win: s.win + 1 }));
    } else {
      setResult("You Loss");
      setScore((s) => ({ ...s, loss: s.loss + 1 }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#001f3f] via-[#003f5c] to-[#0a0f13] p-6 text-white">
      <h1 className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] to-[#00ff9d] drop-shadow-[0_0_15px_rgba(0,255,200,0.4)]">
        Stone • Paper • Pencil • Scissor
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {choices.map((c) => (
          <button
            key={c.id}
            onClick={() => playStart(c.id)}
            className="flex flex-col items-center justify-center gap-2 px-6 py-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,255,200,0.2)] hover:scale-110 hover:bg-white/20 hover:shadow-[0_0_25px_#00eaff] transition-all text-white"
          >
            {c.icon}
            <span className="font-semibold tracking-wider text-[#00eaff]">
              {c.id.toUpperCase()}
            </span>
          </button>
        ))}
      </div>
      <div className="bg-white/10 backdrop-blur-xl text-center p-6 rounded-2xl shadow-xl border border-white/20 w-[320px] mb-10">
        <p className="text-lg font-semibold">
          You Chose :{" "}
          <span className="font-bold ml-2 text-[#00ffcc]">
            {playerChoice || "-"}
          </span>
        </p>
        <p className="text-lg font-semibold mt-1">
          Computer Chose :{" "}
          <span className="font-bold ml-2 text-[#ff73e0]">
            {computerChoice || "-"}
          </span>
        </p>
        <h2 className="text-3xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9eff8f] to-[#f9ff6b]">
          {result}
        </h2>
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00eaff] to-[#00ff9d]">
          Scoreboard
        </h3>
        <p className="text-white/90">
          Wins : <span className="font-bold text-green-400">{score.win}</span>
        </p>
        <p className="text-white/90">
          Losses : <span className="font-bold text-red-400">{score.loss}</span>
        </p>
        <p className="text-white/90">
          Draws :{" "}
          <span className="font-bold text-yellow-400">{score.draw}</span>
        </p>
      </div>
    </div>
  );
};

export default StonePaperGame;
