import React  from 'react'
// import PropTypes from "prop-types";

export default function Home(props) {
  return (
    <div className='container my-4' style={{background:props.mode==='dark'?'gray':'white'}}>
        <div className="info">
            <h1>TextUtils info</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, nihil unde esse natus iusto non ut quod tenetur voluptatum quasi. Recusandae sint esse ducimus fugiat illum, dolores magni sed et id possimus sequi tenetur.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus magnam nulla maiores pariatur sequi quasi laborum, aspernatur inventore debitis obcaecati autem. Fugiat dolorum cum tenetur at maxime velit distinctio!</p>
        </div>
    </div>
  )
}
