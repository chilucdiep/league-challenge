import React from 'react'
import { Photo } from './PhotosSearched.style';

const PhotosSearched = ({photoSearched}) => {

    return (
        <Photo>
            {photoSearched?.title ? <h2>{photoSearched?.title}</h2> : <h3>Photo not found</h3>}
            <img src={photoSearched?.url}></img>
        </Photo>
    )

}

export default PhotosSearched
