import './missionvision.css'
import Mission from './Mission'
import Vision from './Vision'

export default function MissionVision() {
  return (
    <div className="mi-vi-wrapper">
      <div className="vi-wrapper">
            <Vision/>
        </div>
        <div className="mi-wrapper">
            <Mission/>
        </div>
    </div>
  )
}
