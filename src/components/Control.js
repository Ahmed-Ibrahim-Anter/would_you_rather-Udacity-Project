import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { questionSelectors } from '../redux/questionSlice';
import { usertSelectors } from '../redux/userSlice';
import { useHistory } from "react-router-dom";
import { authSelectors } from '../redux/authSlice'

function Control(props) {
    const authL = useSelector(authSelectors.selectIds);
    const user = useSelector(state => usertSelectors.selectById(state, authL[0]));
    const user1 = useSelector(usertSelectors.selectAll);
    const question = useSelector(questionSelectors.selectAll);
    const history = useHistory();
    const handleClick = (e, id) => {
        e.preventDefault();
        history.push(`/answer/${id}`);
    }
    const ele = question.map(q => {
        let v1 = q.optionOne.votes.includes(user.id);
        let v2 = q.optionTwo.votes.includes(user.id);
        let count = (v1 || v2) ? '1' : '0';
        let avatar = user1.find(e => e.id === q.author);
        let timeS = new Date(q.timestamp).toLocaleDateString();



        return (
            <div key={q.id}>
                {props.condition === count &&

                    <Card


                    ahmed='1'
                    option1={q.optionOne.text}
                        option2={q.optionTwo.text}
                        btn={` View Question`}
                        avatarURL={avatar.avatarURL}
                        name={avatar.name}
                        msg='Asked You Would you rather'
                        time={timeS}
                        handelClick={(e) => { handleClick(e, q.id) }}

                    />}

            </div>
        )




    })



    return (
        <>
            {ele}
        </>
    )
}

// Control.propTypes = {

// }

export default Control

