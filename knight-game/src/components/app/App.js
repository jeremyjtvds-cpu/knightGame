import React, { useState } from 'react';
import styles from './styles.modules.css';

export const App = () => {
  const [mode, setMode] = useState('start');

  return <div className={styles.main}>
    {mode === 'start' && <>Start menu</>}
    
    {mode === 'battle' && <>Battle Mode</>}
    
    {mode === 'gameOver' && <>Game Over</>}
  </div>
    ;
}

// export default App;
