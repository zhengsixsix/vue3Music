import { defineComponent, onMounted, watch, ref } from 'vue';
import style from "./ButtomControl.module.less";
import { useMusic } from "@/store/music";
const ButtomControl = defineComponent({
  setup() {
    const Music = useMusic()
    const MusicId = Music.$onAction(({ args }) => {
      let [Id] = args
    })
    return () => (
      <div class={style.bottomControl}>
        <audio ref="audioPlayer" autoplay></audio>
        <div class={style.left}>
          <div class={style.avatar}>
            <img src="src/assets/img/test.jpg" alt="" />
          </div>
          <div class={style.musicInfo}>
            <div class={style.musicName}></div>
          </div>
        </div>
      </div>
    );
  },
});
export default ButtomControl;
