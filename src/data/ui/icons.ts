import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

type IconProps = {
  icon: React.ElementType
  link: string
}

export const ICONS: IconProps[] = [
  {
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/prosperitteconsult/',
  },
  {
    icon: IconBrandFacebook,
    link: 'https://www.facebook.com/prosperitteconsult',
  },
  {
    icon: IconBrandWhatsapp,
    link: 'https://api.whatsapp.com/send?phone=5519993273002&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20gostaria%20de%20saber%20mais%20informações!',
  },
]