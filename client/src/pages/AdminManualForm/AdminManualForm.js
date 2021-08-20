import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import RedArrowImg from "../../images/RedArrowIcon.svg";
import GreenPlusImg from "../../images/GreenPlusImg.svg";
import imageCompression from "browser-image-compression";
import "./adminManualForm.scss";
import { createManual } from "../../actions/manuals";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MiniManualList from "../../components/MiniManualList/MiniManualList";
import PaginationManual from "../../components/PaginationManual/PaginationManual";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AdminManualForm = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const [compressedImage, setCompressedImage] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const manual = useSelector((state) =>
    currentId ? state.manuals.manuals.find((p) => p._id === currentId) : null
  );

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 120,
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
    if (manual) setPostData(manual);
  }, [manual]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createManual(postData));
      clear();
    }
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
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
    <div className="admin-manual-form">
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
                postData.title && postData.selectedFile && postData.message
                  ? false
                  : true
              }
              onClick={handleSubmit}
            >
              <div className={postData.message ? `line active` : `line`} />
              <div
                className={
                  postData.title && postData.selectedFile && postData.message
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
            id="input-file"
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          {/* <textarea
            type="text"
            className="text-field"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            name="message"
            placeholder="Текст поста"
          /> */}
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
          {postData.message}
        </form>
        <div className="image-area">
          <div className="mini-manuals-card">
            <PaginationManual page={page} route="manuals" />
            <MiniManualList setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManualForm;
