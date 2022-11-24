import { defineComponent, ref } from "vue";
import style from "./Header.module.less";
const Header = defineComponent({
  setup() {
    let searchInput = ref<string>("");
    return () => (
      <div class={style.header}>
        <el-row>
          <el-col span={5}>
            <div class={style.logo}>
              <span class={style.icon}></span>
              <h1 class={style.text}>DS Music</h1>
            </div>
          </el-col>
          <el-col span={8}>
            <div class={style.serachinput}>
              <el-input size="small" clearable placeholder="Please input" v-model={searchInput.value} />
            </div>
          </el-col>
        </el-row>


      </div>
    );
  },
});
export default Header;
