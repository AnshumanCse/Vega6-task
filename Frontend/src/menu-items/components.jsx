// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  DollarOutlined,
  RocketOutlined,
  LoadingOutlined,
  ReadOutlined,
  KeyOutlined,
  GlobalOutlined,
  FileDoneOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  RocketOutlined,
  DollarOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  ReadOutlined,
  KeyOutlined,
  GlobalOutlined,
  FileDoneOutlined,
  NotificationOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //
<FileDoneOutlined />;

const components = {
  id: "components",
  title: "Components",
  type: "group",
  children: [


    {
      id: "blogs",
      title: "Post Blogs",
      type: "item",
      url: "/blogs",
      icon: icons.ReadOutlined,
    },

   
    // {
    //   id: "common",
    //   title: "common",
    //   type: "item",
    //   url: "/common",
    //   icon: icons.BarcodeOutlined,
    // },
  ],
};

export default components;
