import { defineComponent, onMounted, ref, reactive } from "vue";
import style from "./Listcar.module.less";
interface listCardItems {
  picUrl: string;
  name: string;
  id: number;
}
const Listcar = defineComponent({
  props: {
    listCardItem: Array,
  },
  setup(props: any, { emit }) {
    const loading = ref<boolean>(true);
    let listCardItems = reactive<listCardItems[]>(props.listCardItem);
    const clickListCardItem = (id: number) => {
      emit("ClickListCardItem", id);
    };
    if (listCardItems.length > 6) {
      loading.value = false;
    }
    onMounted(() => {});
    return () => (
      <>
        {loading.value ? (
          <el-skeleton rows={5} loading={loading.value} animated />
        ) : (
          <div class={style.listCard}>
            {listCardItems.map((item: listCardItems) => {
              return (
                <div
                  class={style.listCardItem}
                  onClick={() => {
                    clickListCardItem(item.id);
                  }}
                >
                  <div class={style.image}>
                    <img src={item.picUrl} alt="" />
                  </div>
                  <div class={style.title}>{item.name}</div>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  },
});
export default Listcar;
