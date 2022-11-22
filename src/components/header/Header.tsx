import { defineComponent, ref } from "vue";
import style from "./Header.module.less";
const Header = defineComponent({
  setup() {
    let searchInput = ref<string>("");
    return () => (
      <div class={style.header}>
        <div class={style.logo}>
          <span class={style.icon}></span>
          <h1 class={style.text}>DS Music</h1>
        </div>
        <div class={style.serachinput}>
          <el-input placeholder="Please input" v-model={searchInput.value} />
        </div>
      </div>
    );
  },
});
export default Header;
