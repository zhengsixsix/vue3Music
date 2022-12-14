/*
 * @Author: 王将近
 * @Date: 2022-11-22 18:35:24
 * @LastEditors: 王将近
 * @LastEditTime: 2022-11-22 18:37:18
 * @FilePath: \vue3Music\src\components\tab\Tab.tsx
 * @Description:
 */
import { defineComponent, nextTick, onMounted, reactive, ref } from "vue";
import style from "./Tab.module.less";
const Tab = defineComponent({
  setup() {
    let defaultActive = ref<string>("/discover");
    let asideMode = ref<string>("");
    const asider = reactive([
      {
        title: "发现音乐",
        icon: "iconfont icon-yinle",
        id: "/discover",
      },
      {
        title: "视频",
        icon: "iconfont icon-yinle",
        id: "/video",
      },
      {
        title: "收藏",
        icon: "iconfont icon-yinle",
        id: "/collection",
      },
      {
        title: "每日推荐",
        icon: "iconfont icon-yinle",
        id: "/recommend",
      },
    ]);
    let bodyWidth = ref<number>(0);
    onMounted(() => {
      nextTick(() => {
        let bodys: HTMLBodyElement | null = document.querySelector("body");
        if (bodys !== null) {
          bodyWidth.value = bodys.clientWidth;
          if (bodyWidth.value <= 900) {
            asideMode.value = "horizontal";
          } else {
            asideMode.value = "vertical";
          }
        }
      });
    });
    return () => (
      <div class={style.container}>
        <div class={style.aside}>
          <el-menu
            class={style.menu_vertical_demo}
            mode={asideMode.value}
            router={true}
            default-active={defaultActive.value}
            ellipsis={false}
          >
            {asider.map((item) => {
              return (
                <el-menu-item index={item.id}>
                  {item.title}
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
