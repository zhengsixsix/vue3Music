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
          <var-input line={false} hint={false} Vmodel={searchInput.value} />
        </div>
      </div>
    );
  },
});
export default Header;
