import './MCUShow.css';

function MCUShows(dates){
    return(
        <div className='MCUShows'>
            <h1 style={{font: 'Georgia', textDecorationLine: 'underline'}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision:{dates} </p>
            <p>The Falcon and the Winter Soldier:{dates}</p>
            <p>Loki:{dates}</p>
            <p>What If...?:{dates}</p>
            <p>Hawkeye:{dates}</p>
            <p>Moon Knight:{dates}</p>
            <p>Ms. Marvel:{dates}</p>
        </div>
    )}

export default MCUShows