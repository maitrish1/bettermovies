import React from 'react'

function Cast({ name, character, imgUrl }) {
    if (imgUrl) { // if imgUrl exists, this executes, or it doesn't. Which basically removes Cast which dont have a imgUrl Path.
        return (
            <div style={{ width: '9rem' }} className='d-flex flex-column justify-content-between text-center rounded cardd text-dark mx-2 p-1'>
                <img className='fixed rounded' src={`https://image.tmdb.org/t/p/w500${imgUrl}`} />
                <div>
                    <p className='m-0 ' style={{ fontSize: '14px' }} ><strong>{name}</strong></p >
                    <p className='m-0 text-wrap' style={{ fontSize: '12px' }} >{character}</p>
                </div>
            </div>
        )
    }
    return ""

}

export default Cast

