import React, { useState, useRef, Fragment } from 'react';
import { Segment, Button } from 'semantic-ui-react'
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
            this.editor.value = this.props.data.content;
            const _this = this;
            document.getElementById('editor').addEventListener('change', function () {
                _this.props.onSave &&
                    _this.props.onSave(_this.props.data.id, this.value);
            })
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.data.content !== prevProps.data.content) {
            this.editor.value = this.props.data.content;
        }
    }
    render() {
        const {onAddNewText, onDeleteText} = this.props;
        return (
            <Fragment>
                <div className={styles.container}>
                <textarea id="editor" name="editor">
                </textarea>
                {
                    this.props.editMode && 
                    <div className={styles.indexContainer}>
                        <Button secondary onClick={onDeleteText} className={styles.nextPrevButton}>מחק טקסט</Button>
                            <div className={styles.indexText}>
                                {`${this.props.hebItemTypeName}: ${this.props.index}`}
                            </div>
                        <Button secondary onClick={onAddNewText} className={styles.nextPrevButton}>הוסף טקסט</Button>
                    </div>
                }
                </div>
            </Fragment>
        );
    }
}

export default TextEditor;
