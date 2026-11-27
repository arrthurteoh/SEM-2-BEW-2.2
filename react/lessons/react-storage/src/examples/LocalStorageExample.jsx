const LocalStorageExample = () => {
   const fruitsArray = ["Apple", "Banana", "Coffee"]


  // Set item in local storage
  localStorage.setItem("username", "JohnDoe");
  localStorage.setItem("age", 55);// Number
  localStorage.setItem("isMalaysian", "true"); //Boolean

  localStorage.setItem("fruits",  JSON.stringify(fruitsArray))

  // Try to get a non-existent item
  const nonExistentItem = localStorage.getItem("nonExistentKey");


  localStorage.removeItem("username")
  localStorage.clear()


  // Get item from local storage
  const username = localStorage.getItem("username"); //String
  console.log(username)

  const age = localStorage.getItem('age') //String
  const isMalaysian = localStorage.getItem('isMalaysian')//String
  const storedFruits = localStorage.getItem('fruits')// JSON String

  const convertedIntoArrayFruits = JSON.parse(storedFruits)
  console.log(storedFruits)
  console.log(convertedIntoArrayFruits)

  if(username == null){
     // Logic goes here if user is not logged in
  }

  return (
    <div>
      <ul>
        {convertedIntoArrayFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageExample;
