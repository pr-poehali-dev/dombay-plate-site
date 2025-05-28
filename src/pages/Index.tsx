import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const ingredients = [
    { name: "Баранина", amount: "800г", description: "Молодая, без жил" },
    {
      name: "Картофель",
      amount: "4-5 шт",
      description: "Крупный, рассыпчатый",
    },
    { name: "Лук репчатый", amount: "2 шт", description: "Средний размер" },
    { name: "Морковь", amount: "2 шт", description: "Сочная, сладкая" },
    { name: "Чеснок", amount: "1 головка", description: "Молодой" },
    { name: "Зелень", amount: "пучок", description: "Кинза, укроп, петрушка" },
    {
      name: "Специи",
      amount: "по вкусу",
      description: "Хмели-сунели, лавровый лист",
    },
  ];

  const steps = [
    "Нарезать баранину крупными кусками, обжарить до золотистой корочки",
    "Добавить лук и морковь, тушить 10 минут",
    "Залить водой, добавить специи, тушить 1 час",
    "Добавить картофель, довести до готовности",
    "За 5 минут до готовности добавить чеснок и зелень",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 font-montserrat">
            Домбайская тарелка 🏔️
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Традиционное горское блюдо с богатым вкусом Кавказа — сытное,
            ароматное и согревающее душу кушанье из баранины с овощами
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge className="bg-white/20 text-white border-white/30">
              Кавказская кухня
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              Горячее блюдо
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              На 4-6 порций
            </Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 shadow-lg border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-amber-800 mb-4">
                История блюда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700 text-center">
                Домбайская тарелка — это не просто еда, это целая культура
                горского гостеприимства. Блюдо появилось в высокогорных селениях
                Домбая, где пастухи готовили сытную пищу из того, что было под
                рукой. Секрет вкуса — в медленном томлении на углях и
                использовании особых горных трав.
              </p>
            </CardContent>
          </Card>

          {/* Ingredients */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">
              Ингредиенты
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ingredients.map((ingredient, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow border-amber-100"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-amber-800">
                        {ingredient.name}
                      </h3>
                      <Badge variant="secondary">{ingredient.amount}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {ingredient.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recipe Steps */}
          <Card className="shadow-lg border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 text-center">
                Способ приготовления
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Время приготовления: ~2 часа | Сложность: средняя
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              Попробовать приготовить 👨‍🍳
            </Button>
            <p className="mt-4 text-gray-600">
              Приятного аппетита! Пусть каждая ложка напоминает о величии
              Кавказских гор 🏔️
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
