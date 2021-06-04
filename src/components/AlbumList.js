import React from 'react'
import { AlbumGrid, Album } from './AlbumList.style'

const AlbumList = ({albums, photos})  => {
    const thumbnails = photos.slice(0, 4).map((photo) => photo.thumbnailUrl)

    return (
        <>
            <AlbumGrid>
                {albums.map((album) =>
                    <Album key={album.id}>
                        <div className="thumbnail">
                        {thumbnails.map((thumbnail) =>
                                <img src={thumbnail} alt='ALbum Thumbnail'></img>
                        )}
                        </div>
                        <h2>{album.title}</h2>
                    </Album>
                )}
            </AlbumGrid>
        </>
    )
}

export default AlbumList
