import React, { useState } from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { questionSelectors, updateQ } from '../redux/questionSlice';
import { updateUser, usertSelectors } from '../redux/userSlice';
import { authSelectors } from '../redux/authSlice';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { useHistory } from 'react-router';



function ControlQ(props) {
    const authL = useSelector(authSelectors.selectIds);
    const question = useSelector(state => questionSelectors.selectById(state, props.id));
    const qavatar = useSelector(state => usertSelectors.selectById(state, question.author));
    const user = useSelector(state => usertSelectors.selectById(state, authL[0]));
    const [selected, setselected] = useState('');
    const dispatch = useDispatch();
    console.log('selected: ', selected);
    let qv1 = question.optionOne.votes.includes(authL[0]);
    let o1L = question.optionOne.votes.length;
    let o2L = question.optionTwo.votes.length;
    let qv2 = question.optionTwo.votes.includes(authL[0]);
    let v1 = question.optionOne.votes.length + question.optionTwo.votes.length;
    let timeq = new Date(question.timestamp).toLocaleDateString();
    const history = useHistory();
    let id = question.id;
    let userId = user.id;


    const onChange = (e) => {
        let value = e.target.value;
        setselected(value);
    }




    const handelClick = (e) => {
        if(selected===''){alert('you should choose one option'); return }else{
        e.preventDefault();
        dispatch(showLoading());
        localStorage.setItem('control', 'AnsweredQuestions');
        dispatch(updateQ({ id, selected, userId }));
        dispatch(updateUser({  userId,id,selected }));
        history.push('/dashboard');
        dispatch(hideLoading());}

    }

    return (
        <>
            {((qv1) || (qv2)) ?
                <Card

                    ahmed='5'
                    option1={question.optionOne.text}
                    option2={question.optionTwo.text}
                    btn={` View Question`}
                    avatarURL={qavatar.avatarURL}
                    name={qavatar.name}
                    msg='Asked - Would you rather'
                    time={timeq}
                    v1={v1}
                    qv1={o1L}
                    qv2={o2L}
                    you={qv1&&'Your Vote'}
                    you1={qv2&&'Your Vote'}
                   

                /> :


                <Card

                    ahmed='2'
                    option1={question.optionOne.text}
                    option2={question.optionTwo.text}
                    option11='optionOne'
                    option22='optionOne'
                    btn={` Answer The Question`}
                    avatarURL={qavatar.avatarURL}
                    name={qavatar.name}
                    msg='Asked - Would you rather'
                    time={timeq}
                    onChange={onChange}
                    handelClick={(e) => { handelClick(e) }}
                />





            }
        </>
    )










}

// ControlQ.propTypes = {

// }

export default ControlQ

