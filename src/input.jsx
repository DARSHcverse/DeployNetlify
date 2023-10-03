import React from 'react'

const INPUT = (props)=>{
    return <div>
       <input name={props.name} type={props.type} placeholder={props.placeholder} onChange = {props.onChange}/>
    </div>

}
export default INPUT