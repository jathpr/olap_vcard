// @flow

import React, { useState } from 'react'
import Modal from 'react-modal'
import VideoPlayer from '../Player/VideoPlayer'
import Playlist from './Playlist'
import style from './video.module.css'

type Props = {
  videoTitle: string,
  playlist: Array<{
    src: string,
    label: string,
  }>,
}

Modal.setAppElement('#root')

function Video({ playlist, videoTitle }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal
        shouldFocusAfterRender
        shouldCloseOnOverlayClick={false}
        isOpen={isModalOpen}
        className={style.modal}
        overlayClassName={style.overlay}
        onRequestClose={handleCloseModal}>
        <button type="button" className={`${style.close} button__empty`} onClick={handleCloseModal}>
          &times;
        </button>
        <VideoPlayer tracks={playlist} repeatTrack={false} />
      </Modal>
      <aside className={style.container}>
        <header className={style.header}>
          <h3 className={style.header__text}>{videoTitle}</h3>
        </header>
        <Playlist tracks={playlist} onClick={() => setIsModalOpen(true)} />
      </aside>
    </>
  )
}

export default Video
