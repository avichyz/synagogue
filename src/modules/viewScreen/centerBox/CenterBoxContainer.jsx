import ThenPromise from 'promise';
import React, { Component } from 'react';
import CenterBox from './CenterBox';

class CenterBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.moveToNextItem = this.moveToNextItem.bind(this);
        this.moveToPrevItem = this.moveToPrevItem.bind(this);
        this.moveToPrevImage = this.moveToPrevImage.bind(this);
        this.moveToPrevText = this.moveToPrevText.bind(this);
        this.moveToNextImage = this.moveToNextImage.bind(this);
        this.moveToNextText = this.moveToNextText.bind(this);
        this.onAddNewText = this.onAddNewText.bind(this);
        this.onDeleteText = this.onDeleteText.bind(this);
        this.onAddNewImage = this.onAddNewImage.bind(this);
        this.onDeleteImage = this.onDeleteImage.bind(this);
        this.state = { currentImage: null, currentText: null, currentItemType: null}
    }
    moveToNextItem() {
        if (this.state.currentImage===null && this.state.currentText===null) {
            this.setState({ currentImage: 0, currentItemType: "image" });
        } else if (this.state.currentItemType==="text") {
            this.moveToNextImage();
        } else {
            this.moveToNextText();
        }
    }
    moveToPrevItem() {
        if (this.state.currentImage===null && this.state.currentText===null) {
            this.setState({ currentImage: 0, currentItemType: "image" });
        } else if (this.state.currentItemType==="text") {
            this.moveToPrevImage();
        } else {
            this.moveToPrevText();
        }
    }
    moveToPrevImage() {
        this.setState({ currentImage: this.getPrevIndex(this.state.currentImage, this.props.images.length), currentItemType: "image" });
    }
    moveToPrevText() {
        this.setState({ currentText: this.getPrevIndex(this.state.currentText, this.props.texts.length), currentItemType: "text" });
    }
    moveToNextImage() {
        if (this.state.currentImage===null && this.state.currentText===null) {
            this.setState({ currentImage: 0, currentItemType: "image" });
        } else {
            this.setState({ currentImage: ((this.state.currentImage||0)+1) % this.props.images.length, currentItemType: "image" });
        } 
    }
    moveToNextText() {
        if (this.state.currentImage===null && this.state.currentText===null) {
            this.setState({ currentText: 0, currentItemType: "text" });
        }
         else {
            this.setState({ currentText: ((this.state.currentText||0)+1) % this.props.texts.length, currentItemType: "text" });
        }
    }
    getPrevIndex(currentIndex, arrayLength) {
        if(currentIndex === null) {
            return 0;
        } else if(currentIndex === 0) {
            return (arrayLength - 1);
        } else {
            return currentIndex - 1; 
        }
    }
    onSaveText(id, content) {
        this.props.onSaveText(id, content);
    }
    onAddNewText() {
        this.props.onAddNewText();
        this.moveToNextText();
    }
    onDeleteText() {
        this.props.onDeleteText();
        this.moveToPrevText();
    }
    onAddNewImage() {
        this.props.onAddNewImage();
        this.moveToNextImage();
    }
    onDeleteImage() {
        this.props.onDeleteImage();
        this.moveToPrevImage();
    }
    componentDidMount() {
        this.moveToNextItem();
        if(!this.props.editMode) {
            const interval = setInterval(this.moveToNextItem, 5000);
        } 
    }
    render() {
        const { currentImage, currentText, currentItemType } = this.state;
        const { texts, images } = this.props;
        return (
            <CenterBox
                className={this.props.className}
                onSave={this.props.onSaveText}
                onAddNewText={this.onAddNewText}
                onDeleteText={this.onDeleteText}
                onAddNewImage={this.onAddNewImage}
                onEditImageClick={this.props.onEditImageClick}
                editMode={this.props.editMode}
                onNextItem={this.moveToNextItem}
                onPrevItem={this.moveToPrevItem}
                onPrevImage = {this.moveToPrevImage}
                onPrevText = {this.moveToPrevText}
                onNextImage = {this.moveToNextImage}
                onNextText = {this.moveToNextText}
                hebItemTypeName={currentItemType === "image" ? "תמונה" : "טקסט"}
                index={currentItemType === "image" ? currentImage : currentText}
                imgUrl={currentItemType === "image" && currentImage != null ? images[currentImage] : null}
                textContent={currentItemType === "text" && currentText != null ? texts[currentText] : null}
            />

        )
    }
}

export default CenterBoxContainer;