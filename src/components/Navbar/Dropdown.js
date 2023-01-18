const Dropdown = () => {
  const dropdownData = [
    { href: "#", option: "Dropdown Option 1" },
    { href: "#", option: "Dropdown Option 2" },
    { href: "#", option: "Dropdown Option 3" },
  ];
  const renderedOptions = dropdownData.map((item) => {
    return (
      <a
        href={item.href}
        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
      >
        {item.option}
      </a>
    );
  });

  return (
    <div className="absolute top-5 -left-10  w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
      <div className="p-2">{renderedOptions}</div>
    </div>
  );
};
export default Dropdown;
