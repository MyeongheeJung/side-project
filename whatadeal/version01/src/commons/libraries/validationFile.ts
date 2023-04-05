import { Modal } from "antd";

export default function checkValidationFile(file: File) {
  // 1 => 1bite
  // 1 * 1024 => 1KB
  // 1 * 1024 * 1024 => 1MB
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일 용량이 너무 큽니다! (제한 5MB)" });
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.Error("jpeg 파일 또는 png 파일만 업로드 가능합니다!");
    return false;
  }

  return true;
}
