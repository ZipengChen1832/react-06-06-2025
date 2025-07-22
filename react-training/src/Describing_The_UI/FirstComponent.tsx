export default function FirstComponent() {
  // you should never define a component inside a component
  // however, below is just a regular function returning a JSX, it's not a component
  function renderRow() {
    return <div>hello</div>;
  }

  // JSX rule, it can only return one JSX element
  return (
    <div>
      <h2>First Component</h2>
      <Profile
        src="https://placehold.co/200x200"
        fname="John"
        lname="Doe"
        isAmin
      />
      <Profile src="https://placehold.co/200x200" fname="Jane" lname="Jones" />
    </div>
  );
}

// props is something passed down from parent to child component
// the component receives one argument called props
// props is an object that is commonly destructured
function Profile({ src, fname, lname, isAmin }: any) {
  return (
    <div>
      {/* {isAmin ? <button>Delete everything</button> : null} */}
      {isAmin && <button>Delete everything</button>}

      <div>
        {/* putting variables in between tags */}
        Name: {fname} {lname}
      </div>
      {/* pass variable to props in JSX */}
      <img src={src} alt="Katherine Johnson" />
    </div>
  );
}
