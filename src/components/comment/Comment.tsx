import { defineComponent, ref } from "vue";
import style from "./Comment.module.less";
const Comment = defineComponent({
  props: {
    commentType: {
      type: String,
      default() {
        return "";
      },
    },
    comments: {
      type: Array,
      default() {
        return [];
      },
    },
    ClicktransToHotComment: {
      type: Function,
      default() {
        return () => {};
      },
    },
  },
  setup(props: any, { emit, slots }) {
    let commentInput = ref<string>("");
    return () => (
      <>
        <div class={style.hotComments}>
          {props.commentType !== "" && props.commentType !== "music" ? (
            <el-row>
              <el-col>
                <div class={style.comments}>
                  <el-row>
                    <el-col>
                      <el-input
                        type="textarea"
                        class={style.commentArea}
                        placeholder="留下你的评论"
                        maxlength="140"
                        vModel={commentInput.value}
                      ></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <div class={style.submitCommentButton}>
                        <el-button size="mini" class="submitComment">
                          评论
                        </el-button>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          ) : (
            <div></div>
          )}
          {props.commentType !== "" && props.commentType === "music" ? (
            <div class={style.musicComment}></div>
          ) : (
            <div></div>
          )}
          <div class={style.commentHeader}>{slots.title?.()}</div>
          {props.comments.map((item: any) => {
            return (
              <div class={style.commentItem}>
                <div class={style.commentCreatorAvatar}>
                  <img src={item.user.avatarUrl} alt="" />
                </div>
                <div class={style.commentMain}>
                  <div class={style.commentContent}>
                    <span class={style.commentUserNickName}>
                      {item.user.nickname}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  },
});
export default Comment;
