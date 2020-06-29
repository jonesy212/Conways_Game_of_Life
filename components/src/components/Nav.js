import React, { useState } from "react";
import NavStyle from './styles/NavStyle';

const RulesModal = ({ children, showRules, setShowRules }) => {

  const rulesContent = showRules && (
    <div className="nav-overlay">
      <div className="nav-modal">
        <button
          className="close-nav-modal"
          type="button"
          onClick={() => setShowRules(false)}
        >
          X
        </button>
        <div className="nav-modal-body">{children}</div>
      </div>
    </div>
  );

  return rulesContent;
};

const InfoModal = ({ children, showInfo, setShowInfo }) => {
  const infoContent = showInfo && (
    <div className="nav-overlay">
      <div className="nav-modal">
        <button
          className="close-nav-modal"
          type="button"
          onClick={() => setShowInfo(false)}
        >
          X
        </button>
        <div className="nav-modal-body">{children}</div>
      </div>
    </div>
  );

  return infoContent;
};


function Nav() {
  const [showRules, setShowRules] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <NavStyle>
    <div className="nav-wrapper">
      <h1>John Conway's Game of Life</h1>
      <button type="button" onClick={() => setShowRules(true)}>
        Game Rules
      </button>
      <RulesModal showRules={showRules} setShowRules={setShowRules}>
        <div>
          <h3>How it works</h3>
          <ol>
            <li>
              Any live cell with fewer than two live neighbors dies of underpopulation.
            </li>
            <li>
              Any live cell with two or three live neighbors lives on to the next generation.
            </li>
            <li>
              Any live cell with more than three live neighbors dies of overcrowding.
            </li>
            <li>
              Any dead cell with exactly three live neighbors becomes a live cell due to reproduction.
            </li>
          </ol>
          <sup>
            Read more on Wikipedia: <a href="http://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules">
              Conway's Game of Life
            </a>
          </sup>
          <h3>How to Play</h3>
          <ul>
              <li>Create a few living cells by clicking on the grid. Remember: If the cell has fewer than two living neighbor cells, it will die immediately in the next generation. If your cell has more than three neighbors, it will die immediately in the next generation.</li>
              <li>Click the <strong>Start</strong> button to watch the cells evolve automatically.</li>
              <li>Click the <strong>Next Generation</strong> button to watch the cell evolve one generation at a time.</li>
              <li>Click the <strong>Stop</strong> button to pause the game.</li>
              <li>Click the <strong>Clear</strong> button to clear your grid of all cells at any time. This will also reset the generation counter to 0.</li>
          </ul>
        </div>  
      </RulesModal>
      <button onClick={() => setShowInfo(true)}>What do the Buttons do?</button>
      <InfoModal showInfo={showInfo} setShowInfo={setShowInfo}>
      <div>
        <h3>What do the Game Buttons do?</h3>
        <ul>
          <li><strong>START/STOP: </strong> Runs the simulation automatically. You should add a couple of cells or select the Random button before doing this. Note: You cannot add more cells once you have started, but you can stop to add more, if you like.</li>
          <li><strong>SPEED UP: </strong> Speeds up the simulation.</li>
          <li><strong>SLOW DOWN: </strong> Slows down the simulation.</li>
          <li><strong>ONE GENERATION: </strong> Grows the cell pattern by one generation per click.</li>
          <li><strong>CLEAR: </strong> Resets the generation counter and clears the screen.</li>
          <li><strong>RANDOM: </strong> Displays a random pattern of cells. Select START/STOP to enjoy.</li>
          <li><strong>GLIDER: </strong> Displays the glider pattern of cells. Select START/STOP to enjoy.</li>
          <li><strong>LWSS: </strong> Displays the LWSS pattern of cells. Select START/STOP to enjoy.</li>
        </ul>
      </div>
      </InfoModal>
    </div>
    </NavStyle>
  );
}


export default Nav;