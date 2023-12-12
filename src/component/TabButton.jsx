const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  
    return (
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {children}
        </p>
        <div
     
          className="h-1 bg-primary-500 mt-2 mr-3"
        ></div>
      </button>
    );
  };
  
  export default TabButton;
  