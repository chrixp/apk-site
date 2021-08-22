import React, { useRef, useState } from 'react'
import PlaceHolder from '@images/placeholder.png'
import { Link } from 'react-router-dom'
import useVisibilitySensor from "@rooks/use-visibility-sensor"
import AmazonCard from '@images/amazon-card.gif'

const TileContainer = (props) => {
    const rootNode = useRef(null)
    const { isVisible } = useVisibilitySensor(rootNode, {
        shouldCheckOnMount: false,
        scrollCheck: true,
        partialVisibility: true,
        scrollThrottle: 0,
        minTopValue: 120
  
      })
    let titleContainerClasses = "tile-container"
    if(isVisible) {
        titleContainerClasses += " tile-container-visible"
    }
    return (
        <div ref={rootNode} className={titleContainerClasses}>
            <h2 className="tile-title">{props.title}</h2>
            <div className="tile-body">
                {props.tiles.map(({ title, desc, pic, dest }) => (
                    <Link to={dest} className="tile-image-container">
                        <img className="tile-image" src={pic} />
                        <div className="tile-image-info">
                            <h3 className="tile-image-info-title">{title}</h3>
                            <p className="tile-image-desc">{desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <style jsx>{`
                .tile-container {
                    margin-top: 15px;
                    display: flex;
                    flex-direction: column;
                    background-color: black;
                    padding: 0 48px;
                    padding-bottom: 15px;
                    opacity: 0.3;
                    transform: scale(0.93);
                    transition: 0.3s;
                }
                .tile-container-visible {
                    opacity: 1;
                    transform: none;
                }
                .tile-body {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;

                }
                .tile-image-container {
                    position: relative;
                    background: white;
                    margin: 10px;
                    width: 45%;
                    min-width: 250px;
                    
                }
                .tile-image-container:hover {
                    cursor: pointer;
                }
                .tile-image-container:hover > .tile-image {
                    opacity: 1;
                }
                .tile-image-container:hover .tile-image-desc {
                    background-color: white;
                }
                .tile-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0;
                }
                .tile-image-info {
                    box-sizing: border-box;
                    padding: 32px;
                    bottom: 0;
                    left: 0;
                    transition: 0.5s ease-in;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-start;
                    flex-direction: column;
                    font-family: SecondaryFont;
                }
                .tile-image-info-title {
                    margin: 0;
                    color: #828282;
                }
                .tile-title {
                    font-family: PrimaryBold;
                    color: white;
                    font-weight: 100;
                    margin-top: 60px;
                    font-size: 40px;
                    margin-bottom: 20px;
                }
                .tile-image-desc {
                    font-family: PrimaryBold;
                    color: black;
                    font-size: 24px;
                    font-weight: 500;
                }
            `}    
            </style>
        </div>
    )
}

export default TileContainer

