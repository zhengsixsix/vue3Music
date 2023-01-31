import { defineStore } from "pinia";
interface music {
  musicId: number;
}
export const useMusic = defineStore("Music", {
  state: (): music => ({
    musicId: 1,
  }),
  actions: {
    setMusicId(id: number) {
      this.musicId = id;
    },
  },
});
