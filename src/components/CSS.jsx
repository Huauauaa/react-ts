import React from 'react';

export default function CSS() {
  return (
    <>
      <fieldset>
        <legend>CSS</legend>
        <div>
          <p>styled-jsx</p>
        </div>
      </fieldset>
      <style jsx="true">{`
        p {
          color: red;
        }
      `}</style>
    </>
  );
}
