import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
}

function SectionCard(props: Props){
    const url = "/assets/" + props.title + ".jpg";
    return (
        <Link to={"/detail/" + props.title} style={rootStyle(url)}>
            <h2 style={titleStyle}>{props.title}</h2>
        </Link>
    );
}


const rootStyle = (imageSrc: string): CSSProperties => ({
    flex: 1,
    display:"flex",
    backgroundImage: `url(${imageSrc})`,
    backgroundSize:"cover",
    backgroundPosition: "center",
    justifyContent: 'center',
    alignItems:'center',
    textDecoration: "none",
    color: "#111",
});


const titleStyle: CSSProperties = {
    fontSize: "2.2rem",
    textShadow:'0 0 0.5rem #eee',
};

export default SectionCard;