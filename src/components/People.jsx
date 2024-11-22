import {useState, useFffect, useEffect} from 'react'
import getData from '../utils/getData'
import './People.css'

function People() {
    // state
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(false);

    // use effect on render
    useEffect( ()=>{

        getData('people/').then(
            (json)=>{
                setPeopleObj(json);
                setLoaded(true)
            })
    }, [])

    if(!loaded) return ( 
        <>
        LOADING....
        </>
     );

    

     return (
        <>
        DONE
        <h1>{peopleObj.title}</h1>
        <h2>{peopleObj.subtitle}</h2>
        <h3>Faculty</h3>
        <div className="peopleList">

            {/* loopy doopdy */}
            {peopleObj.faculty.map( (p) => 
            <div className="peopleListItem" key={p.username}>
                <h3>{p.name}</h3>
                <img src={p.imagePath} alt={`Picture of ${p.name}`} />
            </div>
                
                

            )}
        </div>
        <h3>Staff</h3>
        <div className="staffList">

            {/* loopy doopdy */}
            {peopleObj.staff.map( (p) => 
            <div className="staffListItem" key={p.username}>
                <h3>{p.name}</h3>
                <img src={p.imagePath} alt={`Picture of ${p.name}`} />
            </div>
                
                


                
            )}
        </div>
        </>
     )
}

export default People;