import React, { CSSProperties } from "react";
import SectionCard from "./sectionCard";

function Main(){
    return (
    <div style={rootStyle}>
        <SectionCard title="Forest"/>
        <SectionCard title="Sky"/>
        <SectionCard title="Desert"/>
        
    </div>
    );
}


const rootStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
    background:'#444',
};


export default Main;