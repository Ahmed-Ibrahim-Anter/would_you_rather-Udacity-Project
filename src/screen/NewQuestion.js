import React, { useState } from 'react'
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { usertSelectors, addq } from '../redux/userSlice';
import { authSelectors } from '../redux/authSlice.js';
import { useHistory } from 'react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { nanoid } from '@reduxjs/toolkit';
import { add } from '../redux/questionSlice'




const NewQuestion = () => {
    const authL = useSelector(authSelectors.selectIds);
    const user = useSelector(state => usertSelectors.selectById(state, authL[0]));
    const [option1, setoption1] = useState('');
    const [option2, setoption2] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const handelChange1 = (e) => {
        let value = e.target.value;
        setoption1(value);
    }
    const id = nanoid()
    const userId = user.id;

    const handelChange2 = (e) => {
        let value = e.target.value;
        setoption2(value);
    }
    const handClick = (e) => {
        e.preventDefault();
        if ((option2 || option1) === '') { alert('You Should Put Your Options'); return } else {

            dispatch(showLoading());
            localStorage.setItem('control', 'UnAnsweredQuestions');
            dispatch(add({
                id: id,
                timestamp: Date.now(),
                author: user.id,
                optionOne: {
                    votes: [],
                    text: option1,
                },
                optionTwo: {
                    votes: [],
                    text: option2,
                }
            }));
            dispatch(addq({ userId, id }));
            history.push('/dashboard');
            dispatch(hideLoading());
        }

    }

    return (
        <>
            <Card
                ahmed='4'
                btn='Add New Question'
                avatarURL={user.avatarURL}
                name={user.name}
                msg='You Will Ask " Would You Rather"'
                change1={(e) => { handelChange1(e) }}
                change2={(e) => { handelChange2(e) }}
                handelClick={(e) => { handClick(e) }}
                op1={option1}
                op2={option2}
            />

        </>
    );
}

export default NewQuestion;