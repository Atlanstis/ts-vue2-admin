import Vue from 'vue'
import {
  Button,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Form,
  FormItem,
  Input,
  Message,
  MessageBox,
} from 'element-ui'

Vue.use(Button)
  .use(Container)
  .use(Aside)
  .use(Header)
  .use(Main)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Dropdown)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Avatar)
  .use(Form)
  .use(FormItem)
  .use(Input)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
