import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Star, CheckCircle, ArrowRight, TrendingUp, Users, Award, Brain, MessageCircle, Instagram } from 'lucide-react'
import './App.css'

// Import images
import authorPhoto from './assets/author_real_photo.jpg'
import igorPhotoNight from './assets/igor_photo_night.jpg'
import luxuryTradingSetup from './assets/luxury_trading_setup.png'
import smartMoneyConcept from './assets/smart_money_concept.png'
import moneyBoostIcon from './assets/money_boost_icon.png'
import ratingStars from './assets/rating_stars.png'
import successStats from './assets/success_stats.png'
import result1 from './assets/result1.png'
import result2 from './assets/result2.png'
import result3 from './assets/result3.jpg'
import result4 from './assets/result4.jpg'
import result5 from './assets/result5.jpg'
import tradingSetupReal from './assets/trading_setup_real.jpg'
import moneyStack from './assets/money_stack.jpg'

function App() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    students: 0,
    success: 0,
    rating: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        students: 1000,
        success: 94,
        rating: 4.8
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const testimonials = [
    {
      name: "Айгуль Нурланова", 
      age: 32,
      text: "Money BOOST стратегия работает! За месяц увеличила депозит в 3 раза. Игорь объясняет сложные вещи простым языком.",
      result: "+$10,730",
      period: "за месяц",
      rating: 5,
      screenshot: result3
    },
    {
      name: "Дмитрий Волков",
      age: 35,
      text: "Наконец-то понял, как работает рынок! Копирование сделок принесло стабильную прибыль. Рекомендую всем!",
      result: "+$2,433",
      period: "за 2 недели", 
      rating: 5,
      screenshot: result4
    },
    {
      name: "Асылбек Жанибеков",
      age: 29,
      text: "Курс изменил мое понимание трейдинга. Smart Money подход дает реальные результаты на криптовалютах.",
      result: "+$4,675",
      period: "за месяц",
      rating: 5,
      screenshot: result5
    },
    {
      name: "Елена Романова",
      age: 26,
      text: "Благодаря методике Money BOOST смогла выйти на стабильную прибыль. Лучший курс по трейдингу!",
      result: "+$2,527",
      period: "за 3 недели",
      rating: 5,
      screenshot: result1
    },
    {
      name: "Арман Касымов",
      age: 31,
      text: "Игорь - настоящий профессионал! Его стратегии работают на любых рынках. Очень доволен результатами.",
      result: "+$5,930",
      period: "за месяц",
      rating: 5,
      screenshot: result2
    }
  ]

  const packages = [
    {
      name: "Начальные знания",
      originalPrice: "250,000",
      price: "39,900",
      installment: "Рассрочка 1,660 тг/мес",
      features: [
        "Основы трейдинга и анализа рынка",
        "Выбор торговой платформы",
        "Фьючерсы и спотовая торговля", 
        "Управление рисками",
        "Базовые индикаторы",
        "Психология трейдинга"
      ],
      popular: false,
      color: "from-slate-900 to-slate-700"
    },
    {
      name: "Полный Пакет",
      subtitle: "Самый популярный выбор",
      originalPrice: "450,000", 
      price: "49,900",
      installment: "Рассрочка 2,080 тг/мес",
      features: [
        "Полный курс Smart Money",
        "Авторская стратегия Money Boost",
        "Манипуляции рынка и зоны ликвидности",
        "Разбор графиков в реальном времени",
        "Стратегии входа и выхода",
        "Контроль эмоций и рисков",
        "Инвестиционные стратегии",
        "Метод Ричарда Вайкоффа",
        "Обратная связь от автора"
      ],
      popular: true,
      color: "from-yellow-600 to-yellow-400"
    },
    {
      name: "VIP Премиум",
      subtitle: "Максимальный результат",
      originalPrice: "750,000",
      price: "299,900", 
      installment: "Рассрочка 12,495 тг/мес",
      features: [
        "Все материалы предыдущих пакетов",
        "5 индивидуальных сессий (Zoom)",
        "Персональный коучинг",
        "Секретные стратегии",
        "Приоритетная поддержка 24/7",
        "Доступ к закрытому VIP чату",
        "Сертификат эксперта"
      ],
      popular: false,
      color: "from-blue-900 to-blue-700"
    }
  ]

  const siteUrl = "https://galtsssovacademy.kz"; // <-- ЗАМЕНИТЕ НА ВАШ РЕАЛЬНЫЙ ДОМЕН

  // Schema для Организации (стандарт 2025 )
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Закрытый Клуб Трейдеров",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.ico`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://t.me/massson_eye"
    },
    "sameAs": [
      "https://t.me/massson_eye",
      "https://www.instagram.com/galtsssov?igsh=MW16ZTB5NGFpMWF3cg%3D%3D&utm_source=qr"
    ],
    "founder": {
      "@type": "Person",
      "name": "Игорь Гальцов"
    }
  };

  // Schema для Продукта/Курса (стандарт 2025 )
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Обучение в Закрытом Клубе Трейдеров: Smart Money и Money BOOST",
    "description": "Освойте концепцию Smart Money и авторскую методику Money BOOST для стабильного заработка на финансовых рынках. Обучение от Игоря Гальцова.",
    "image": `${siteUrl}${luxuryTradingSetup}`,
    "brand": { "@type": "Brand", "name": "Закрытый Клуб Трейдеров" },
    "author": { "@type": "Person", "name": "Игорь Гальцов" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "ratingCount": "1000"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString( ),
        "bestRating": "5"
      },
      "reviewBody": t.text
    })),
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "39900",
      "highPrice": "299900",
      "priceCurrency": "KZT",
      "offers": packages.map(p => ({
        "@type": "Offer",
        "name": p.name,
        "price": p.price.replace(/,/g, ""),
        "priceCurrency": "KZT",
        "url": "https://pay.kaspi.kz/pay/7zwp0oid",
        "availability": "https://schema.org/OnlineOnly"
      } ))
    }
  };

  // Schema для Видео (стандарт 2025)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Презентация Закрытого Клуба Трейдеров",
    "description": "Узнайте, как освоить концепцию Smart Money и авторскую методику Money BOOST.",
    "thumbnailUrl": `${siteUrl}${igorPhotoNight}`,
    "uploadDate": "2025-10-03", // <-- Укажите реальную дату загрузки видео
    "duration": "PT1M30S", // <-- Укажите реальную длительность видео (Пример: 1 минута 30 секунд )
    "contentUrl": `${siteUrl}/hero-video-compressed.mp4`,
    "publisher": {
      "@type": "Organization",
      "name": "Закрытый Клуб Трейдеров",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/favicon.ico`
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900">
      
      {/* =============================================================== */}
      {/* VVV   СКОПИРУЙТЕ И ВСТАВЬТЕ ЭТОТ БЛОК   VVV */}
      {/* =============================================================== */}
      <Helmet>
        <title>Закрытый Клуб Трейдеров | Обучение Smart Money и Money BOOST</title>
        <meta name="description" content="Присоединяйтесь к эксклюзивному клубу трейдеров Игоря Гальцова. Освойте рабочие стратегии Smart Money и Money BOOST, чтобы выйти на стабильный доход." />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      </Helmet>
      {/* =============================================================== */}
      {/* ^^^   КОНЕЦ БЛОКА ДЛЯ ВСТАВКИ   ^^^ */}
      {/* =============================================================== */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2 mx-auto lg:mx-0 w-fit">
                <TrendingUp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Эксклюзивное обучение
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Закрытый Клуб Трейдеров
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Освойте концепцию <span className="text-yellow-400 font-semibold">Smart Money</span> и авторскую методику 
                <span className="text-yellow-400 font-semibold"> Money BOOST</span>. Более 1000 успешных учеников уже зарабатывают стабильно на финансовых рынках.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* ИСПРАВЛЕННАЯ КНОПКА "ЗАПИСАТЬСЯ" */}
                <a href="#packages" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                    Записаться <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                {/* КНОПКА "СВЯЗЬ С АВТОРОМ" ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ */}
                <a href="https://t.me/massson_eye" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg">
                    Связь с автором
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Успешных учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{animatedNumbers.success}%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Показывают прибыль</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">4.8/5</div>
                  <div className="text-xs sm:text-sm text-gray-400">Рейтинг курса</div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 blur-3xl"></div>
              <video 
                src="/hero-video-compressed.mp4"
                autoPlay
                controls
                loop
                playsInline
                preload="metadata"
                className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-2xl border border-yellow-400/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-slate-950/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-yellow-400/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-sm sm:text-base text-gray-300">Успешных учеников</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-yellow-400/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">94%</div>
                <div className="text-sm sm:text-base text-gray-300">Показывают прибыль</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-yellow-400/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <Star className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-sm sm:text-base text-gray-300">Рейтинг курса</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Club Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-black/80 to-slate-950/80">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-4 sm:mb-6">
              Ваш путь к финансовой независимости начинается здесь
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Закрытый Клуб Трейдеров — это не просто обучение, это эксклюзивное сообщество, где вы получите доступ к уникальным методикам и поддержке, которые приведут вас к стабильной прибыли.
            </p>
          </div>

          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-8 sm:mb-12 px-4">
              Почему вступить в клуб — это выгодно?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-400/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Копирование сделок</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Если у вас нет времени на обучение, просто повторяйте мои сделки, которые я публикую в канале. Это мгновенный доступ к прибыли без глубокого погружения.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-400/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Разбор реальных кейсов</h4>
                  <p className="text-gray-300 text-sm">
                    Изучайте успешные сделки, анализируйте ошибки и повышайте свой уровень на примерах из реального рынка. Это бесценный опыт, который вы не получите нигде больше.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-400/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Актуальные торговые стратегии</h4>
                  <p className="text-gray-300 text-sm">
                    Вы получите доступ к проверенным стратегиям, адаптированным под текущие рыночные условия. Мы не используем устаревший технический анализ.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-yellow-400/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Постоянная поддержка</h4>
                  <p className="text-gray-300 text-sm">
                    Задавайте вопросы и получайте обратную связь от профессионалов. Ваше развитие будет ускорено благодаря коллективному опыту.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-yellow-400/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Эксклюзивный доступ</h4>
                <p className="text-gray-300">
                  Ограниченное количество участников для персонального подхода и сохранения ценности информации.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-yellow-400/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Сообщество единомышленников</h4>
                <p className="text-gray-300">
                  Общайтесь с мотивированными трейдерами, делитесь опытом и получайте поддержку.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-yellow-400/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Профессиональная торговая установка</h4>
                <p className="text-gray-300">
                  Получите доступ к актуальным стратегиям, адаптированным под текущие рыночные условия.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Mentor Section */}
      <section className="py-20 bg-gradient-to-r from-slate-950/80 to-blue-950/80">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 blur-3xl"></div>
              <img 
                src={igorPhotoNight} 
                alt="Игорь Гальцов" 
                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl border border-yellow-400/20"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold">
                О наставнике
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                <span className="text-yellow-400">Игорь Гальцов</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Я не везунчик, который сразу начал зарабатывать миллионы на трейдинге. Если шагать еще немного назад, то я родился в совершенно обычной семье, пол жизни работал в общепите - кальянщиком, официантом.
                </p>
                <p>
                  В общей сложности первые 2 года торговли я стабильно сливал деньги на рынке. Конечно бывали и такие случаи что иногда получалось что то да заработать с рынка, но чаще всего - нет.
                </p>
                <p>
                  Я начал хорошо и прилично зарабатывать только последние 4 года, всего лишь благодаря одному инструменту - который кстати сам вывел. Это авторская стратегия <span className="text-yellow-400 font-semibold">Money BOOST</span> и концепция <span className="text-blue-400 font-semibold">Smart Money</span>.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-semibold text-white">Опыт в торговле: более 6 лет</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Boost Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold">
                <TrendingUp className="mr-2 h-4 w-4" />
                Авторская методика
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Методика <span className="text-yellow-400">Money BOOST</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Уникальная авторская стратегия, разработанная на основе многолетнего опыта и анализа поведения крупных игроков рынка.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-gray-300">Работает на любых рынках и таймфреймах</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-gray-300">Минимизирует риски и максимизирует прибыль</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-gray-300">Подходит для начинающих и опытных трейдеров</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={moneyBoostIcon} 
                alt="Money BOOST методика" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Money Section */}
      <section className="py-20 bg-gradient-to-r from-blue-950/50 to-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
              Что такое Smart Money?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              95% людей торгует по безнадежному и старому техническому анализу. И эта же масса людей терпит убытки в трейдинге.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">Smart Money</span> - это концепция, которая учит понимать психологию и действия крупных игроков: банков, хедж-фондов, институциональных инвесторов.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Вместо устаревших уровней и треугольников, вы научитесь видеть зоны ликвидности, манипуляции рынка и структуру движения цены.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <h3 className="font-semibold text-white">Психология крупных игроков</h3>
                  <p className="text-gray-400">Изучите, как думают и действуют институциональные инвесторы</p>
                </div>
                <div className="space-y-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <h3 className="font-semibold text-white">Распознавание манипуляций</h3>
                  <p className="text-gray-400">Научитесь видеть ловушки маркетмейкеров и избегать их</p>
                </div>
                <div className="space-y-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <h3 className="font-semibold text-white">Зоны ликвидности</h3>
                  <p className="text-gray-400">Определяйте точки входа и выхода как профессионалы</p>
                </div>
                <div className="space-y-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <h3 className="font-semibold text-white">Структура рынка</h3>
                  <p className="text-gray-400">Понимание фаз рынка и действий крупного капитала</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>
              <img 
                src={tradingSetupReal} 
                alt="Профессиональная торговая установка" 
                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl border border-blue-400/20"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-400/40 rounded-2xl p-8 mb-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-red-400">
                ⚠️ Важная информация
              </h3>
              <h4 className="text-2xl font-bold text-white">
                Почему технический анализ не работает?
              </h4>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <p>
                  95% людей торгует по безнадежному и старому техническому анализу. И эта же масса людей терпит убытки в трейдинге.
                </p>
                <p>
                  Я больше скажу, существуют целые школы и самые настоящие гуру трейдеры которые обучают тех анализу, тем самым плодя заведомо убыточных трейдеров.
                </p>
                <p>
                  <span className="text-red-400 font-semibold">Уровни, треугольники, фигуры, каналы</span> это все устаревшие модели анализа, которые в наше время не принесут ничего - кроме убытков.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 blur-3xl"></div>
              <img 
                src={moneyStack} 
                alt="Результаты Smart Money" 
                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl border border-yellow-400/20"
              />
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">
                Звучит как <span className="text-yellow-400">теория заговора?</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Но так оно и есть! Подумай, почему основная масса трейдеров теряют свои деньги на финансовых рынках? 
                </p>
                <p>
                  <span className="text-blue-400 font-semibold">Smart Money</span> дает ответы.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-blue-400" />
                  <h4 className="text-2xl font-bold text-blue-400">Откройте глаза на правду</h4>
                </div>
                <p className="text-gray-300 text-lg">
                  Перестаньте быть частью 95% убыточных трейдеров. Изучите логику крупных игроков и начните зарабатывать как они.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Training Section */}
      <section className="py-20 bg-gradient-to-r from-slate-950 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-6">
              Чем мое обучение отличается от других?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Факты, которые делают мое обучение уникальным и гарантируют ваш успех
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-400/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Актуальные знания для стабильной прибыли</h3>
                <p className="text-gray-300 text-sm">
                  Курс основан на проверенных стратегиях для прибыльной торговли с нуля. Это не устаревший теханализ, а практические методики крупных игроков рынка.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-400/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Быстрый рост даже с малым депозитом</h3>
                <p className="text-gray-300 text-sm">
                  Специальные стратегии для учеников с небольшим стартовым капиталом. Эффективно увеличивайте депозит до значительных размеров в кратчайшие сроки.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-yellow-400/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Уникальная методика Money BOOST</h3>
                <p className="text-gray-300 text-sm">
                  Методика не имеет аналогов в открытых источниках. Высокая эффективность на криптовалютных рынках и Форекс. Возможность кратного увеличения баланса.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-400/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Сложное — простым языком</h3>
                <p className="text-gray-300 text-sm">
                  Мои уроки объясняют все до мелочей. Ученики, разочарованные другими курсами, находят здесь ясность и результат.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/50 to-red-800/50 border-red-400/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ценность информации, а не маркетинг</h3>
                <p className="text-gray-300 text-sm">
                  99% трейдеров обучают устаревшему. Мой курс — это актуальные знания, которые не найти у псевдо-трейдеров или на YouTube. Не тратьте время и деньги на бесполезное обучение.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 border-indigo-400/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Информация, которой нет у других</h3>
                <p className="text-gray-300 text-sm">
                  Мое обучение состоит из УНИКАЛЬНОЙ, АКТУАЛЬНОЙ И РАБОЧЕЙ информации, собранной по крупицам из мировых источников. В СНГ аналогов нет.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-400/50 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-red-400 mb-4">
              Хватит терять деньги на устаревших методиках!
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
              Я даю работающие инструменты, которые приносят реальную прибыль. Более 1000 учеников - это не случайность, а результат качественного и честного подхода к обучению.
            </p>
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 border border-yellow-400/30 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="h-8 w-8 text-yellow-400" />
                <h4 className="text-2xl font-bold text-yellow-400">Гарантия результата</h4>
              </div>
              <p className="text-gray-300">
                Следуйте моим методикам, и вы обязательно увидите положительные изменения в своей торговле
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Отзывы наших <span className="text-yellow-400">учеников</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">Реальные результаты на реальных торговых счетах</p>
            <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-400/30 rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-yellow-400 mb-2">
                Общий доход учеников: $850,000+
              </p>
              <p className="text-gray-300">
                Это лишь малая часть отзывов. Все ученики торгуют и показывают результаты на реальных счетах - никаких демо-версий!
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-yellow-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {testimonial.screenshot && (
                    <div className="mb-4">
                      <img 
                        src={testimonial.screenshot} 
                        alt={`Результат ${testimonial.name}`}
                        className="w-full rounded-lg border border-green-400/30 shadow-lg"
                      />
                      <div className="text-center mt-2">
                        <Badge className="bg-green-500/20 text-green-400 border-green-400/30">
                          Реальный торговый счет
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.age} лет</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-400 text-lg">{testimonial.result}</div>
                        <div className="text-sm text-gray-400">{testimonial.period}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
<section id="packages" className="py-20 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Выберите свой <span className="text-yellow-400">пакет обучения</span>
            </h2>
            <p className="text-xl text-gray-300">Инвестируйте в свое финансовое будущее</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 ${pkg.popular ? 'border-yellow-400 scale-105' : 'border-gray-600'} bg-gradient-to-br from-slate-800 to-slate-700`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-center py-2 font-bold">
                    🔥 ПОПУЛЯРНЫЙ ВЫБОР
                  </div>
                )}
                <CardHeader className={pkg.popular ? 'pt-12' : 'pt-6'}>
                  <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                  {pkg.subtitle && (
                    <div className="text-yellow-400 font-semibold">{pkg.subtitle}</div>
                  )}
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400 line-through">{pkg.originalPrice} Тенге</div>
                    <div className="text-4xl font-bold text-yellow-400">{pkg.price} <span className="text-lg text-gray-300">тенге</span></div>
                    <div className="text-sm text-gray-400">{pkg.installment}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href="https://pay.kaspi.kz/pay/7zwp0oid" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black' : 'bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white'} font-bold py-3`}>
                      Занять место
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">Закрытый Клуб Трейдеров</h3>
              <p className="text-gray-400">
                Освойте концепцию Smart Money и авторскую методику Money BOOST
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Контакты</h4>
              <div className="space-y-3">
                <a href="https://t.me/massson_eye" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  Telegram
                </a>
                <a href="https://www.instagram.com/galtsssov?igsh=MWZ1ZTB5NGFpMWF3cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Быстрые действия</h4>
              <div className="space-y-3">
                <a href="https://t.me/massson_eye" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black font-bold">
                    Другой способ оплаты
                  </Button>
                </a>
                <a href="https://pay.kaspi.kz/pay/7zwp0oid" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    Оплатить курс
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Закрытый Клуб Трейдеров. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
