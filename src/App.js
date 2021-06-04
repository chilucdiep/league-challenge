import React from 'react'
import './App.css';
import HeroSection from './components/HeroSection'
import AlbumList from './components/AlbumList'

function App() {
  const [albums, setAlbums] = React.useState([])
  const [photos, setPhotos] = React.useState([])

  const getRequestAlbum = async() => {
    const urlAlbum = `https://jsonplaceholder.typicode.com/users/1/albums`
    const responseAlbum = await fetch(urlAlbum)
    const responseJsonAlbum = await responseAlbum.json()
    setAlbums(responseJsonAlbum)
    console.log(albums)
  }

  const getRequestPhoto = () => {
    Promise.all(albums.map(async(album) => { 
      var albumId = album.id
      const urlPhoto = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
      const responsePhoto = await fetch(urlPhoto)
      const responseJsonPhoto = await responsePhoto.json()
      setPhotos(responseJsonPhoto)
      console.log(responseJsonPhoto)
    }))
  }
  
  React.useEffect(() => {
    getRequestAlbum()
    getRequestPhoto()
  }, [])

  return (
    <>
      <HeroSection />
      <AlbumList albums={albums} photos={photos}/>
    </>
  );
}

export default App;
