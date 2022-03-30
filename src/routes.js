import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  SHOP_ROUTE,
} from "@utils/constants";

import Admin from "@pages/Admin";
import Auth from "@pages/Auth";
import Basket from "@pages/Basket";
import Device from "@pages/Device";
import Shop from "@pages/Shop";

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: REGISTER_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },

  {
    path: DEVICE_ROUTE,
    Component: Device,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];
