import { defineComponent, ref, onMounted, reactive } from "vue";
import { detail } from "@/api/index";
import { useRoute } from "vue-router";
import Comment from "@/components/comment/Comment";
import style from "./MusicListDetail.module.less";
interface comment {
  cnum: number;
  code: number;
  commentBanner: unknown;
  comments: Array<any>;
  hotComments: Array<any>;
  isMusician: boolean;
  more: boolean;
  moreHot: boolean;
  topComments: Array<any>;
  total: number;
  userId: number;
}
const MusicListDetail = defineComponent({
  setup() {
    const Route = useRoute();
    const refcomments = ref<any>(null);
    const loading = ref<boolean>(true);
    let MusicListDetail = ref<any>({});
    let avatarUrl = ref<any>({});
    let tags = reactive<Array<string>>([]);
    const activeName = ref<string>("first");
    let comment = reactive<comment>({
      cnum: 0,
      code: 0,
      commentBanner: null,
      comments: [],
      hotComments: [],
      isMusician: true,
      more: true,
      moreHot: true,
      topComments: [],
      total: 0,
      userId: 0,
    });
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
                      <span class={style.titleTag}>??????</span>
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
                        <span>????????????</span>
                      </div>
                      <div class={style.buttonItem}>
                        <i class="iconfont icon-bofang playAll"></i>
                        <span>??????</span>
                      </div>
                      <div class={style.buttonItem}>
                        <i class="iconfont icon-bofang playAll"></i>
                        <span>??????</span>
                      </div>
                    </div>
                    <div class={style.tags}>
                      ?????????
                      {tags.map((item: any) => {
                        return <div class={style.tagItem}>{item}</div>;
                      })}
                    </div>
                    <div class={style.otherInfo}>
                      <div class={style.musicNum}>
                        ??????: {MusicListDetail.value.trackCount}
                      </div>
                      <div class={style.playCount}>
                        ?????????{MusicListDetail.value.playCount}
                      </div>
                    </div>
                    <div class={style.desc}>
                      ?????????{MusicListDetail.value.description}
                    </div>
                  </div>
                </div>
                <div class={style.musicList}>
                  <el-tabs vModel={activeName.value}>
                    <el-tab-pane
                      label={"????????????"}
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
                          label="????????????"
                          min-width="350"
                        ></el-table-column>
                        <el-table-column
                          prop="ar[0].name"
                          label="??????"
                          min-width="120"
                        ></el-table-column>
                        <el-table-column
                          prop="al.name"
                          label="??????"
                          min-width="170"
                        ></el-table-column>
                        <el-table-column
                          prop="dt"
                          label="??????"
                          min-width="100"
                        ></el-table-column>
                      </el-table>
                    </el-tab-pane>
                    <el-tab-pane label={"??????"} name={"second"} height={"3px"}>
                      {comment.comments ? (
                        <div class={style.commentList}>
                          {comment.hotComments ? (
                            <Comment
                              commentType={"musicList"}
                              comments={comment.hotComments}
                              ref="comments"
                            >{{ title: () => <h3>????????????</h3> }}</Comment>
                          ) : (
                            <Comment
                              commentType={"musicList"}
                              comments={comment.comments}
                              ref="comments"
                              ClicktransToHotComment={(info?: any) => {
                                refcomments.value.comments.floorComment(
                                  info.commentId,
                                  info.nickName
                                );
                              }}
                            >
                              {{ title: () => <h3>????????????</h3> }}
                            </Comment>
                          )}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </el-tab-pane>
                    <el-tab-pane label={"?????????"} name={"third"} height={"3px"}>
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
