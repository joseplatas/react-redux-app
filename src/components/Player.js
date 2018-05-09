import React, {Component, PropTypes} from 'react';
import Counter from './Counter';

const Player = (props)=> {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={()=>props.removePlayer(props.index)}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
          index={props.index}
          updatePlayerScore={props.updatePlayerScore}
          score={props.score}
        />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired
};


export default Player;
