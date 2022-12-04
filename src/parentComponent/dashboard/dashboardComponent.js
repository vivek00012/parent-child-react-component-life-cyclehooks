import React from 'react';

export default class Dashboard extends React.Component {
  render = () => {


    return (<div className="container main-wrapper">
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Latest 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              React
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Angular
            </a>
          </li>
        </ul>
      </nav>
    </div>
    )
  };
}
