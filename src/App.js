import React from 'react'
import './App.css';
import HeroSection from './components/HeroSection'
import PhotosSearched from './components/PhotosSearched'
import PhotoList from './components/PhotoList'
import { Album, AlbumGrid } from './components/AlbumGrid.style';

function App() {
  const [albums, setAlbums] = React.useState([])
  const [photosMap, setPhotosMap] = React.useState({})
  const [photoArray, setPhotoArray] = React.useState([])
  const [searchInput, setSearchInput] = React.useState('')

  const getRequestAlbum = async () => {
    const urlAlbum = `https://jsonplaceholder.typicode.com/users/1/albums`
    const responseAlbum = await fetch(urlAlbum)
    const responseJsonAlbum = await responseAlbum.json()
    setAlbums(responseJsonAlbum)
  }

  React.useEffect(() => {
    getRequestAlbum()
  }, [])

  React.useEffect(() => {
    if (albums.length === 0) return;

    (async function () {
      let map = []
      let photos = []
      await Promise.all(albums.map(async (album) => {
        var albumId = album.id
        const urlPhoto = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
        const responsePhoto = await fetch(urlPhoto)
        const responseJsonPhoto = await responsePhoto.json()
        map = { ...map, [albumId]: responseJsonPhoto };
        photos = [...photos, ...responseJsonPhoto]
      }))
      setPhotosMap(map);
      setPhotoArray(photos)
    })()
  }, [albums])

  const PhotoSearched = photoArray.find(photo => photo.title === searchInput)

  const albumListMarkup = albums.map(album =>
    <Album key={album.id}>
      <PhotoList title={album.title} photos={photosMap[album.id]} />
    </Album>
  )

  const searchedMarkup = searchInput ?
    <PhotosSearched photoSearched={PhotoSearched} />
    : <AlbumGrid>
      {albumListMarkup}
     </AlbumGrid>

  
  return (
    <>
      <HeroSection searchInput={searchInput} setSearchInput={setSearchInput} photoArray={photoArray} />
      {searchedMarkup}
    </>
  )
}

export default App;
