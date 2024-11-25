import {useState, useEffect} from 'react'
import { TabPane, Tab } from 'semantic-ui-react'
import getData from '../../utils/getData.js'
import PeopleGroup from './PeopleGroup'
import './People.css'



const Tabs = () => {
  const [peopleObj, setPeopleObj] = useState();
  const [loaded, setLoaded] = useState(false);
  // go get data

  const panes = [
    { menuItem: 'Faculty', render: () => <TabPane><PeopleGroup title="faculty" obj={peopleObj?.faculty} /></TabPane> },
    { menuItem: 'Staff', render: () => <TabPane><PeopleGroup title="staff" obj={peopleObj?.staff} /></TabPane> },
    
  ]

  useEffect(()=>{
    getData('people/').then(
      (json) => {
        console.log('people: ', json)
        setPeopleObj(json);
        setLoaded(true);
      }
    )
  }, []);

  if (!loaded) return <><h1>Loading People...</h1></>

  return (
    <>
    <h1>{peopleObj.title}</h1>
    <h2>{peopleObj.subTitle}</h2>
    <Tab panes={panes} />
    
    
    </>
    

  )
  
  
}




export default Tabs