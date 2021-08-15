import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { usertSelectors } from '../redux/userSlice';




const LeaderBoard = () => {
    const users = useSelector(usertSelectors.selectAll);
   
    function compare(a, b) {
        const userA = Object.keys(a.answers).length +a.questions.length; 
        const userB =  Object.keys(b.answers).length +b.questions.length;
      
        let comparison = 0;
        if (userA > userB) {
          comparison = -1;
        } else if (userA < userB) {
          comparison = 1;
        }
        return comparison;
      }
      


    const ele = users.sort(compare).map(e => {
        let answer = Object.keys(e.answers).length;
        let qL = e.questions.length;
        let lengthAll = answer + qL;

        
        return (
            <div key={e.id}>
                <Card
                    ahmed='3'
                    name={e.name}
                    answer={answer}
                    question={qL}
                    score={lengthAll}
                    avatarURL={e.avatarURL}
                />

            </div>



        )

    })
   

    return (
        <>

            {ele}

        </>
    );
}

export default LeaderBoard;