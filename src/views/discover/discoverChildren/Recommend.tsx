import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { banner, personalized } from "../../../api/index";
import style from "../style/Recommend.module.less";
import Listcar from "../../../components/listcar/Listcar";
interface listCardItem {
  picUrl: string;
  name: string;
  id: number;
}
const Recommend = defineComponent({
  setup() {
    const Router = useRouter();
    const loading = ref<boolean>(true);
    let carousel = reactive<Array<string>>([]);
    let getBanner = async () => {
      let { banners }: any = await banner();
      banners.forEach((item: any) => {
        carousel.push(item.imageUrl);
      });
    };
    let listCardItem = reactive<Array<listCardItem>>([]);
    let getPersonalized = async () => {
      let { result }: any = await personalized({ limit: 10 });
      result.forEach((item: any) => {
        listCardItem.push({
          picUrl: item.picUrl,
          name: item.name,
          id: item.id,
        });
      });
      if (carousel.length > 6) {
        loading.value = false;
      }
    };
    const clickListCardItem = (id?: number): void => {
      Router.push({
        name: "musicListdetail",
        params: { id },
      });
    };
    onMounted(() => {
      getBanner();
      getPersonalized();
    });
    return () => (
      <>
        {loading.value ? (
          <el-skeleton rows={5} loading={loading.value} animated />
        ) : (
          <div class={style.recommend}>
            <el-row class="row-bg" justify="center">
              <el-col span={22}>
                <el-carousel interval={4000} type="card" height="200px">
                  {carousel.map((item) => {
                    return (
                      <el-carousel-item>
                        <img class={style.image} src={item} alt="" />
                      </el-carousel-item>
                    );
                  })}
                </el-carousel>
              </el-col>
            </el-row>
            <el-row class="row-bg" justify="center">
              <el-col span={23}>
                <Listcar
                  listCardItem={listCardItem}
                  ClickListCardItem={clickListCardItem}
                />
              </el-col>
            </el-row>
          </div>
        )}
      </>
    );
  },
});
export default Recommend;
