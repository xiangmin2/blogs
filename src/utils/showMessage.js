import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {*} content 消息内容
 * @param {*} type 消息类型 info error success warn
 * @param {*} duration 多久后消失
 * @param {*} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function showMessage(options = {}) {
  const content = options.content || "";
  const duration = options.duration || 2000;
  const type = options.type || "info";
  const container = options.container || document.body;
  // 创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  const typeClassName = styles[`message-${type}`];
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  // 加样式
  div.className = `${styles.message} ${typeClassName}`;

  // 容器的position是否改动过
  if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }
  // 将div加入到容器中
  container.appendChild(div);
  //   浏览器强行渲染
  div.clientHeight; //导致reflow

  //   回到原来位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  // 隔一段时间消失
  setTimeout(function () {
    div.style.opacity = 0;
    div.style.transform = "translate(-50%, -50%) translateY(-25px)";
    div.addEventListener("transitionend", function () {
      div.remove();
      // 执行回调函数
      options.callback && options.callback();
    });
  }, duration);
}
