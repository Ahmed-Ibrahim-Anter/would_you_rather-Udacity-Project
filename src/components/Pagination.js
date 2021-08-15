import React from 'react'
import { useState,useEffect } from 'react';
import Control from './Control';




const Pagination = () => {

 let back =localStorage.getItem('control'); 
  const [control, setcontrol] = useState('')
  console.log('control: ', control);
  useEffect(() => { 
    control===''&&setcontrol(back)
  }, [back, control]);

  return (
    <>
      <div className="d-grid gap-2 d-md-block">
        <button onClick={() => { setcontrol('UnAnsweredQuestions');localStorage.setItem('control','UnAnsweredQuestions'); }} className={`btn btn-warn ${back==='UnAnsweredQuestions'&& 'border border-primary'}`} type="button">UnAnsweredQuestions</button>
        <button onClick={() => { setcontrol('AnsweredQuestions');localStorage.setItem('control','AnsweredQuestions'); }} className={`btn btn-warn ${back==='AnsweredQuestions'&& 'border border-primary'}`} type="button">AnsweredQuestions</button>
      </div>
      <hr />
      {(control === 'AnsweredQuestions' ?  <Control condition='1' />: <Control condition='0' />)}
    </>
  );
}

export default Pagination;