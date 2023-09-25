import { create } from 'zustand';

interface AnimeState {
    animeData: {} | { any: any | string }
}

export const useAnimeStore = create<AnimeState>(() => ({
    animeData: {}
}));

