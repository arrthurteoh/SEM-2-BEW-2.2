const SessionStorageExample = () => {
   const fruitsArray = ["Apple", "Banana", "Coffee"]


  // Set item in local storage
  sessionStorage.setItem("username", "JohnDoe");
  sessionStorage.setItem("age", 55);// Number
  sessionStorage.setItem("isMalaysian", "true"); //Boolean

  sessionStorage.setItem("fruits",  JSON.stringify(fruitsArray))

  // Try to get a non-existent item
  const nonExistentItem = sessionStorage.getItem("nonExistentKey");


  sessionStorage.removeItem("username")
  sessionStorage.clear()


  // Get item from local storage
  const username = sessionStorage.getItem("username"); //String
  console.log(username)

  const age = sessionStorage.getItem('age') //String
  const isMalaysian = sessionStorage.getItem('isMalaysian')//String
  const storedFruits = sessionStorage.getItem('fruits')// JSON String

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

export default sessionStorageExample;
