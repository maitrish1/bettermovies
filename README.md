# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To use this Project, clone or download as Zip.  
npm/yarn install react-router-dom, bootstrap, react-bootstrap.  
In the project directory, you can run:  
### `npm start`  
Technologies Used :  
> React 17.0.2  
> Bootstrap 5  
> React-Bootstrap 2.2.1  
> React-Router v6  
> React Hooks. 
  
  
    
The home page has different genres of movies in scrollable Rows on Page Load using 'useEffect' hook.  
  
Each movie has the Image conditionally rendered, such that if there is no Poster of the Movie, it Shows a default Image.( Many movies don't have a poster).  
  
Each Row is fetched separately.  
  
The 1st page of each genre is shown.  
  
Search functionality uses the API to fetch, and renders the 1st page of Search Results.  
  
When clicked on any Movie Card, page re-routes to '/about/movie_id'.  
  
'useParams' hook is used to transfer the movie id and fetch the details about the movie.  
  
The About page has details about the movie, including the Official/Unofficial Trailer when clicked on the play button.  
  
A modal appears to show the Trailer. (Not all movies have trailers. I have tried conditionally rendering Clips, or Featurettes of the Movies.)  
  
The Top-billed Cast is also shown on the About Page. I have removed Casts who do not have profile/Image Paths to make it look better(Not fair, I know).  
  
