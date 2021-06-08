import React from 'react'

const PhotoList = ({photos, title})  => {

    return (
        <>
            <div className="thumbnail">
            {photos?.map((photo) =>
                    <img key={photo.id} src={photo.thumbnailUrl} alt='ALbum Thumbnail'></img>)
                .slice(0, 4)}
            </div>
            <h2>{title}</h2>
        </>
    )
}

export default PhotoList
