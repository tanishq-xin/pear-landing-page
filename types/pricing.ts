import { User } from "@supabase/supabase-js";

export interface PricingTierProps {
  title: string;
  price: string;
  prevPrice?: string;
  description: string;
  features?: string[];
  buttonText?: string;
  isFree?: boolean;
  priceId?: string;
  user: User | null;
  waitlistAccess?: boolean;
  isWaitlistInfoLoading?: boolean;
  index: number;
}

export interface PricingPageProps {
  user: User | null;
}

export type PricingTierData = Omit<PricingTierProps, "user">;
