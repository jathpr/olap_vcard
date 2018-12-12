// @flow

import React from 'react'
import VideoPlayer from '../Player/VideoPlayer'
import Playlist from './Playlist'

type Props = {
  playlist: Array<{
    src: string,
    label: string,
  }>,
}

function Video({ playlist }: Props) {
  return (
    <div className="media-player-wrapper">
      <VideoPlayer tracks={playlist} repeatTrack={false} />
      <Playlist tracks={playlist} />
    </div>
  )
}

export default Video
