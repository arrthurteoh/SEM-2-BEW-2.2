const name = "Nicholas";
const element = (
  <div className="myDiv">
    {" "}
    style = {{ paddingTop: 10 }}
    <h1 id="my-heading">This is my XML element</h1>
    <h2>Hi {name}</h2>
  </div>
);

// XML behaves like HTML, but if you want to use multiline, you have to use brackets.
// ID can be declared as per HTML, but others are different
// class -> classname, style -> style{{stylekey : value}}
// Above is an example.
// You can also add variables into your XML by just using {} curly brackets.

// Another reason why we use XML, is because we can recycle the elements.

const secondElement = <div>{element}</div>;

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>Hello My name is {name} and I'm a web developer</p>
    </div>
  );
};

export default AboutMe;
