import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      
{/*remove below when ready and add back in <App />*/}

    <head>
    <link rel="stylesheet" href="index.css"></link>
  <meta charset="UTF-8">
  <title>Tweed Trading</title>
  <style>
  </style>
</head>
<body>
  <header>
    <h1>Welcome to Tweed Trading</h1>
  </header>

  <div class="container">
    <img class="hero-image" src="path/to/hero-image.jpg" alt="Hero Image">
    
    <div class="main-content">
      <h2>About Tweed Trading</h2>
      <p>Tweed Trading is a leading company in the field of recycled building materials. We are committed to sustainable practices and providing high-quality materials for construction projects.</p>
      
      <h2>Our Services</h2>
      <ul>
        <li>Supply of recycled timber</li>
        <li>Recycled bricks and stones</li>
        <li>Reclaimed roofing materials</li>
        <li>Environmentally friendly insulation</li>
        <li>And much more!</li>
      </ul>
      
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to get in touch with our team.</p>
      <p>Email: info@tweedtrading.com</p>
      <p>Phone: 123-456-7890</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.1506827130524!2d176.1451463!3d-37.716140800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dda452fcab65d%3A0x1f1b293584d1e986!2s40%20Courtney%20Road%2C%20Gate%20Pa%2C%20Tauranga%203112!5e0!3m2!1sen!2snz!4v1688122482344!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  <footer>
    <p>&copy; 2023 Tweed Trading. All rights reserved.</p>
  </footer>
</body>




      
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

