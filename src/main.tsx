import React from "react";
import ReactDOM from "react-dom/client";
import { setupStore } from "@store/store.ts";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";
import LayoutWithAuth from "./components/LayoutWithAuth";
import Home from "@pages/Home.tsx";
import theme from "./styles/theme";
import "@aws-amplify/ui-react/styles.css";
import "@styles/index.css";

/**
 * vitejs has it's own way to expose env variables
 * see https://vitejs.dev/guide/env-and-mode
 */
const clientId = import.meta.env
  .VITE_REACT_APP_AWS_USER_POOL_WEB_CLIENT_ID as string;
const poolId = import.meta.env.VITE_REACT_APP_AWS_USER_POOL_ID as string;

/**
 * Configuring Amplify to use existing AWS stack created outside amplify
 * see https://docs.amplify.aws/javascript/tools/libraries/configure-categories/
 */
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: clientId,
      userPoolId: poolId,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LayoutWithAuth>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </LayoutWithAuth>
    </ThemeProvider>
  </React.StrictMode>
);
