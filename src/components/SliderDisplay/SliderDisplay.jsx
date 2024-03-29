import { Component } from 'react';
import flecheLeft from '../../assets/fleche-left.svg';
import flecheRight from '../../assets/fleche-right.svg';
import "./sliderdisplay.css";

class SliderDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
    }

    onNextSlide() {
        const { logementData } = this.props;
        const { currentImageIndex } = this.state;
        if (currentImageIndex === logementData.pictures.length - 1)
            this.setState({ currentImageIndex: 0 });
        else
            this.setState({ currentImageIndex: currentImageIndex + 1 });
    }

    onPrevSlide() {
        const { logementData } = this.props;
        const { currentImageIndex } = this.state;
        if (currentImageIndex === 0)
            this.setState({ currentImageIndex: logementData.pictures.length - 1 });
        else
            this.setState({ currentImageIndex: currentImageIndex - 1 });
    }

    render() {
        const { logementData } = this.props;
        const { currentImageIndex } = this.state;

        if (logementData.pictures.length === 1) {
            return (
                <div className="slider">
                    <div className="slider-window">
                        <div className="slider-derouler" id="slider-derouler-id">
                            <img src={logementData.pictures[0]} alt={`Image 1`} className="imageSlider" />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="slider">
                <div className="slider-window">
                    <img src={flecheRight} alt="fleche next" className="arrow-right" onClick={() => this.onNextSlide()} />
                    <img src={flecheLeft} alt="fleche previous" className="arrow-left" onClick={() => this.onPrevSlide()} />

                    <p className="length-indicatif">{currentImageIndex + 1}/{logementData.pictures.length}</p>
                    <div className="slider-derouler" id="slider-derouler-id">
                        <img src={logementData.pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="imageSlider" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderDisplay;
