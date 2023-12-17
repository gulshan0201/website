import quote from '../assets/quote.png'

const TestimonialCard = ({imgURL, title, about, des}) => {
  return (
    <div className="testimonial__card">
        <img src={quote} alt="" />
        <p>{des}</p>
        <div className="testimonial__card-info">
          <img src={imgURL} alt={title} />
          <div>
          <h4>{title}</h4>
          <span>{about}</span>
          </div>
        </div>
    </div>
  )
}

export default TestimonialCard