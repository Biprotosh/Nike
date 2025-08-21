// Navigation
export type  NavLink = {
  href: string;
  label: string;
}

// Shoes
export type  Shoe = {
  thumbnail: string;
  bigShoe: string;
}

// Statistics
export type  Statistic = {
  value: string;
  label: string;
}

// Products
export type  Product = {
  imgURL: string;
  name: string;
  price: string;
}

// Services
export type  Service = {
  imgURL: string;
  label: string;
  subtext: string;
}

// Reviews
export type  Review = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

// Footer
export type  FooterLinkItem = {
  name: string;
  link: string;
}

export type  FooterSection = {
  title: string;
  links: FooterLinkItem[];
}

// Social media
export type  SocialMedia = {
  src: string;
  alt: string;
}
