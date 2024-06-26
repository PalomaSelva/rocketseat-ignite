import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/player'

export function VideoPlayer() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }
  return (
    <div className="w-full bg-zing-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        onEnded={handlePlayNext}
        playing
      />
    </div>
  )
}
