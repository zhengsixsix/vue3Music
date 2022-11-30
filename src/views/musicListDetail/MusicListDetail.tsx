import { defineComponent, ref, onMounted, reactive } from "vue";
import { detail } from "@/api/index";
import { useRoute } from "vue-router";
import Comment from "@/components/comment/Comment";
import style from "./MusicListDetail.module.less";
const MusicListDetail = defineComponent({
  setup() {
    const Route = useRoute();
    const loading = ref<boolean>(true);
    let MusicListDetail = ref<any>({});
    let avatarUrl = ref<any>({});
    let tags = reactive<Array<string>>([]);
    const activeName = ref<string>("first");
    const getMusicListDetail = async () => {
      let timestamp = Date.parse(new Date() as unknown as string);
      let { playlist }: any = await detail({
        id: Route.params.id,
        timestamp,
      });
      MusicListDetail.value = playlist;
      avatarUrl.value = playlist.creator;
      tags = MusicListDetail.value.tags;
      if (MusicListDetail.value) {
        loading.value = false;
      }
    };
    onMounted(() => {
      getMusicListDetail();
    });
    return () => (
      <>
        {loading.value ? (
          <div class={style.musicListDetail}>
            <el-skeleton
              rows={5}
              loading={loading.value}
              animated
            ></el-skeleton>
          </div>
        ) : (
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
                      <div class={style.userName}>
                        {avatarUrl.value.nickname}
                      </div>
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
                <div class={style.musicList}>
                  <el-tabs vModel={activeName.value}>
                    <el-tab-pane
                      label={"歌曲列表"}
                      name={"first"}
                      height={"3px"}
                    >
                      <el-table
                        data={MusicListDetail.value.tracks}
                        stripe
                        style="width: 100%"
                        onrow-dblclick="clickRow"
                      >
                        <el-table-column label="" width="23">
                          <i class="iconfont icon-download"></i>
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="音乐标题"
                          min-width="350"
                        ></el-table-column>
                        <el-table-column
                          prop="ar[0].name"
                          label="歌手"
                          min-width="120"
                        ></el-table-column>
                        <el-table-column
                          prop="al.name"
                          label="专辑"
                          min-width="170"
                        ></el-table-column>
                        <el-table-column
                          prop="dt"
                          label="时长"
                          min-width="100"
                        ></el-table-column>
                      </el-table>
                    </el-tab-pane>
                    <el-tab-pane label={"评论"} name={"second"} height={"3px"}>
                      <Comment></Comment>
                    </el-tab-pane>
                    <el-tab-pane label={"收藏者"} name={"third"} height={"3px"}>
                      Role
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-col>
            </el-row>
          </div>
        )}
      </>
    );
  },
});
export default MusicListDetail;
