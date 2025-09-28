import type { Config } from "tailwindcss";

declare module "tailwindcss" {
  interface UserConfig {
    engine?: {
      oxide?: boolean;
    };
  }
}

export type TailwindConfig = Config & {
  engine?: {
    oxide?: boolean;
  };
};
