import { defineComponent, ref } from 'vue';
import style from './Navbar.module.less'
interface BarItem {
    name: string,
    path: string
}
const Navbar = defineComponent({
    props: { navBarItem: Array },
    setup(props: any) {
        const navBarItem = props.navBarItem
        let activeNum = ref<number>(0)
        let clickBarItem = (item: BarItem, index: number) => {
            activeNum.value = index
        }
        return () => (<div class={style.navBarContainer}>
            <div class={style.navBar}>
                {navBarItem.map((item: BarItem, index: number) => {
                    return (
                        <div class={index === activeNum.value ? style.active : style.barItem} onClick={() => clickBarItem(item, index)}>
                            {item.name}
                        </div>
                    )
                })
                }
            </div>

        </div>)
    }
})
export default Navbar