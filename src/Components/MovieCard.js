import {React,  useState} from 'react'
import { Card } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import defaultImg from './default.jpg'
const MovieCard = (props) => {
    const posterPath=props.data.poster_path
    const movieId=props.data?.id

    return (
        <>
        <Link to={`/about/${movieId}`} className='text-dark card-small ' style={{ textDecoration: 'none'}}>
            <Card className='p-2 ' style={{ width: '12rem',height:'22rem'}}>
                <Card.Img variant="top" className='small-img' src={posterPath?`https://image.tmdb.org/t/p/w200${posterPath}`: defaultImg}/>
                <Card.Body className='py-2 px-2'>
                    <Card.Title style={{fontSize:props.data.title.length>19?'12px':'16px'}} className='pt-1'>{props.data.title?props.data.title:props.data.original_title}</Card.Title>
                    <Card.Text>Ratings: <strong>{props.data.vote_average} <i class="bi bi-star-fill text-warning"></i></strong></Card.Text>
                    
                </Card.Body>
            </Card>
        </Link>
            
        </>
        
    )
}

export default MovieCard