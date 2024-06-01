
type ExpanderButtonProps = {
  expanderOpen: boolean;
  onClick: () => void;
};

//React.FunctionComponent <generic type>
const ExpanderButton: React.FC<ExpanderButtonProps> = ({
  expanderOpen,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="relative h-6 w-6 cursor-pointer p-3">
      <div
        className="absolute h-[3px] w-6 bg-black transition-transform duration-300 ease-in-out"
      />
      <div
        className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${expanderOpen ? "" : "rotate-90 transform"}`}
      />
    </div>
  );
};

export default ExpanderButton;
