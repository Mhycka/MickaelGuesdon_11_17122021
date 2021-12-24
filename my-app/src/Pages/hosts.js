import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Host } from '../hostSetup'
import { useParams  } from 'react-router-dom'
import SliderPic from '../Components/elementStlide'
import Rating from '../Components/rateSystem'
import UnrollElt from '../Components/UnrollElt'


export default function HostItem() {
    const [hostElements, setHostElement] = useState()
    const location = useLocation()
    const context = useContext(Host)
    const navigate = useNavigate()
    const params = useParams();

    useEffect(() => {
        if (location.state) setHostElement(location.state)
        else if (context.hostElementss && context.hostElementss.length) {
            const itemFinded = context.hostElementss.find(el => el.id === params.id)
            itemFinded ? setHostElement(itemFinded) : navigate('/404');
        } else context.fetchhostElementss()
    }, [location, context, params, navigate])


    return hostElements ? (
        <div className="hostElements">
            <SliderPic pictures={hostElements.pictures} />
            <div className="hostElementsHeader">
                <div className="hostElementsHeader_1">
                    <h1 className="hostElementsHeader_Title">{hostElements.title}</h1>
                    <p className="hostElementsSecondary_Header">{hostElements.location}</p>
                    <ul className="hostElementsHeader_Tags">
                        { hostElements.tags.map((tag, index) => (
                            <li className="hostElementsHeader_SingleTag" key={`tag-${index}`}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="hostElementsHeader_2">
                    <div className="hostElements_HeaderHost">
                        <div className="hostElements_HeaderHostName">{hostElements.host.name}</div>
                        <div className="hostElements_HeaderHostPicture">
                            <img src={hostElements.host.picture} alt={hostElements.host.name} />
                        </div>
                    </div>
                    <Rating stars={hostElements.rating} />
                </div>
            </div>
            <div className="hostElements_Content">
            <div className="hostElements_ContentDescription">
                    <UnrollElt title="Description">
                        {hostElements.description}
                    </UnrollElt>
                </div>
                <div className="hostElements_ContentEquipments">
                    <UnrollElt title="Équipements">
                        <ul>
                        {hostElements.equipments.map((equipment, index) => (
                            <li key={`equipment-${index}`} className="hostElements_ContentSingleEquipment">
                                {equipment}
                            </li>
                        ))}
                        </ul>
                    </UnrollElt>
                </div>
            </div>
        </div>
    ) : <></>
}