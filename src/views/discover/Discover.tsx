import { defineComponent, reactive } from 'vue';
import style from './style/discover.module.less'
import Navbar from '../../components/navbar/Navbar'
const Discover = defineComponent({
    setup() {

        const navBarItem = reactive([
            { name: "个性推荐", path: "/discover/recommend" },
            { name: "歌单", path: "/discover/musiclist" },
            { name: "排行榜", path: "/discover/ranking" },
            { name: "歌手", path: "/discover/singer" },
        ])
        return () => (
            <div class={style.discover}>
                <Navbar navBarItem={navBarItem} />
                <router-view></router-view>
            </div>
        )
    }
})
export default Discover