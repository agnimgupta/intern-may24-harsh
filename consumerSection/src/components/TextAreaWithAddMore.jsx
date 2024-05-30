import SimpleTextArea from "./SimpleTextArea";
import AddMoreButton from "./AddMoreBtn";
const TextAreaWithAddMore = ({ label }) => {
  return (
    <div className="flex w-full flex-col items-end gap-3 md:w-[400px] ">
      <SimpleTextArea label={label} rows={4} mdWidth={400} />
      <AddMoreButton />
    </div>
  );
};

export default TextAreaWithAddMore;
