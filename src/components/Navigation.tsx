import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import CartSheet from './CartSheet';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Главная' },
    { path: '/catalog', label: 'Каталог' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Crown" className="w-6 h-6" />
            <span className="font-playfair text-2xl font-semibold tracking-tight">BOLSHIE YAYCA</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <CartSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;