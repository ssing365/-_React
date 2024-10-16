import {useState} from 'react';
import PropTypes from 'prop-types';

function App({name, children}) {

  const [color, setColor] = useState('black');

  return (
    <>
    <div>
      <header>헤더</header>
      <main>{children}</main>
      <div>안녕하세요, 제 이름은{name}입니다.</div>
      <footer>푸터</footer>
    </div>

    {/* color btn */}
    <div>
    <h1 style={{ color }}>{'뭐여뭐여'}</h1>
    <button style={{ color: 'red' }} onClick={() => setColor('red')}>
      빨간색
    </button>
    <button style={{ color: 'green' }} onClick={() => setColor('green')}>
      초록색
    </button>
    <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
      파란색
    </button>
  </div>
  </>
  );
}

App.defaultProps = {
  name : '홍길동'
}

App.propTypes = {
  name : PropTypes.string
}

export default App;