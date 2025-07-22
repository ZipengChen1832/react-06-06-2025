import FirstComponent from "./FirstComponent";

// one module can only have one default export
// when importing a default, you can name it whatever you want, but ideally keep the name same
export default function DescribingTheUI() {
  // this is called JSX syntax, it looks like HTML, but it's not HTML
  return (
    <div>
      <h1>Describing the UI</h1>

      {/* A component MUST have its first letter capitalized */}
      <FirstComponent />
    </div>
  );
}
