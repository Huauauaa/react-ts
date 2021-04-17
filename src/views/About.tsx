import { useEffect } from 'react';
import axios from 'axios';

const About = () => {
  useEffect(() => {
    console.log('111');
    (async () => {
      const resp = await axios.get('/api/users');
      console.log(resp);
    })();
  }, []);

  return <div>About</div>;
};

export default About;
