import { Component } from 'react'
import flecheLeft from '../../assets/fleche-left.svg';
import flecheRight from '../../assets/fleche-right.svg';
import "./sliderdisplay.css"


class SliderDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0 // Initialisez l'index à 0 pour afficher la première image
        };
    }

    onNextSlide() {
        const { logementData } = this.props;
        const { currentImageIndex } = this.state;
        // Si l'index actuel est égal à l'index de la dernière image, revenez au début
        if (currentImageIndex === logementData.pictures.length - 1)
            this.setState({ currentImageIndex: 0 });
        else
            this.setState({ currentImageIndex: currentImageIndex + 1 });
    }

    onPrevSlide() {
        const { logementData } = this.props;
        const { currentImageIndex } = this.state;
        // Si l'index actuel est égal à 0, passez à la dernière image
        if (currentImageIndex === 0)
            this.setState({ currentImageIndex: logementData.pictures.length - 1 });
        else
            this.setState({ currentImageIndex: currentImageIndex - 1 });
    }

    render() {
        const { logementData } = this.props;
        const { currentImageIndex } = this.state;

        return (
            <div className="slider">
                <div className="slider-window">
                    {/* Flèches gauche et droite */}
                    <img src={flecheRight} alt="fleche next" className="arrow-right" onClick={() => this.onNextSlide()} />
                    <img src={flecheLeft} alt="fleche previous" className="arrow-left" onClick={() => this.onPrevSlide()} />

                    {/* Indicateur de longueur et de position */}
                    <p className="length-indicatif">{currentImageIndex + 1}/{logementData.pictures.length}</p>
                    {/* Affichage de l'image en cours */}
                    <div className="slider-derouler" id="slider-derouler-id">
                        <img src={logementData.pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="imageSlider" />
                    </div>
                </div>
            </div>
        );
    }
}


export default SliderDisplay;