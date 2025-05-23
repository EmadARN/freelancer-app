import { HiCollection, HiHome, HiUsers } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>

        <CustomNavlink to="users">
          <HiUsers />
          <span>کاربران</span>
        </CustomNavlink>

        <CustomNavlink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>

        <CustomNavlink to="proposals">
          <AiFillProduct />
          <span>درخواست ها</span>
        </CustomNavlink>

        <CustomNavlink to="categories">
          <BiSolidCategoryAlt />
          <span>دسته بندی ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}
export default AdminLayout;
