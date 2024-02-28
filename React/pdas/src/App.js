import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return(
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title='Alex' handle='@alexa99' />
      <ProfileCard title='Cortana' handle='@cortana22' />
      <ProfileCard title='Siri' handle='@siri55' />
    </div>
  );
}

export default App;