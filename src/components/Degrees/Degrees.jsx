import { useState, useEffect } from "react";
import getData from "../../utils/getData.js";
import { Accordion } from '@mantine/core';

export default function Degrees() {
  const [degreesObj, setDegreesObj] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData("degrees/").then((json) => {
      setDegreesObj(json);      
      setLoaded(true);
    
    });
    
  }, []);

 
  // data takes time to load sometimes, this will show to enterain user
  if (!loaded)
    return (
      <>
        <div className="full-screen-width">LOADING...</div>.
      </>
    );

   
    
    // object to go inside Mantine accordion
    const undergradDegItems = degreesObj.undergraduate.map((item) => (
      <Accordion.Item key={item.degreeName} value={item.title}>
        <Accordion.Control>{item.title}</Accordion.Control>
        <Accordion.Panel>
          <p>{item.description}</p>
          {item.concentrations && (
            <ul>
              {item.concentrations.map((concentration, index) => (
                <li key={index}>{concentration}</li>
              ))}
            </ul>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    ));

    // object to go inside Mantine accordion, filters out data without a title aka the certificates
    const gradDegItems = degreesObj.graduate
  .filter((item) => item.title)  
  .map((item) => (
    <Accordion.Item key={item.degreeName} value={item.title}>
      <Accordion.Control>{item.title}</Accordion.Control>
      <Accordion.Panel>
        <p>{item.description}</p>
        {item.concentrations && (
          <ul>
            {item.concentrations.map((concentration, index) => (
              <li key={index}>{concentration}</li>
            ))}
          </ul>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  ));

 


  
    return (
      <>
  
      <div className="full-screen-width">
        <Accordion variant="separated" radius="xl" chevronPosition="left" defaultValue="Degree">
        {undergradDegItems}
      </Accordion>
      <Accordion variant="separated" radius="xl" chevronPosition="left" defaultValue="Degree">
        {gradDegItems}
      </Accordion>
      
      <div>
      {
        degreesObj.graduate.filter((item) => item.availableCertificates).map((item) => (
          <div key={item.degreeName}>
          <h2>{item.degreeName}</h2>
          <ul>
            {item.availableCertificates.map((certificate, index) => (
              <li key={index}>{certificate}</li>
            ))}
          </ul>
        </div>
        ))
      }
      </div>
      
      </div>
      </>
      
      
    );

      
  

}
