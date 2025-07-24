import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              ברוכים הבאים ל-
              <span className="text-primary-600">שם העסק</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              תיאור קצר ומושך על העסק או השירות שלכם.
              הדגישו את היתרונות העיקריים שלכם.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg">התחילו עכשיו</Button>
              <Button size="lg" variant="outline">
                למידע נוסף
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            למה לבחור בנו?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">
            מוכנים להתחיל?
          </h2>
          <p className="mb-8 text-xl">
            צרו איתנו קשר עוד היום ונשמח לעזור לכם
          </p>
          <Button size="lg" variant="secondary">
            צרו קשר
          </Button>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: '🚀',
    title: 'מהירות וביצועים',
    description: 'האתר שלכם יטען במהירות הבזק בזכות הטכנולוגיות המתקדמות ביותר',
  },
  {
    icon: '🎨',
    title: 'עיצוב מותאם אישית',
    description: 'עיצוב ייחודי שמותאם בדיוק לצרכים ולמותג שלכם',
  },
  {
    icon: '📱',
    title: 'תמיכה מלאה במובייל',
    description: 'האתר שלכם ייראה ויעבוד מצוין בכל מכשיר ובכל גודל מסך',
  },
];