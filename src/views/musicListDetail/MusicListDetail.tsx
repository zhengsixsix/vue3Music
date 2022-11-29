import { defineComponent, ref, onMounted, reactive } from "vue";
import { detail } from "@/api/index";
import { useRoute } from "vue-router";
import style from "./MusicListDetail.module.less";
const MusicListDetail = defineComponent({
  setup() {
    const Route = useRoute();
    let MusicListDetail = ref<any>({});
    let avatarUrl = ref<any>({});
    let tags = reactive<Array<string>>([]);
    const getMusicListDetail = async () => {
      let timestamp = Date.parse(new Date() as unknown as string);
      let { playlist }: any = await detail({
        id: Route.params.id,
        timestamp,
      });
      MusicListDetail.value = playlist;
      avatarUrl.value = playlist.creator;
      tags = MusicListDetail.value.tags;
    };
    onMounted(() => {
      getMusicListDetail();
    });
    return () => (
      <div class={style.musicListDetail}>
        <el-row>
          <el-col span={20}>
            <div class={style.listInfo}>
              <div class={style.listAvatar}>
                <img src={MusicListDetail.value.coverImgUrl} alt="" />
              </div>
              <div class={style.right}>
                <div class={style.title}>
                  <span class={style.titleTag}>歌单</span>
                  <div class={style.titleContent}>
                    {MusicListDetail.value.name}
                  </div>
                </div>
                <div class={style.user}>
                  <div class={style.userAvatar}>
                    <img src={avatarUrl.value.avatarUrl} alt="" />
                  </div>
                  <div class={style.userName}>{avatarUrl.value.nickname}</div>
                  <div class={style.createTime}>
                    {MusicListDetail.value.createTime}
                  </div>
                </div>
                <div class={style.buttons}>
                  <div class={style.buttonItem}>
                    <i class="iconfont icon-bofang playAll"></i>
                    <span>播放全部</span>
                  </div>
                  <div class={style.buttonItem}>
                    <i class="iconfont icon-bofang playAll"></i>
                    <span>收藏</span>
                  </div>
                  <div class={style.buttonItem}>
                    <i class="iconfont icon-bofang playAll"></i>
                    <span>分享</span>
                  </div>
                </div>
                <div class={style.tags}>
                  标签：
                  {tags.map((item: any) => {
                    return <div class={style.tagItem}>{item}</div>;
                  })}
                </div>
                <div class={style.otherInfo}>
                  <div class={style.musicNum}>
                    歌曲: {MusicListDetail.value.trackCount}
                  </div>
                  <div class={style.playCount}>
                    播放：{MusicListDetail.value.playCount}
                  </div>
                </div>
                <div class={style.desc}>
                  简介：{MusicListDetail.value.description}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    );
  },
});
export default MusicListDetail;
