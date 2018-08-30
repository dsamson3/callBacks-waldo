// The second argument/parameter is expected to be a functionvar arr = ["Alice", "Bob", "Waldo", "Winston"];
i = 0
function findWaldo(arr, found)
{
  arr.forEach(element =>
  {
    {
      var a = element.indexOf("Waldo");
      if(a === 0) {
      index = i
      found();   // execute callback
    }
  }
  i++
});
}
function actionWhenFound() {

  console.log("Found Waldo in index " + index + ".");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);