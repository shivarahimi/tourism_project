// base
import { FC } from "react";
import { BsSearch } from "react-icons/bs";

interface IPropType {}

const TabSearchBox: FC<IPropType> = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between absolute bottom-40 right-20 gap-12 p-5 rounded-[100px] w-[915px] bg-white">
        <div>
          <h3>مقصد</h3>
          <span>مقصد بعدی کجاست؟</span>
        </div>
        <div>
          <h3>فعالیت</h3>
          <span>انتخاب فعالیت</span>
        </div>
        <div>
          <h3>نوع تور</h3>
          <span>انتخاب نوع تور</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-[40px] text-white text-lg font-bold py-5 px-9 bg-gt-gradient-1">
          {/* compo  */}
          <BsSearch />
          <button>
            <p>جستجو</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export { TabSearchBox };
