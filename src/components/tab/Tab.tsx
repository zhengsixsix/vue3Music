/*
 * @Author: 王将近
 * @Date: 2022-11-22 18:35:24
 * @LastEditors: 王将近
 * @LastEditTime: 2022-11-22 18:37:18
 * @FilePath: \vue3Music\src\components\tab\Tab.tsx
 * @Description:
 */
import { defineComponent, reactive, ref } from "vue";
import style from "./Tab.module.less";
const Tab = defineComponent({
  setup() {
    const defaultActive = ref<string>("");
    const asider = reactive([
      {
        title: "发现音乐",
        icon: "iconfont icon-yinle",
      },
      {
        title: "视频",
        icon: "iconfont icon-yinle",
      },
      {
        title: "收藏",
        icon: "iconfont icon-yinle",
      },
      {
        title: "每日推荐",
        icon: "iconfont icon-yinle",
      },
    ]);
    return () => (
      <div class={style.container}>
        <div class={style.aside}>
          <el-menu
            class={style.menu_vertical_demo}
            default-active={defaultActive.value}
          >
            {asider.map((item) => {
              return (
                <el-menu-item index={item.title}>
                  <i class={item.icon}></i>
                  <span>{item.title}</span>
                </el-menu-item>
              );
            })}
          </el-menu>
        </div>
      </div>
    );
  },
});
export default Tab;
