export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Core3Lab";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Software To Take You Top";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const menuItems = [
  { title: "About Us", href: "/about-us" },
  { title: "Services", href: "/services" },
  {
    title: "Service Models",
    subItems: [
      { title: "Dedicated Team", href: "/services/dedicated-team" },
      { title: "On Demand", href: "/services/on-demand" },
      { title: "Project Based", href: "/services/project-based" },
    ],
  },
  // { title: "Vacancies", href: "/vacancies" },
  // { title: "Our Projects", href: "/our-projects" },
  { title: "Contact Us", href: "/contact-us" },
];
export const mainSlider = [
  { title: "Partner", subTitle: "Solution", href: "/about-us" },
  { title: "Services", href: "/services" },
];

export const signInDefaultValues = {
  email: "admin@example.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Stripe", "CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 12;

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: 0,
  rating: "0",
  numReviews: "0",
  isFeatured: false,
  banner: null,
};

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(", ")
  : ["admin", "user"];

export const reviewFormDefaultValues = {
  title: "",
  comment: "",
  rating: 0,
};

export const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";
