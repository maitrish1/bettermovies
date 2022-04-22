import { React, useEffect, useState } from 'react'
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Cast from './Cast'

function About() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const res=await fetch(`https://api.themoviedb.org/3/movie/${id.tmdbId}/videos?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US`)
    const data= await res.json()
    console.log(data.results)
    data.results.map((vid)=>{
      if(vid.name==='Official Trailer'){
        console.log(vid.key)
        return settrailer(vid.key)
      }
      else if(vid.type==='Trailer'){
        console.log(vid.key)
        return settrailer(vid.key)
      }
      else if(vid.type==='Teaser'){
        console.log(vid.key)
        return settrailer(vid.key)
      }
      
    })
  }


  const [movieData, setmovieData] = useState('')
  const [moviecast, setmoviecast] = useState([])
  const [releaseDate, setreleaseDate] = useState('')
  const [genres, setgenres] = useState([])
  const [runTime, setrunTime] = useState(0)
  const [trailer, settrailer] = useState('')

  const id = useParams()
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id.tmdbId}?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US`)
      const data = await res.json()
      setmovieData(data)
      console.log(data)
      setreleaseDate(data.release_date)
      setgenres(data.genres)
      setrunTime(data.runtime)
      const castres = await fetch(`https://api.themoviedb.org/3/movie/${id.tmdbId}/credits?api_key=3983ea9a5a520b843ca19f63c5846817&language=en-US`)
      const castdata = await castres.json()
      setmoviecast(castdata.cast)
    })()
  }, [id.tmdbId])


  return (
    <>

      <Navbar className='fixed-top' bg="dark" variant='dark' expand="lg">
        <Container fluid>
          <Link to='/' className='fs-1 mt-1' style={{ textDecoration: 'none', color: 'white' }}>
            Trail-flix 🍿
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 fs-4" style={{ maxHeight: '100px' }} navbarScroll>
              <Link className='text-light fs-3 mt-1' to='/'>Home</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <div className='d-flex text-light' style={{ width: "100%" }}>
        <img style={{ width: "20em" }} src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className=" my-5 mx-5 border border-light border-2 p-0 img-fluid" alt="..." />

        <div className=' d-flex flex-column gap-3 justify-content-center'>
          <h3>{movieData.title}{releaseDate?'('+releaseDate.substring(0, 4)+')':''}</h3>

          <p>
            <span className='fw-lighter'>{releaseDate?releaseDate:''} </span>
            <span style={{ fontSize: "8px" }}>{releaseDate?'🟡':''}</span>
            {genres.map((genre, idx) => {
              return (
                <>
                  <span key={idx}> {genre.name?genre.name+'.':''} </span>
                </>
              )
            })}
            <span style={{ fontSize: "8px" }}>{releaseDate?'🟡':''}</span>
            <span>{runTime ? runTime + 'm' : ''}</span>
          </p>
          <div className='d-flex align-items-center gap-1'>
            <button className={movieData.vote_average?'py-2 px-1 d-flex align-items-center text-dark fw-bold btn btn-warning disabled rounded-circle':'d-none'} style={{ opacity: '1' }}><span className='fs-5'>{movieData.vote_average * 10}% </span></button>
            <div className='px-3 d-flex gap-3'>
              {/* <button className=' mt-1 text-dark fw-bold btn btn-warning  rounded-circle' style={{ opacity: '1' }}><i className="bi bi-bookmark-fill fs-4"></i></button>
              <button className='mt-1  text-dark fw-bold btn btn-warning  rounded-circle' style={{ opacity: '1' }}><i className="fs-4 bi bi-suit-heart-fill"></i></button> */}
              <button  onClick={handleShow} data-toggle="modal" data-target="#exampleModal" className={movieData.title?'mt-1  text-dark fw-bold btn btn-warning  rounded-circle':'d-none'} style={{ opacity: '1' }}><i className="fs-4 bi bi-play-fill"></i></button>
            </div>
          </div>

          <h6 className='fst-italic text-muted'>{movieData.tagline}</h6>
          <h6 className='text-wrap'>{movieData.overview}</h6>
        </div>
      </div>


      <h4 className='mx-5 text-light'>Top billed Cast</h4>
      <div className='container cast-container d-flex'>
        {moviecast.map((actor, idx) => {
          return (
            <Cast key={idx} name={actor.name} character={actor.character} imgUrl={actor.profile_path} />
          )
        })}
      </div>








      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center align-items-center'>
        <iframe width="500" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>


    </>

  )
}

export default About