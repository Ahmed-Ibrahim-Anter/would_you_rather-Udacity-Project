/* eslint-disable no-mixed-operators */
import React from 'react'
const Card = (props) => {

    return (
        <div className="card m-3 aa " style={{ maxWidth: '80%', minWidth: '70%' }}>
            <div className="row gy-0 ">
                <div className="col-md-3 my-5 mx-4 card d-flex  justify-content-center align-items-md-center  "  style={{ maxHeight: '200px' }} >
                    <img  src={props.avatarURL} alt='user' width="100%" height={props.ahmed === '5' ? 200 :150} className='im' />
                </div>
                <div className="col-md-8 ">
                    <div className="card-body ms-5 text-cnter">
                        <h5 className="card-title">{props.name} {`  : `}  {props.ahmed !== '3'&& props.msg}</h5>
                        <p className="card-text"><small className="text-muted">{props.ahmed !== '4' &&  props.ahmed !== '3' &&'Created Date : '} {props.time}</small></p>
                        {props.ahmed === '1' &&
                            <>
                                <div className="alert alert-secondary text-center" >
                                    {props.option1}
                                </div>

                                <div className="separator">OR</div>



                                <div className="alert alert-success text-center">
                                    {props.option2}
                                </div>
                            </>}
                        {props.ahmed === '2' &&
                            <>
                          
                                 <div onChange={props.onChange}>
                                <div className="form-check ">
                                    <input className="form-check-input" value={props.option11} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label alert alert-success text-center" htmlFor="flexRadioDefault1">

                                        {props.option1}
                                    </label>
                                </div>
                                <div className="separator">OR</div>
                                <div className="form-check">
                                    <input className="form-check-input" value={props.option22} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label alert alert-secondary text-center" htmlFor="flexRadioDefault2">

                                        {props.option2}

                                    </label>
                                </div>
                                </div>
                               
                            </>}
                        {props.ahmed === '3' && <>
                            <div className='d-flex justify-content-between score mr'>
                                <div className='d-flex flex-column justify-content-between m-3 mr' style={{ minWidth: '90%' }} >
                                    <h3 className='h3 mr my-3'>Ansered Questions <span className="badge bg-secondary">{props.answer}</span></h3>
                                    <h3 className='h3 mr my-3'>Created Questions <span className="badge bg-secondary">{props.question}</span></h3>
                                </div>
                                <div className=' mr d-flex  justify-content-center align-items-center bg-danger badge'style={{ maxHeight: '70px' ,borderRadius:'50px' }} >
                                    <h3 className='my-5'>{props.score}</h3>

                                   

                                </div>
                            </div>
                        </>}
                        {props.ahmed === '4' && <>
                            <div className='bod'>


                                <div className="input-group inp m-3">
                                    <span className="input-group-text">First Option</span>
                                    <input onChange={props.change1} type="text" value={props.op1} className="form-control" />

                                </div>
                                <div className="separator">OR</div>
                                <div className="input-group m-3">
                                    <span className="input-group-text">Second Option</span>
                                    <input  onChange={props.change2} type="text"  value={props.op2} className="form-control" />

                                </div>
                            </div>
                        </>}
                        {props.ahmed === '5' && <>
                            <div className='d-flex flex-column ' style={{ maxHeight: 350 }}>
                                <div className="alert alert-secondary text-center" >
                                    {props.option1}
                                </div>

                                <progress value={props.qv1} max={props.v1} style={{ width: '100%' }}> {props.qv1}% </progress>
                                <p>Voted <span className="badge bg-secondary">{props.qv1}</span > from <span className="badge bg-secondary">{props.v1}</span>   <span className="badge bg-secondary">{props.you}</span></p>
                                <hr />
                                <div className="alert alert-success text-center">
                                    {props.option2}
                                </div>
                                <progress value={props.qv2} max={props.v1} style={{ width: '100%' }}>{props.qv2}%</progress>
                                <p>Voted <span className="badge bg-secondary">{props.qv2}</span > from <span className="badge bg-secondary">{props.v1}</span>   <span className="badge bg-secondary">{props.you1}</span></p>
                            </div>
                        </>}

                    </div>
                </div>
                {props.ahmed !== '3' && props.ahmed !== '5' && <>
                    <div className="d-grid ">
                        <button onClick={props.handelClick} className='btn btn-primary' type="submit">{props.btn} </button>

                    </div></>}
            </div>
        </div>


    );
}

export default Card;


