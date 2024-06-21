import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bulish, decrement, increment, kopaytirish, reset } from './toolkit/Slicer';

const App = () => {
  const [num, setNum] = useState('');
  const [num2, setNum2] = useState('');
  const son = [+num, +num2];
  const count = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const handleReset = () => {
    setNum('');
    setNum2('');
    dispatch(reset());
  };

  return (
    <div>
      <main>
        <h1>{count}</h1>
        <input
          type="text"
          value={num}
          className="form-control"
          style={{ width: "300px" }}
          onChange={(e) => setNum(e.target.value)}
          placeholder="number 1"
        />
        <input
          type="text"
          value={num2}
          className="form-control"
          style={{ width: "300px" }}
          placeholder="number 2"
          onChange={(e) => setNum2(e.target.value)}
        />
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button className="btn btn-success" onClick={() => dispatch(increment(son))}>Increment</button>
          <button className="btn btn-primary" onClick={() => dispatch(decrement(son))}>Decrement</button>
          <button className="btn btn-secondary" onClick={() => dispatch(bulish(son))}>Bolish</button>
          <button className="btn btn-warning" onClick={() => dispatch(kopaytirish(son))}>Kopaytirish</button>
          <button className="btn btn-danger" onClick={handleReset}>Reset</button>
        </div>
      </main>
    </div>
  );
};

export default App;
