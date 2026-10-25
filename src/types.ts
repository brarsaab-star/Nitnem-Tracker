export interface StoreLinks {
  appleAppStore: string;
  googlePlayStore: string;
}

export type ModalType = 'privacy' | 'terms' | 'parental' | 'contact' | 'config-links' | null;

export type LegalTabType = 'privacy' | 'terms' | 'parental';

export type CurrentView = 'home' | 'legal';
