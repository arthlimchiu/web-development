import ProfileCard from "./ProfileCard";

function App() {
  return(
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alex" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana22" />
      <ProfileCard title="Siri" handle="@siri55" />
    </div>
  );
}

export default App;