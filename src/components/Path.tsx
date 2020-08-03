import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  name: string;
  typeOfDevices: string;
}

export const Path: React.FC<Props> = ({ name, typeOfDevices }) => {
  return (
    <>
      <div className="path">
        <NavLink to="/">
          <img src="img/images/home/Home.png" alt="home-logo" />
          &nbsp;&nbsp;
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.528636 0.528636C0.788986 0.268287 1.2111 0.268287 1.47145 0.528636L5.47145 4.52864C5.73179 4.78899 5.73179 5.2111 5.47145 5.47145L1.47145 9.47145C1.2111 9.7318 0.788986 9.7318 0.528636 9.47145C0.268287 9.2111 0.268287 8.78899 0.528636 8.52864L4.05723 5.00004L0.528636 1.47145C0.268287 1.2111 0.268287 0.788986 0.528636 0.528636Z"
              fill="black"
            />
          </svg>
          &nbsp;&nbsp;
        </NavLink>
        <NavLink to={`/${typeOfDevices}s/`}>
          {`${typeOfDevices}s`}
          {' '}
          &nbsp;&nbsp;
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.528636 0.528636C0.788986 0.268287 1.2111 0.268287 1.47145 0.528636L5.47145 4.52864C5.73179 4.78899 5.73179 5.2111 5.47145 5.47145L1.47145 9.47145C1.2111 9.7318 0.788986 9.7318 0.528636 9.47145C0.268287 9.2111 0.268287 8.78899 0.528636 8.52864L4.05723 5.00004L0.528636 1.47145C0.268287 1.2111 0.268287 0.788986 0.528636 0.528636Z"
              fill="black"
            />
          </svg>
          &nbsp;&nbsp;
        </NavLink>
        <p>{name}</p>
      </div>
    </>
  );
};
