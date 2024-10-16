import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App name={' dodo '}>
      <h1>안녕하세요!</h1>
      <p>이것은 메인 콘텐츠입니다.</p>
    </App>
);

