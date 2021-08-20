import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MiniPostList from "../../components/MiniPostList/MiniPostList";
import RedArrowImg from "../../images/RedArrowIcon.svg";
import GreenPlusImg from "../../images/GreenPlusImg.svg";
import imageCompression from "browser-image-compression";
import { createPost, updatePost } from "../../actions/posts";
import "./adminPostForm.scss";
import { useState } from "react";
import { useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Pagination from "../../components/Pagination/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AdminPostForm = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const [compressedImage, setCompressedImage] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [""],
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    imageCompression(file, options).then((x) => setCompressedImage(x));
  };

  useEffect(() => {
    if (compressedImage) {
      const compr = async () => {
        const base64 = await convertBase64(compressedImage);
        setPostData({ ...postData, selectedFile: base64 });
      };
      compr();
    }
  }, [compressedImage]);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: [""],
      selectedFile: "",
    });
    document.getElementById("input-file").value = "";
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <div className="admin-header">
        <div className="admin-progress">
          <div className="progress">
            <div className="back-square">
              <div className="button">
                <img src={RedArrowImg} alt="RedArrow" />
              </div>
              <div className={postData.title ? `line active` : `line`} />
            </div>
            <div className="progress-button">
              <div className="progress-button-header">
                <div
                  className={
                    postData.title ? `line-progress-btn active` : `line`
                  }
                />
                <div className={postData.title ? `button active` : `button`}>
                  <img
                    src={GreenPlusImg}
                    alt="GreenPlusImg"
                    className={
                      postData.title ? `button-image active` : `button-image`
                    }
                  />
                  <div
                    className={
                      postData.title
                        ? `progress-button-footer active`
                        : `progress-button-footer`
                    }
                  >
                    Заголовок
                  </div>
                </div>
                <div
                  className={
                    postData.title ? `line-progress-btn active` : `line`
                  }
                />
              </div>
            </div>

            <div className="progress-button">
              <div className="progress-button-header">
                <div
                  className={
                    postData.tags[0] !== ""
                      ? `line-progress-btn active`
                      : `line`
                  }
                />
                <div
                  className={
                    postData.tags[0] !== "" ? `button active` : `button`
                  }
                >
                  <img
                    src={GreenPlusImg}
                    alt="GreenPlusIcon"
                    className={
                      postData.tags[0] !== ""
                        ? `button-image active`
                        : `button-image`
                    }
                  />
                  <div
                    className={
                      postData.tags[0] !== ""
                        ? `progress-button-footer active`
                        : `progress-button-footer`
                    }
                  >
                    Теги
                  </div>
                </div>
                <div
                  className={
                    postData.tags[0] !== ""
                      ? `line-progress-btn active`
                      : `line`
                  }
                />
              </div>
            </div>

            <div className="progress-button">
              <div className="progress-button-header">
                <div
                  className={
                    postData.selectedFile ? `line-progress-btn active` : `line`
                  }
                />
                <div
                  className={postData.selectedFile ? `button active` : `button`}
                >
                  <img
                    src={GreenPlusImg}
                    alt="GreenPlusIcon"
                    className={
                      postData.selectedFile
                        ? `button-image active`
                        : `button-image`
                    }
                  />

                  <div
                    className={
                      postData.selectedFile !== ""
                        ? `progress-button-footer active`
                        : `progress-button-footer`
                    }
                  >
                    Обложка
                  </div>
                </div>
                <div
                  className={
                    postData.selectedFile ? `line-progress-btn active` : `line`
                  }
                />
              </div>
            </div>

            <div className="progress-button">
              <div className="progress-button-header">
                <div
                  className={
                    postData.message ? `line-progress-btn active` : `line`
                  }
                />
                <div className={postData.message ? `button active` : `button`}>
                  <img
                    src={GreenPlusImg}
                    alt="GreenPlusIcon"
                    className={
                      postData.message ? `button-image active` : `button-image`
                    }
                  />

                  <div
                    className={
                      postData.message
                        ? `progress-button-footer active`
                        : `progress-button-footer`
                    }
                  >
                    Текст
                  </div>
                </div>
                <div
                  className={
                    postData.message ? `line-progress-btn active` : `line`
                  }
                />
              </div>
            </div>

            <button
              className="success-square"
              aria-label="SuccessButton"
              disabled={
                postData.title &&
                postData.tags[0] !== "" &&
                postData.selectedFile &&
                postData.message
                  ? false
                  : true
              }
              onClick={handleSubmit}
            >
              <div className={postData.message ? `line active` : `line`} />
              <div
                className={
                  postData.title &&
                  postData.tags[0] !== "" &&
                  postData.selectedFile &&
                  postData.message
                    ? `button active`
                    : `button`
                }
              >
                <div className="success-icon">
                  <span className="success-line-1" />
                  <span className="success-line-2" />
                </div>
              </div>
            </button>
          </div>

          <div className="admin-icon"></div>
          <div className="line-progress" />
        </div>
      </div>

      <div className="admin-body">
        <form className="text-area">
          <input
            type="text"
            className="title-field"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            name="title"
            placeholder="Заголовок интересной новости для публикации"
          />
          <input
            type="text"
            className="tag-field"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            name="tags"
            placeholder="Теги ( через запятую )"
          />
          <input
            id="input-file"
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <CKEditor
            editor={ClassicEditor}
            data={postData.message}
            className="text-field"
            onChange={(e, editor) =>
              setPostData({ ...postData, message: editor.getData() })
            }
            name="message"
            placeholder="Текст поста"
          />
        </form>
        <div className="image-area">
          <div className="mini-manuals-card">
            <Pagination page={page} route="posts" />
            <MiniPostList setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPostForm;
