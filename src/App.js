import "./styles.css";

const arr = new Array(101)
  .fill(0)
  .map((d, i) => i)
  .filter((d, i) => d % 2 === 0); // used this over my answer in the quiz as suggested
const date = new Date();

const dates = arr
  .map((d) => date.getTime() - d * 24 * 60 * 60 * 1000)
  .map((d) => new Date(d));
const randomValues = dates.map((date) => ({
  date,
  val: Math.floor(Math.random() * 51)
}));

export default function App() {
  return (
    <div className="App">
      {randomValues.map((randomValues, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: `${index * 13 + 3}px`,
            transform: `translateY(-${randomValues.val}px)`
          }}
        />
      ))}
    </div>
  );
}
