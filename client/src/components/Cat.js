import React from 'react';
import { Link } from 'react-router-dom';


const Tile = ({ to, title }) => (
  <Link to={to}>
    <div className="column">
      <div className="zoom tile is-parent square-tile">
        <div className="tile is-danger is-child notification">
          <p className="title is-size-4 google-font-ss has-text-centered">{title}</p>
        </div>
      </div>
    </div>
  </Link>
);

const Cat = () => {
  return (
    <div className="section is-small">
      <div className="columns">
        <div className="column">
          {/* <h1 className="title is-size-1 is-size-3-mobile google-font-bs has-text-centered">Read Cool Posts!</h1> */}
          <div className="columns is-centered is-multiline mb-4">
            <Tile to="/Home/?cat=website" title="Being a Creator" />
            <Tile to="/Home/?cat=errors" title="Coding Errors" />
            <Tile to="/Home/?cat=education" title="Education" />
            <Tile to="/Home/?cat=skills" title="Life Skills" />
            <Tile to="/Home/?cat=thoughts" title="My Thoughts" />
            {/* <Tile to="/Home/?cat=tbd" title="TBD" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
