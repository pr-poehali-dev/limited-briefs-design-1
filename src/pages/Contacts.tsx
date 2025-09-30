import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card className="p-8 border-0 shadow-lg h-full">
                <h2 className="font-playfair text-2xl font-bold mb-6">Напишите нам</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, чем мы можем вам помочь" 
                      rows={5}
                      className="border-2"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                    <Icon name="Send" className="mr-2 w-5 h-5" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Card className="p-8 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="MapPin" className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Адрес шоу-рума</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Пречистенка, д. 12<br />
                      <span className="text-sm">По предварительной записи</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="Phone" className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67<br />
                      <span className="text-sm">Ежедневно с 10:00 до 20:00</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Icon name="Mail" className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@luxurycollection.ru<br />
                      <span className="text-sm">Ответим в течение 24 часов</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-primary via-zinc-900 to-primary text-primary-foreground">
                <h3 className="font-playfair text-xl font-semibold mb-4">Социальные сети</h3>
                <div className="flex space-x-4">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Instagram" className="w-5 h-5" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Facebook" className="w-5 h-5" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Icon name="Twitter" className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Clock" className="w-12 h-12 mx-auto mb-4 text-secondary" />
          <h2 className="font-playfair text-3xl font-bold mb-4">График работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <p className="font-semibold mb-2">Понедельник - Пятница</p>
              <p className="text-muted-foreground">10:00 - 20:00</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Суббота - Воскресенье</p>
              <p className="text-muted-foreground">11:00 - 19:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;