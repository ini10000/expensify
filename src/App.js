import Fruit from '../src/images/fruit.png'
import './app.scss'
import {useState} from "react";
import Input from "./component/form/form.component";
import Card from "./component/card-components/card.component";
import Navigation from "./component/routes/navigation-menu/navigation.component";
import MainBox from "./component/Mainbox/mainbox.component";

function App() {
  const [input, setInput] = useState({
      mainItem: '',
      itemPrice:'',
      category:'',
      description:''
  })
  const [items, setItems] = useState([])
  function handleChange(e){
      const {name,value} = e.target
      setInput({...input, [name]:value})
  }

    function addTask() {
        setItems(prevState => {
            return [...prevState,input]
        })
        console.log(items)
    }

    function submit(e){
     e.preventDefault()
     addTask()
  }
  return (
    <div className="app-page">
      <div className={'background'}/>
        <div>
            <div className={'yellow-background'}>
                <div className={'shopping-list'}>
                    <p>Shopping</p>
                    <p>List</p>
                </div>

            </div>
            <div className={'backdrop'}>
                <p>Welcome</p>
                <img src={Fruit} className={'fruit'}/>
            </div>
            <div>
                <MainBox items={items}
                         submit={submit}
                         handleChange={handleChange}
                />
            </div>
        </div>


    </div>
  );
}

export default App;
