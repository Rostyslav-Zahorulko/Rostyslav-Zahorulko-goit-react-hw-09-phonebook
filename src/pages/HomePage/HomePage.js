import './HomePage.scss';
import PhoneIcon from '../../icons/phone-icon.png';

export default function HomePage() {
  return (
    <div>
      <h1 className="homepage-title">PHONEBOOK APP</h1>
      <img className="homepage-image" src={PhoneIcon} alt="Phone icon" />
    </div>
  );
}
