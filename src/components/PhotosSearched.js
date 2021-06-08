import React from 'react'
import { Photo } from './PhotosSearched.style';

const PhotosSearched = ({photoSearched}) => {

    return (
        <Photo>
            {photoSearched?.title==="" ? <h2>Photo not found</h2> : <h2>{photoSearched?.title}</h2>}
            <img src={photoSearched?.url}></img>
        </Photo>
    )

}

export default PhotosSearched
