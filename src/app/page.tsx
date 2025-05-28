import Slider from "@/app/components/Slider";
import ProductList from "@/app/components/ProductList";
import SectionHeader from "@/app/components/title_header/section-header";
import CategoryList from "@/app/components/CategoryList";

const HomePage = () => {
  return (
    <div className=''>

      <Slider />
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
            <SectionHeader title="Featured" heading="New Products" desciption=""></SectionHeader>
            <ProductList />
        </div>

        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <CategoryList />
      </div>

        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <SectionHeader title="Featured" heading="Products" desciption=""></SectionHeader>
          <ProductList />
        </div>

    </div>
  )
}

export default HomePage