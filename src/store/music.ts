import { defineStore } from "pinia";
interface music {
  musicId: string;
}
export const useMusic = defineStore("Music", {
  state: (): music => ({
    musicId: "1",
  }),
  actions: {
    setMusicId(id: string) {
      this.musicId = id;
    },
  },
});
