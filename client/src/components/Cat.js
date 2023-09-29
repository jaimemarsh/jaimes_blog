import React from 'react';
import { Link } from 'react-router-dom';


const Tile = ({ to, title }) => (
  <Link to={to}>
    <div className="column is-4-tablet is-3-desktop">
      <div className="zoom tile is-parent square-tile">
        <div className="tile is-danger is-child notification">
          <p className="title p-3 is-size-2 google-font-ss">{title}</p>
        </div>
      </div>
    </div>
  </Link>
);

const Cat = () => {
  return (
    <div className="section is-small">
      {/* <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered">Blog Posts Categories</h1> */}
      <div className="columns is-centered is-multiline">
        <Tile to="/Home/?cat=art" title="Life Skills" />
        <Tile to="/Home/?cat=art" title="Website Development" />
        <Tile to="/Home/?cat=art" title="Fixing Errors" />
        <Tile to="/Home/?cat=art" title="Education" />
        <Tile to="/Home/?cat=art" title="My Thoughts" />
      </div>
    </div>
  );
};

export default Cat;
