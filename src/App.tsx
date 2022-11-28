import { defineComponent, nextTick, onMounted } from "vue";
import Header from "./components/header/Header";
import Tab from "./components/tab/Tab";
import style from './app.module.less'
const App = defineComponent({
  setup() {
    const setFont = function (data?: number) {
      if (data) {
        var cliWidth = data - 10;
      } else {
        let html = document.documentElement;
        var cliWidth = html.clientWidth - 10;
      }
      nextTick(() => {
        document.documentElement.style.fontSize = 10 * (cliWidth / 1920) + "px";
      });
    };
    onMounted(() => {
      setFont();
      window.addEventListener("resize", () => setFont(), false);
    });

    return () => (
      <>
        <Header />
        <div class={style.content}>
          <Tab></Tab>
          <router-view></router-view>
        </div>
      </>
    );
  },
});
export default App;
