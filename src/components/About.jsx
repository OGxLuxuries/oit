function About({data}) {
    return ( 
        <>
        <div className="About">
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>
        </div>
        <div className="aboutQuote">
            <h4 className="quote">{data.quote}</h4>
            <h4>--{data.quoteAuthor}</h4>
        </div>
        
        </>
     );
}

export default About;