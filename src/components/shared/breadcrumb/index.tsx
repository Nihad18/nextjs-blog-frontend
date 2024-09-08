"use client"
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// ant design
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbData = pathSegments.map((segment: string, index: number) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const title = segment.charAt(0).toUpperCase() + segment.slice(1);

    if (index === 0) {
      return {
        icon: <HomeOutlined />,
        title: "Admin",
        link: "/admin",
      };
    }

    if (index === pathSegments.length - 1) {
      return {
        title: title,
        link: null,
      };
    }

    return {
      title: title,
      link: path,
    };
  });
  
  const breadcrumbItems = breadcrumbData.map((item, index) => ({
    key: index,
    title: item.link ? (
      <Link href={item.link}>{item.title}</Link>
    ) : (
      <span>{item.title}</span>
    ),
    icon: item.icon,
  }));
  
  return (
    <Breadcrumb className='breadcrumb' items={breadcrumbItems} />
  );
};

export default BreadCrumb;

