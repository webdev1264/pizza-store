import Header from "../components/Header";
import StoreProvider from "./StoreProvider";
import { Nunito } from "next/font/google";
import "../scss/app.scss";

const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizza store",
  description: "The most delicious pizza ever",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={nunito.className}>
          <div className="wrapper">
            <Header />
            <main>
              <div className="content">
                <div className="container">{children}</div>
              </div>
            </main>
          </div>
        </body>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
