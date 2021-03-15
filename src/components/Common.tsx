import { useState, useEffect, ChangeEvent, useCallback } from 'react';

type CommonType = {
  name?: string;
};

const Common = ({ name = 'Common' }: CommonType) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('print name every time', name);
  });

  useEffect(() => {
    console.log('name once', name);
  }, []);

  useEffect(() => {
    console.log('name changed', name);
  }, [name]);

  const getFullName = useCallback(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  const onFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onLastChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <fieldset>
      <legend>{name}</legend>
      {getFullName()}
      <input value={firstName} onChange={onFirstChange}></input>
      <input value={lastName} onChange={onLastChange}></input>
    </fieldset>
  );
};

export default Common;
