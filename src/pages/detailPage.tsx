import React, { CSSProperties } from "react";

function DetailPage(){
    return (
    <div style={rootStyle}>
        Helloworld
        
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


export default DetailPage;