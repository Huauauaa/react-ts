import { useEffect } from 'react';
import axios from 'axios';
import _ from 'youdian';

const About = () => {
  useEffect(() => {
    console.log('111');
    (async () => {
      const resp = await axios.get('/api/users');
      console.log(resp);
    })();

    console.log(_.chunk(['a', 'b']));

    setInterval(() => {
      console.log('object');
    }, 1000);
  }, []);

  return <div>About</div>;
};

export default About;
