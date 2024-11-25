import PeopleModal from "./PeopleModal";
import './People.css';

const PeopleGroup = ({title, obj}) => {
    return ( 
    <>
    <h1>{title}</h1>
    <div className="peopleList">

        {/* loopy doopdy */}
        {obj.map( (p) => 
        <div className="peopleListItem" key={p.username}>
            <h3>{p.name}</h3>
            <img src={p.imagePath} alt={`Picture of ${p.name}`} />
            <PeopleModal {...p} name={p.name}/>
        </div>
        )};
        </div>
    
    </> 
    );
}

export default PeopleGroup;