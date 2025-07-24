# Next.js Client Template

תבנית בסיסית לפרויקטים של לקוחות עם Next.js 15.4+ 🚀

## פיצ'רים עיקריים

- ⚡ **Next.js 15.4.1** - הגרסה העדכנית ביותר
- 🏎️ **Turbopack** - מהירות פיתוח משופרת
- ⚛️ **React 19** - תמיכה מלאה
- 🎨 **Tailwind CSS 3.4** - עיצוב מודרני
- 📱 **Responsive Design** - תמיכה בכל המכשירים
- 🇮🇱 **תמיכה מלאה בעברית (RTL)**
- 🔧 **TypeScript 5.6** - טיפוסים חזקים
- 📏 **ESLint + Prettier** - קוד נקי ואחיד
- 🧩 **קומפוננטות UI בסיסיות**
- 🎯 **SEO Optimized**
- 📂 **מבנה תיקיות מסודר**

## התחלה מהירה

1. **צור פרויקט חדש מה-template:**
   ```bash
   # שיטה 1: דרך GitHub
   gh repo create client-name --template your-username/nextjs-client-template --clone
   
   # שיטה 2: Clone ידני
   git clone https://github.com/your-username/nextjs-client-template.git client-name
   cd client-name
   rm -rf .git
   git init

התקן dependencies:
bashnpm install

הגדר Environment Variables:
bashcp .env.example .env.local
# ערוך את .env.local עם הערכים שלך

הרץ את הפרויקט עם Turbopack:
bashnpm run dev
# הפרויקט ירוץ על http://localhost:3000


Scripts זמינים
bashnpm run dev          # פיתוח עם Turbopack
npm run build        # בנייה לפרודקשן
npm run start        # הרצת פרודקשן
npm run lint         # בדיקת קוד
npm run format       # פרמוט אוטומטי
npm run type-check   # בדיקת TypeScript
npm run check-all    # הרצת כל הבדיקות
npm run clean        # ניקוי cache ו-node_modules
מבנה הפרויקט
src/
├── app/              # App Router - דפים ו-layouts
├── components/       # קומפוננטות משותפות
│   ├── ui/          # קומפוננטות UI בסיסיות
│   ├── layout/      # Header, Footer, Navigation
│   └── common/      # קומפוננטות כלליות
├── lib/             # פונקציות עזר וקבועים
├── hooks/           # Custom React hooks
└── types/           # TypeScript types
התאמה אישית
1. עדכון פרטי הלקוח

ערוך lib/constants.ts עם פרטי הלקוח
החלף את הלוגו ב-components/layout/Header.tsx
עדכן package.json עם שם הפרויקט

2. התאמת עיצוב

צבעים: tailwind.config.ts
פונטים: app/layout.tsx
סגנונות גלובליים: app/globals.css

3. הוספת דפים
bashsrc/app/
├── page.tsx         # דף הבית
├── about/
│   └── page.tsx     # דף אודות
└── (marketing)/     # קבוצת דפים
    ├── layout.tsx   # Layout משותף
    └── services/
        └── page.tsx
פריסה ל-Production
Vercel (מומלץ)

Push ל-GitHub
Import ב-Vercel
הגדר Environment Variables
Deploy! 🚀

דרישות מערכת

Node.js 18.17 ומעלה (מומלץ 20+)
npm 9 ומעלה


נבנה עם ❤️ עבור מפתחים ישראלים