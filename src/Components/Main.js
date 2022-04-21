import { React, useEffect, useState } from 'react'
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import MovieCard from './MovieCard'
function Main() {
    const [topmoviesNow, settopmoviesNow] = useState([])
    const [searchQuery, setsearchQuery] = useState('')
    const [horror, sethorror] = useState([])
    const [romance, setromance] = useState([])
    const [sciencefiction, setsciencefiction] = useState([])
    const [comedy, setcomedy] = useState([])
    const [searched, setsearched]=useState(false)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US&page=1`)
            const data = await res.json()
            settopmoviesNow(data.results)

            const res_h= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US&page=1&with_genres=27`)
            const data_h= await res_h.json()
            sethorror(data_h.results)

            const res_r= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US&page=1&with_genres=10749`)
            const data_r= await res_r.json()
            setromance(data_r.results)

            const res_sc= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US&page=1&with_genres=878`)
            const data_sc= await res_sc.json()
            setsciencefiction(data_sc.results)

            const res_co= await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US&page=1&with_genres=35`)
            const data_co= await res_co.json()
            setcomedy(data_co.results)
            
        })()
    }, [])

    const searchMovies = async (e) => {
        setsearched(true)
        console.log(searchQuery)
        e.preventDefault()
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
        const json = await res.json()
        console.log(json.results)
        console.log(json)
        return settopmoviesNow(json.results)
    }
    return (
        <>
            <Navbar className='fixed-top text-light navbar-dark' bg="dark" variant='light' expand="lg">
                <Container fluid>
                    <span className=' fs-1 mt-1' style={{cursor:'pointer'}} onClick={() => window.location.reload(false)}>
                        Trail-Flix 🍿
                    </span>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 fs-4" style={{ maxHeight: '100px' }} navbarScroll>
                            <span style={{cursor:'pointer'}} onClick={() => window.location.reload(false)} className='text-light fs-3 mt-1' >
                               <u>Home</u> 
                            </span>
                        </Nav>

                        <Form className="d-flex" onSubmit={searchMovies}>
                            <FormControl value={searchQuery} type="search" onChange={(e) => { setsearchQuery(e.target.value) }} placeholder="Search" className="me-2" aria-label="Search" />
                            <Button type='submit' variant='light' >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <h4 className='text-light p-4'>{searched===true?"Showing results for "+searchQuery: 'Top Movies Now'}</h4>
            <div className={searched===true?' d-flex flex-wrap justify-content-evenly cast-container gap-2 ': ' d-flex cast-container px-3 gap-3 '}>
                
                {topmoviesNow.map((movie, idx) => {
                    return (
                        <MovieCard data={movie} key={idx} />
                    )
                })}
            </div>

            <h4 className={searched===true?'d-none':'text-light p-4'}>Horror</h4>
            <div className={searched===true?' d-none ': ' d-flex cast-container px-3 gap-3 '}>
                {horror.map((movie, idx) => {
                    return (
                        <div>
                        
                        <MovieCard data={movie} key={idx} />
                        </div>
                    )
                })}
            </div>
            <h4 className={searched===true?'d-none':'text-light p-4'}>Romance</h4>
            <div className={searched===true?'d-none ': ' d-flex cast-container px-3 gap-3 '}>
                {romance.map((movie, idx) => {
                    return (
                        <div>
                        <MovieCard data={movie} key={idx} />
                        </div>
                    )
                })}
            </div>
            <h4 className={searched===true?'d-none':'text-light p-4'}>Science Fiction</h4>
            <div className={searched===true?' d-none ': ' d-flex cast-container px-3 gap-3 '}>
                {sciencefiction.map((movie, idx) => {
                    return (
                        <div>
                        <MovieCard data={movie} key={idx} />
                        </div>
                    )
                })}
            </div>

            <h4 className={searched===true?'d-none':'text-light p-4'}>Comedy</h4>
            <div className={searched===true?' d-none ': ' d-flex cast-container px-3 gap-3 '}>
                {comedy.map((movie, idx) => {
                    return (
                        <div>
                        <MovieCard data={movie} key={idx} />
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}

export default Main
// d-flex flex-wrap justify-content-evenly cast-container gap-2