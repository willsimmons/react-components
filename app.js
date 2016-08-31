// TODO

//Hard coded Single Component
// var GroceryList = () => {
//   return(
//     <div>
//       <ul>
//         <li>Cucumbers</li>
//         <li>Kale</li>
//       </ul>  
//     </div>
// )};

//Hard Coded Components React Style
// var Cucumbers = () => {
//   return(
//     <li>Cucumbers</li>
// )};

// var Kale = () => {
//   return(
//     <li>Kale</li>
// )};

//Hard Coded Array with known number of items in array
// var GroceryList = (props) => {
//   return(
//     <div>
//       <h1>Grocery List</h1>
//       <ul>
//        <li>{props.todos[0]}</li>
//        <li>{props.todos[1]}</li>
//        <li>{props.todos[2]}</li>
//       </ul>  
//     </div>
// )};

// var App = () =>{return(
//    <GroceryList todos={['learn react','build app','profit']}/ >
// )};


// ReactDOM.render(<App/>,document.getElementById("app"));

//Rendering Dynamically Generated Components
class GroceryListItem extends React.Component {
  //each item can be called with a property
  constructor(props) {
    super(props);
  }
  //this, will be the item that is dynamically passed via props
  render() {
    return (
      <li>{this.props.item}</li>
      );
  }
}

//this static, as in it's one list, it's the items that change
var GroceryList = (props) => (
  <ul>
  
  {console.log(props)}
    {
    props.item.map((item,index) =>
      <GroceryListItem key={index} item={item} />
  )}
  </ul>
);

ReactDOM.render(<GroceryList item={['learn react','build something','profit']}/>,document.getElementById("app"));