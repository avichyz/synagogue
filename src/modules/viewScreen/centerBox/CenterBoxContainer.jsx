import ThenPromise from 'promise';
import React, { Component } from 'react';
import CenterBox from './CenterBox';

class CenterBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.onSave=this.onSave.bind(this);
        this.moveToNextItem = this.moveToNextItem.bind(this);
        this.state = {
            images: ['https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'],
            texts: [{
                content:'<span style="color: blue">var</span> foo = <span style="color: green">"bar"</span>;',
                direction: 'ltr'
            },{
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
            }],
            currentImage: null,
            currentText: null,
            currentItemType: null
        };
    }
    moveToNextItem() {
        if (this.state.currentImage===null && this.state.currentText===null) {
            this.setState({ currentImage: 0, currentItemType: "image" });
        } else if (this.state.currentItemType==="text") {
            this.setState({ currentImage: ((this.state.currentImage||0)+1) % this.state.images.length, currentItemType: "image" });
        } else {
            this.setState({ currentText: ((this.state.currentText||0)+1) % this.state.texts.length, currentItemType: "text" });
        }
    }
    onSave(content) {
        let texts = this.state.texts;
        texts.push({content:content});
        this.setState({texts:texts});
    }
    componentDidMount() {
        const interval = setInterval(this.moveToNextItem, 5000);
    }
    render() {
        const { texts, images, currentImage, currentText, currentItemType } = this.state;
        return (
            <CenterBox
                className={this.props.className}
                onSave={this.onSave}
                imgUrl={currentItemType==="image"&&currentImage != null ? images[currentImage] : null}
                textContent={currentItemType==="text"&&currentText != null ? texts[currentText] : null}
            />

        )
    }
}

export default CenterBoxContainer;