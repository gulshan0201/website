import FeaturesCard from '../../components/FeaturesCard';
import {data} from './data';
import './features.css';

const Features = () => {
  return (
        <section id="features">
            <div className="container features__container">
                    {
                        data.map((item) => (
                            <FeaturesCard key={item.icon} {...item}/>
                        ))
                    }
            </div>
        </section>
    );
};

export default Features