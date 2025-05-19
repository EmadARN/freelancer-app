import { GeminiEffect } from "../features/landing/GeminiEffect";
import AppBar from "../layout/AppBar";

function Home() {
  return (
    <div className="">
      <AppBar home />
      <GeminiEffect />

      <div className="">
        <div className="grid-rows-[10px _ 1fr] container mt-16 grid grid-cols-1 justify-items-center gap-y-16 text-secondary-900 sm:grid-cols-2 xl:max-w-screen-lg">
          <span className="text-xl font-bold sm:col-span-2 sm:text-2xl">
            این اپ برای کارفرمایان و فریلنسران مناسب می باشد
          </span>

          <div className="flex flex-col items-center">
            <img
              className="mb-8 h-[150px] w-[250px]"
              src="/Images/owner.png"
              alt="owner image"
            />

            <span className="text-xl font-bold">کارفرما ها</span>

            <div className="flex gap-x-2">
              <span className="text-2xl font-bold">&bull;</span>
              <span className="pt-1 text-base">
                ایجاد پروژه در دسته بندی های مختلف
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="mb-8 h-[150px] w-[250px]"
              src="/Images//freelancer.png"
              alt="freelancer image"
            />

            <span className="text-xl font-bold">فریلنسر ها</span>

            <div className="flex gap-x-2">
              <span className="text-2xl font-bold">&bull;</span>
              <span className="pt-1 text-base">
                درخواست انجام پروژه های مختلف
              </span>
            </div>
          </div>
        </div>

        <div className="grid-rows-[10px _ 1fr] container mt-16 grid grid-cols-1 items-center justify-items-center gap-y-8 text-secondary-900 md:grid-cols-2 xl:max-w-screen-lg">
          <span className="text-xl font-bold sm:text-2xl md:col-span-2">
            قابلیت های این سایت
          </span>

          <ul className="flex list-none flex-col gap-y-4 text-base sm:text-lg">
            <li className="before:mr-2 before:text-xl before:text-blue-600 before:content-['💎']">
              تغییر دادن تم سایت به کمک{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://tailwindcss.com"
              >
                tailwind-css
              </a>
            </li>
            <li className="before:mr-2 before:text-xl before:text-blue-600 before:content-['💎']">
              ورود به سایت از طریق کد otp
            </li>
            <li className="before:mr-2 before:text-xl before:text-blue-600 before:content-['💎']">
              اعتبار سنجی فرم ها از طریق{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://www.react-hook-form.com/"
              >
                react-hook-form
              </a>
            </li>
            <li className="before:mr-2 before:text-xl before:text-blue-600 before:content-['💎']">
              فچ کردن دیتا به کمک{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://tanstack.com/"
              >
                Tanstack-React-query
              </a>
            </li>
          </ul>

          <img
            className="row-start-2 h-[250px] w-[450px] md:col-start-2"
            src="/Images/features.png"
            alt="features image"
          />
        </div>
      </div>
      <footer className="mt-16 w-full border-t border-gray-200 bg-transparent py-6 text-center text-sm text-gray-600">
        ساخته شده توسط 💜
      </footer>
    </div>
  );
}
export default Home;
