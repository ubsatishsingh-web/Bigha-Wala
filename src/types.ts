export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface QuickLinkItem {
  id: string;
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  icon: string;
  externalUrl?: string;
  modalType?: "dakhil_kharij" | "registry_rate" | "jamabandi" | "lpc" | "ai_expert";
}
