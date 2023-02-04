import {create} from 'zustand';
import {persist} from "zustand/middleware"


// global stored state


let store = (set, get) => ({
    safety: 0,
    education: 0,
    environment: 0,
    health: 0,
    setSafety: (safety) => set({safety}),
    setEducation: (education) => set({education}),
    setEnvironment: (environment) => set({environment}),
    setHealth: (health) => set({health})
})

store = persist(store, {name: "globalState"})

export const useGlobalStore = create(store);