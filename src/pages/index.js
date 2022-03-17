import * as React from 'react';

import '../css/index.css';
import logo from '../images/10HANDY.jpg';

// markup
const IndexPage = () => {
  return (
    <div>
      <div id='logo' className='flex justify-center'>
        <img src={logo} alt='' className='w-64' />
      </div>
    </div>
  );
};

export default IndexPage;
