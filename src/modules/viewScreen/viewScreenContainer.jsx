import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ViewScreen from './viewScreen';

class ViewScreenContainer extends Component {

    constructor(props) {
        super(props);
        this.loadDataSource = this.loadDataSource.bind(this);
        this.onSaveText=this.onSaveText.bind(this);
        this.onAddNewText = this.onAddNewText.bind(this);
        this.onDeleteText = this.onDeleteText.bind(this);
        this.onAddNewImage = this.onAddNewImage.bind(this);
        this.onDeleteImage = this.onDeleteImage.bind(this);
        this.onEditImageClick = this.onEditImageClick.bind(this);
        this.state = {
            leftMessages: [{
                id: 'l1',
                value: 'הודעה בצד שמאל'
            }, {
                id: 'l2',
                value: 'הודעה מעניינת בצד שמאל'
            }, {
                id: 'l3',
                value: 'הודעה חשובה בצד שמאל'
            }],
            centerMessages: [{
                id: 'c1',
                value: 'הודעה באמצע'
            }, {
                id: 'c2',
                value: 'הודעה מעניינת באמצע'
            }, {
                id: 'c3',
                value: 'הודעה חשובה באמצע'
            }],
            rightMessages: [{
                id: 'r1',
                value: 'הודעה בצד ימין'
            }, {
                id: 'r2',
                value: 'הודעה מעניינת בצד ימין'
            }, {
                id: 'r3',
                value: 'הודעה חשובה בצד ימין'
            },
            ],
            images: ['https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'],
            texts: [{
                id: Math.random(),
                content:'<span style="color: blue">var</span> foo = <span style="color: green">"bar"</span>;',
                direction: 'ltr'
            },{
                id: Math.random(),
                content:`ממתק לפרשת נח🔥

                איציק למד בישיבה בארץ או יותר נכון ישב בישיבה כי כמעט לא למד, יום אחד פנה ראש הישיבה אל איציק ואמר לו ״בעוד יומיים ייערך מבחן ואם לא תקבל ציון טוב לא תוכל להמשיך לבזבז את זמנך כאן בישיבה"", איציק פנה לחבר וביקש ממנו שירשה לו להעתיק ממנו במבחן, החבר אמר לו ""אני מסכים בתנאי שנלמד בלילה את כל החומר של המבחן כדי שתתמצא קצת בחומר ותדע במה מדובר''. 
                
                בלילה ישבו שניהם במשך כמה שעות ולמדו את כל הגמרא, ולמחרת במבחן כמעט ולא היה לאיציק צורך להעתיק כי די ידע את החומר, המורה שבדק את המבחנים נדהם לראות שאיציק ענה יפה על כל השאלות ונתן לו ציון 100, למחרת הגיע לכיתה ושאל את איציק ״איך עשית את זה?״ איציק ענה ""למדתי בלילה עם החבר את כל החומר.''
                המורה נכנס לכתה ואמר לכל התלמידים ""תדעו לכם שאיציק הוא אחד התלמידים הכי מוצלחים כאן בכתה"" פניו של איציק אורו, המילים הטובות של המורה רוממו את רוחו ומאותו יום איציק החל להשתתף בשיעורים, ללמוד בהתמדה והפך להיות באמת אחד הבחורים הטובים בישיבה, ב""ה כיום איציק מכהן כרב בעיר גדולה בעולם.
                
                פרשת השבוע פרשת נח פותחת במילים ״אלה תולדות נח״ וממשיכה נוח איש צדיק תמים וכו'.
                
                נשאלת השאלה אם התורה רוצה לספר על תולדותיו של נח למה התורה מספרת על כך שהיה צדיק תמים וכו?
                
                רש""י מסביר ""הואל והזכירו סיפר בשבחו"" אבל אם כך למה בפרשה הקודמת כשהתורה מספרת לנו על לידתו של נוח לא כתוב שהיה צדיק ולמה דווקא כאן מזכירים זאת?
                
                מוסבר בתורת החסידות, כתוב שכשמדברים על אדם לשון הרע גורמים לו נזק כי עצם הדיבור הרע שאומרים עליו יוצר לו אנרגיה שלילית, מזה אנחנו יכולים ללמוד שכשמדברים טוב על אדם זה נותן לו כוח ואנרגיה חיובית, בפרשתינו נוח עומד בפני משימה קשה לבנות תיבה ולעמוד מול כל אנשי דורו החטאים מבלי ללמוד ממעשיהם ומבלי ליפול, עכשיו כשנוח צריך כוח מיוחד מדברת התורה בשבחו כדי לתת לו את הכוח הנדרש.
                
                יהי רצון שנלמד לדבר אחד על השני רק טוב, כך ניתן כוחות אחד לשני ונוכל לעמוד במשימות שהקב""ה מציב בפנינו עד להשלמת העולם לקראת גאולה שלימה שתבוא בקרוב ממש.
                
                לשון הרע לא מדבר אלי!
                
                שבת שלום👍🏻
                נכתב ע""י הרב נחמיה וילהלם.
                `,
                direction: 'rtl'
            }]
        };
    }
    loadDataSource(event) {
        const file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (evt) => {
                this.setState(JSON.parse(evt.target.result));
            }
            reader.onerror = (evt) => {
                console.log("error reading file");
            }
        }
    }
    onAddNewText() {
        let texts = this.state.texts;
        const newId = Math.random().toString();
        texts.push({id: newId, content:''});
        this.setState({texts: texts, currentText: texts.length-1});
    }
    onDeleteText() {

    }
    onSaveText(id, content){
        let texts = this.state.texts;
        const foundIdIndex = texts.findIndex(item => item.id === id);
        if(foundIdIndex > -1) {
            texts[foundIdIndex].content = content;

        } else {
            const newId = Math.random().toString();
            texts.push({id: newId, content:content});
        }
        
        this.setState({texts:texts});
    }
    onEditImageClick() {

    }
    onAddNewImage() {

    }
    onDeleteImage() {

    }
    render() {
        return (
                <ViewScreen editMode={this.props.editMode}
                            loadDataSource={this.loadDataSource}
                            gotoEditScreen={() => this.props.gotoEditScreen()}
                            gotoViewScreen={() => this.props.gotoViewScreen()}
                            dataStore={this.state}
                            onSaveText={this.onSaveText}
                            onAddNewText={this.onAddNewText}
                            onDeleteText={this.onDeleteText}
                            onAddNewImage={this.onAddNewImage}
                            onDeleteImage={this.onDeleteImage}
                            onEditImageClick={this.onEditImageClick}/>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    gotoViewScreen: () => push('/'),
    gotoEditScreen: () => push('/EditScreen')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(ViewScreenContainer)
