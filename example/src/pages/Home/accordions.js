import WorkPlusAuth from '../../cordova/WorkPlus_Auth';
import WorkPlusImage from '../../cordova/WorkPlus_Image';
import WorkPlusContact from '../../cordova/WorkPlus_Contact';
import WorkPlusFiles from '../../cordova/WorkPlus_Files';
import WorkPlusWebView from '../../cordova/WorkPlus_WebView';
import WorkPlusLocation from '../../cordova/WorkPlus_Location';
import WorkPlusBarcodeScanner from "../../cordova/WorkPlus_BarcodeScanner";
import WorkPlusAppStore from "../../cordova/WorkPlus_AppStore";
import WorkPlusPublicClound from '../../cordova/WorkPlus_PublicClound';
import WorkPlusTheme from '../../cordova/WorkPlus_Theme';
import WorkPlusDeviceInfo from '../../cordova/WorkPlus_DeviceInfo';
import WorkPlusNetInfo from '../../cordova/WorkPlus_NetInfo';
import WorkPlusEmail from '../../cordova/WorkPlus_Email';
import WorkPlusEventLog from '../../cordova/WorkPlus_EventLog';

const accordions = [{
  title: '用户信息',
  hook: 'WorkPlus_Auth',
  items: WorkPlusAuth,
}, {
  title: '图片',
  hook: 'WorkPlus_Image',
  items: WorkPlusImage,
}, {
  title: '联系人',
  hook: 'WorkPlus_Contact',
  items: WorkPlusContact,
}, {
  title: '文件',
  hook: 'WorkPlus_Files',
  items: WorkPlusFiles,
}, {
  title: '网页',
  hook: 'WorkPlus_WebView',
  items: WorkPlusWebView,
}, {
  title: '地理位置',
  hook: 'WorkPlus_Location',
  items: WorkPlusLocation,
}, {
  title: '设备信息',
  hook: 'WorkPlus_DeviceInfo',
  items: WorkPlusDeviceInfo,
}, {
  title: '网络连接信息',
  hook: 'WorkPlus_NetInfo',
  items: WorkPlusNetInfo,
}, {
  title: '扫码',
  hook: 'WorkPlus_BarcodeScanner',
  items: WorkPlusBarcodeScanner,
}, {
  title: '应用市场',
  hook: 'WorkPlus_AppStore',
  items: WorkPlusAppStore,
}, {
  title: '邮箱接口',
  hook: 'WorkPlus_Email',
  items: WorkPlusEmail,
}, {
  title: '事件日志接口',
  hook: 'WorkPlus_EventLog',
  items: WorkPlusEventLog,
}, {
  title: '公有云',
  hook: 'WorkPlus_PublicClound',
  items: WorkPlusPublicClound,
}, {
  title: '主题',
  hook: 'WorkPlus_Theme',
  items: WorkPlusTheme,
}];

export default accordions;

