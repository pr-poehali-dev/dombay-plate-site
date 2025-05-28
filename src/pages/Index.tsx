import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const roomTypes = [
    {
      name: "Стандарт",
      price: "от 3 500 ₽",
      description: "Уютный номер с видом на горы",
      features: ["1-2 чел", "Душ", "Wi-Fi", "Завтрак"],
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400",
    },
    {
      name: "Люкс",
      price: "от 6 000 ₽",
      description: "Просторный номер с панорамными окнами",
      features: ["2-3 чел", "Ванна", "Мини-бар", "Балкон"],
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    },
    {
      name: "Семейный",
      price: "от 8 500 ₽",
      description: "Идеальный для семьи с детьми",
      features: ["до 5 чел", "2 комнаты", "Кухня", "Терраса"],
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
    },
  ];

  const amenities = [
    {
      icon: "Mountain",
      title: "Горные маршруты",
      desc: "Организуем походы любой сложности",
    },
    {
      icon: "Utensils",
      title: "Ресторан",
      desc: "Кавказская и европейская кухня",
    },
    { icon: "Wifi", title: "Wi-Fi", desc: "Высокоскоростной интернет везде" },
    { icon: "Car", title: "Парковка", desc: "Бесплатная охраняемая стоянка" },
    {
      icon: "Snowflake",
      title: "Подъемники",
      desc: "5 минут до канатной дороги",
    },
    { icon: "Coffee", title: "Кафе", desc: "Работает круглосуточно" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')",
          }}
        />
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 font-montserrat">
              Гостиница "Домбайская тарелка" 🏔️
            </h1>
            <p className="text-2xl mb-8 opacity-90 leading-relaxed">
              Уютный отель в сердце Домбая с потрясающими видами на Кавказские
              горы
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
                Горнолыжный курорт
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
                Семейный отдых
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
                SPA & Wellness
              </Badge>
            </div>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calendar" className="mr-2" />
              Забронировать номер
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Добро пожаловать в наш отель
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              "Домбайская тарелка" — современный отель в традиционном кавказском
              стиле. Мы предлагаем комфортное размещение, качественный сервис и
              незабываемые впечатления от отдыха в горах.
            </p>
          </div>

          {/* Room Types */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Наши номера
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roomTypes.map((room, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow border-blue-200"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-blue-900">
                        {room.name}
                      </CardTitle>
                      <Badge className="bg-amber-100 text-amber-800">
                        {room.price}
                      </Badge>
                    </div>
                    <CardDescription>{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Удобства и услуги
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow border-blue-100"
                >
                  <CardContent className="p-6">
                    <Icon
                      name={amenity.icon}
                      size={48}
                      className="mx-auto mb-4 text-blue-600"
                    />
                    <h4 className="font-semibold text-blue-900 mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{amenity.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <Icon name="Phone" size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">+7 (928) 123-45-67</p>
                </div>
                <div>
                  <Icon name="Mail" size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">info@dombai-plate.ru</p>
                </div>
                <div>
                  <Icon name="MapPin" size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">Домбай, ул. Горная, 15</p>
                </div>
              </div>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Icon name="MessageCircle" className="mr-2" />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
