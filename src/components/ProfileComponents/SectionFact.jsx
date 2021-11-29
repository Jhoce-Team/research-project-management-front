import React from 'react'

const SectionFact = ({fact, factName}) => {
    return (
      <section className="px-2 py-2 flex-col justify-center items-center text-center">
        <div className="font bold text-xl text-color1">{fact}</div>
        <div>{factName}</div>
      </section>
    );
}

export default SectionFact
