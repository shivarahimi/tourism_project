// base
import { FC } from "react";

// lib
import { Modal } from "antd";
// icon
import { IoIosCloseCircleOutline } from "react-icons/io";

// css
import "./FullModal.css";

interface IFullModalPropType {
  children: React.ReactNode;

  title?: string | React.ReactNode;
  isOpen: boolean;
  onCancel: () => void;
  centered?: boolean;
  width?: string | number;
  classNames?: string;
  style?: React.CSSProperties;

  confirmLoading?: boolean;
  footer?: React.ReactNode | ((params: any) => React.ReactNode);
  cancelText?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;

  maskClosable?: boolean;
  modalRender?: (node: React.ReactNode) => React.ReactNode;
  okText?: React.ReactNode;
  okType?: "default" | "primary" | "dashed" | "text" | "link";
  wrapClassName?: string;
}

const FullModal: FC<IFullModalPropType> = ({
  children,

  title,
  isOpen,
  onCancel,
  centered = true,
  width,
  classNames,
  style,

  confirmLoading = false,
  footer = false,
  cancelText,
  closable = true,
  closeIcon,

  maskClosable = true,
  modalRender,
  okText = true,
  okType = "default",
  wrapClassName,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isOpen}
        onCancel={onCancel}
        centered={centered}
        width={width || 400}
        className={classNames || "mx-auto"}
        style={style}
        confirmLoading={confirmLoading}
        footer={footer}
        zIndex={2000}
        cancelText={cancelText || "لغو"}
        closable={closable}
        closeIcon={
          <span>
            {closeIcon || (
              <IoIosCloseCircleOutline
                style={{ color: "white", fontSize: "32px" }}
              />
            )}
          </span>
        }
        mask={true}
        maskClosable={maskClosable}
        modalRender={
          modalRender ||
          ((node) => (
            <div
              style={{
                animation: "fadeInUp 0.5s ease-out;",
              }}
            >
              {node}
            </div>
          ))
        }
        okText={okText}
        okType={okType}
        wrapClassName={wrapClassName}
      >
        {children}
      </Modal>
    </>
  );
};

export { FullModal };
