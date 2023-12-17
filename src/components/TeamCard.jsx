import {RiFacebookFill, RiInstagramFill, RiTwitterFill, RiLinkedinFill} from "react-icons/ri";

const TeamCard = ({imgURL, prof, desc}) => {
  return (
    <div className="team__card">
        <img src={imgURL} alt={prof} />
        <h4>{prof}</h4>
        <div className="team__card-info">
            <h5>{desc}</h5>
            <div className="team__card-social">
                <a href=""><RiFacebookFill /></a>
                <a href=""><RiInstagramFill /></a>
                <a href=""><RiTwitterFill /></a>
                <a href=""><RiLinkedinFill /></a>
            </div>
        </div>
    </div>
  )
}

export default TeamCard