import { useLanguage } from "@/context/language_themeProvider";

const LangSwitch = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex flex-row items-center right-1 ">
      {language === "ar" ? (
        <button
          onClick={() => switchLanguage("en")}
          className="flex flex-row items-center font-medium text-gray-900 dark:text-white focus:outline-none"
        >
          <span className="text-md">En</span>
          <span className="ml-1">
            {" "}
            <img
              src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
              className="w-5 h-5"
            />
          </span>
        </button>
      ) : (
        <button
          onClick={() => switchLanguage("ar")}
          className="flex flex-row items-center text-sm font-medium text-gray-900 focus:outline-none dark:text-white "
        >
          <span className="text-md">ع</span>
          <span className="ml-1">
            {" "}
            <img
              src="https://img.icons8.com/?size=48&id=15521&format=png"
              className="w-5 h-5"
            />
          </span>
        </button>
      )}
    </div>
  );
};

export default LangSwitch;
