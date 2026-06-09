import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import YoutubeImport from './Pages/YoutubeImport.jsx'
import SpotifyImport from './Pages/SpotifyImport.jsx'
import PlaylistTracksPage from './Pages/PlaylistTracksPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home/>} />
      <Route path='/youtubemusic' element={<YoutubeImport/>} />
      <Route path='/spotifymusic' element={<SpotifyImport/>} />
      <Route path='/playlist' element={<PlaylistTracksPage/>} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
