import './Background.css'

export default function Background() {
  return (
    <div className="bg-wrapper" aria-hidden="true">
      <div className="bg-grid"></div>
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>
    </div>
  )
}
