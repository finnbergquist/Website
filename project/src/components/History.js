import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../styles/about.css';

//images
import Blueprint from '../images/blueprint.png'
import GalleryPhoto from '../images/gallery.png'

function PHistory() {
    return (
        <div>
            <h1>History</h1>
        
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="Spring-2019"
                style={{ color: '#e86971' }}
            >
                <h3>Starting the Database</h3>
                
                <p>
                Last years team did a great job starting off this project. One of their first
                steps was picking the room to implement this project within.
                </p>
                <img src = {GalleryPhoto} alt='photo of gallery'></img>
                
                <p>
                text 2
                </p>
                <p>
                text 3
                </p>
            </TimelineItem>
        </Timeline> 
        </div>
    );

}

export default PHistory;