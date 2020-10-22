import React, { useState, useRef } from 'react';
import styles from './textEditor.scss';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        this.editor.destruct();
    }
    componentDidMount() {
        if (window.Jodit) {
            this.editor = new window.Jodit("#editor", {
                "spellcheck": false,
                "language": "he",
                "preset": "inline",
                "disabled": !this.props.editMode,
                // "toolbarButtonSize": "large",
                "showCharsCounter": false,
                "showWordsCounter": false,
                "disablePlugins": "about",
                //"buttons": "|,bold,strikethrough,underline,italic,source,|,,ul,ol,,outdent,indent,,font,fontsize,brush,paragraph,|,image,file,video,table,|,align,undo,redo,\n,selectall,cut,copy,paste,|,hr,symbol,fullsize,print,preview,find",
                //"buttonsMD": "bold,image,|,brush,paragraph,\n,align,|,undo,redo,|,dots"
            });
            this.editor.value = this.props.content.content;
        }
    }
    render() {
        return (<textarea id="editor" name="editor"></textarea>);
    }
}

export default TextEditor;
