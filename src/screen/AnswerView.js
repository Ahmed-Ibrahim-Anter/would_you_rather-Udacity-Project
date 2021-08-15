import React from 'react';
//import Control from '../components/Control';
import { useParams } from 'react-router-dom';
import ControlQ from '../components/ControlQ';
import PropTypes from 'prop-types'

const AnswerView = () => {
    let pram = useParams();
    let id = pram.id;
    console.log('id: ', id);
    return (
        <>

            < ControlQ id={id} />


        </>
    );

}
AnswerView.propTypes = {
    id: PropTypes.string,


}
export default AnswerView;