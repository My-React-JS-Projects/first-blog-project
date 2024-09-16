import { Controller } from "react-hook-form"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

export default function RTE({ name, control, label, defaultValue = "" }) {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", { color: [] }],
      [
        { align: null },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
    ],
  }
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <>
            <ReactQuill
              className="bg-white"
              defaultValue={defaultValue}
              theme="snow"
              modules={quillModules}
            />
          </>
        )}
      />
    </div>
  )
}
