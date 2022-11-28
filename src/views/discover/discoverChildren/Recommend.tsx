import { defineComponent, onMounted, reactive } from 'vue';
import { banner, personalized } from '../../../api/index'
import style from '../style/Recommend.module.less'
import Listcar from '../../../components/listcar/Listcar'
const Recommend = defineComponent({
    setup() {
        let carousel = reactive<Array<string>>([])
        let getBanner = async () => {
            let { banners } = await banner()
            banners.forEach((item: any) => {
                carousel.push(item.imageUrl)
            });

        }
        let listCardItem = reactive<Array<any>>([])
        let getPersonalized = async () => {
            let { result } = await personalized({ limit: 10 })
            result.forEach((item: any) => {
                listCardItem.push({ picUrl: item.picUrl, name: item.name })
            });
            console.log(listCardItem);


        }
        onMounted(() => {
            getBanner()
            getPersonalized()
        })
        return () => (
            <div class={style.recommend}>
                <el-row class="row-bg" justify="center">
                    <el-col span={22}>
                        <el-carousel interval={4000} type="card" height="200px">
                            {carousel.map(item => {
                                return (
                                    <el-carousel-item>
                                        <img class={style.image} src={item} alt="" />
                                    </el-carousel-item>
                                )
                            })

                            }
                        </el-carousel>
                    </el-col>
                </el-row>
                <el-row class="row-bg" justify="center">
                    <el-col span={23}>
                        <Listcar listCardItem={listCardItem} />
                    </el-col>
                </el-row>
            </div >
        )
    }
})
export default Recommend