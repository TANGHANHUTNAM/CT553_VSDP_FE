import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";
import viVN from "antd/es/locale/vi_VN";
import router from "./router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <ConfigProvider locale={viVN}>
          <RouterProvider router={router} />
        </ConfigProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={10}
          containerStyle={{
            marginTop: 18,
          }}
          toastOptions={{
            duration: 3000,
            style: {
              paddingInline: 20,
              borderRadius: 4,
              fontSize: "1rem",
            },
            success: {
              style: {
                color: "#61D345",
              },
            },
            error: {
              style: {
                color: "#FF4B4B",
              },
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
