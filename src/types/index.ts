import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

// Navigation
export type TNavLink = {
  href: string;
  label: string;
}

// Shoes
export type TShoe = {
  thumbnail: string;
  bigShoe: string;
}

// Statistics
export type TStatistic = {
  value: string;
  label: string;
}

// Products
export type TProduct = {
  imgURL: string;
  name: string;
  price: string;
}

// Services
export type TService = {
  imgURL: string;
  label: string;
  subtext: string;
}

// Reviews
export type TReview = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

// Footer
export type TFooterLinkItem = {
  name: string;
  link: string;
}

export type TFooterSection = {
  title: string;
  links: TFooterLinkItem[];
}

// Social media
export type TSocialMedia = {
  src: string;
  alt: string;
}

// Button Component
export type TButtonProps = {
  label: string;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Shoecard Pop type
export type TShoeCardProps = {
  img: string,
  changeBigShoeImg: (changed: string) => void,
  bigShoeImg: string
}