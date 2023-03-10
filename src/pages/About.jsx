import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="About container">
      <h1>אודות האתר:</h1>
      <br />
      <h3>My Movies:</h3>
      <p>
        {" "}
        האתר מכיל רשימה של 20 הסרטים הפופלריים ביותר כרגע ביותר כרגע לפי נתונים
        שנאספו באינטרנט על ידי אלפי משתמשים
        <br />
        <br />
        בראש האתר יש סרגל ניווט שילווה את המשתמש בכל דף באתר
        <br />
        בסרגל הניווט נוכל לראות:
        <br />- לוגו מצד שמאל (לחיצה על הלוגו מנווטת לדף הבית)
        <br />- במרכז נראה 3 כרטיסיות שמנווטות לדפי האתר{" "}
      </p>
      <br />
      <h3>דף הבית (Movies):</h3>
      <p>
        {" "}
        בדף זה יוכל המשתמש לראות רשימה של הסרטים הפופלריים (הסרטים מוצגים
        בכרטיסייה) <br />
        <br /> בכל כרטיסיה של סרט ניתן לראות: <br />
        - התמונה הראשית של הסרט במרכז
        <br /> - שם הסרט ותאריך יציאה של הסרט בחלק התחתון
        <br />- כפתור הוספה/הסרה ממועדפים בפינה הימנית העליונה של הכרטיסייה
        <br />
        <br /> בלחיצה על הרטיסייה יועבר המשתמש לדף פרטי הסרט
        <br />
        <br />
        בחלק העליון של הדף ישנם 2 כפתורי סינון: <br />- סינון לפי שם הסרט
        <br />- סינון לפי תאריך יציאה של הסרט{" "}
      </p>
      <br />
      <h3>דף פרטי הסרט(בלחיצה על כרטיסייה):</h3>
      <br />
      בחלק העליון של הדף (הכותרת) מוצג שם הסרט
      <br />
      <br />
      במרכז הדף מוצגות 2 תמונות:
      <br />- בצד שמאל תמונה ראשית של הסרט
      <br />- בצד ימין תמונה משנית(תמונה אחורית) של הסרט
      <br />
      <br />
      בחלק התחתון של הדף מוצגים:
      <br />
      - תקציר הסרט
      <br />- תאריך הוצאה של הסרט
      <br />- כפתור להוספה או הסרה ממועדפים
      <br />
      <br />
      <h3>דף מועדפים(Favorites)</h3>
      <br />
      אל דף זה יתווספו כל הסרטים שהמשתמש יסמן כמועדפים
      <br />
      גם דרך דף זה יוכל המשתמש <br />- להוסיף/להסיר ממועדפים
      <br />- לצפות בפרטי הסרט
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
