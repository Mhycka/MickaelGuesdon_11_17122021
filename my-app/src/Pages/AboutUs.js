import React, { Component } from 'react'
// import aboutUsImg from "../Media/"
import Accordion from '../Components/UnrollElt'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="page-about-us">
                <div className="page-about-us-header">
                    {/* <img src={aboutUsImg} alt="landscape" /> */}
                </div>
                <div className="page-about-us-content">
                    <Accordion title="Fiabilité">
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </Accordion>
                    <Accordion title="Respect">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </Accordion>
                    <Accordion title="Service">
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </Accordion>
                    <Accordion title="Responsabilité">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </Accordion>
                </div>
            </div>
        )
    }
}