import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    //state
    showLoginModal : false,
    
    //actions
    openLoginModal: () => set({showLoginModal : true}),
    closeLoginModal: () => set({showLoginModal : false})
}))