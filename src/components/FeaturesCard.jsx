

const FeaturesCard = ({icon, title}) => {
  return (
    <div className="features__Card">
        <img src={icon} alt={title} className="features__card-icon" />
        <h4 className="features__card-title">{title}</h4>
    </div>
  )
}

export default FeaturesCard