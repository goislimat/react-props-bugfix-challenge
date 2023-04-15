import Name from "./components";

function Character(props) {
  return (
    <div>
      <span>Character</span>
      <Name name={name} />
    </div>
  );
}

export default Character;
