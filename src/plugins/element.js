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
  Card,
  Table,
  TableColumn,
  Select,
  Option,
  Radio,
  RadioGroup,
  InputNumber,
  Loading,
  Pagination,
  Row,
  Col,
  Dialog,
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
  .use(Card)
  .use(Table)
  .use(TableColumn)
  .use(Select)
  .use(Option)
  .use(Radio)
  .use(RadioGroup)
  .use(InputNumber)
  .use(Loading.directive)
  .use(Pagination)
  .use(Row)
  .use(Col)
  .use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
